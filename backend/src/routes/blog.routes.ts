import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { createPostSchema, updatePostSchema } from '@rudra_iitm/web-blog'

const router = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>()

router.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()

    const { success } = createPostSchema.safeParse(body);

    if (!success) {
        c.status(400);
        return c.json({ message: 'Invalid input' })
    }

    try {
        const userId = c.get('jwtPayload').id;

        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
            }
        })

        c.status(200);
        return c.json({ id: post.id, msg: 'Post created' });
    } catch (err) {
        c.status(400);
        return c.json({ message: err })
    }
})

router.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    // const { title, content } = await c.req.json();
    const body = await c.req.json()
    const userId = c.get('jwtPayload').id;

    const { success } = updatePostSchema.safeParse({ ...body, id: userId });

    try {
        const post = await prisma.post.update({
            where: {
                id: userId
            },
            data: {
                title: body.title,
                content: body.content
            }
        })

        c.status(200);
        return c.json({ id: post.id, msg: 'Post updated' });
    } catch (err) {
        c.status(400);
        return c.json({ message: err })
    }

})

router.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const post = await prisma.post.findMany({})

        c.status(200);
        return c.json(post);
    } catch (err) {
        c.status(400);
        return c.json({ message: err })
    }
})

router.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
       const post = await prisma.post.findUnique({
        where: {
            id: c.req.param('id')
        }
    })

    c.status(200);
    return c.json(post);`
`} catch (err) {
    c.status(400);
    return c.json({ message: err })
}
})

router.route('/blog', router)

export { router }