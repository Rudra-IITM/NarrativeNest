import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt';
import { signInSchema, signUpSchema } from '@rudra_iitm/web-blog'

const router = new Hono<{
	Bindings: {
		DATABASE_URL: string
        JWT_SECRET: string
	}
}>();

router.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const {email, password, name} = await c.req.json();

    const { success } = signUpSchema.safeParse({email, password, name});

    if (!success) {
        c.status(400);
        return c.json({message: 'Invalid input'})
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (existingUser) {
            c.status(400);
            return c.json({message: 'User already exists'})
        }

        const user = await prisma.user.create({
            data: {
                email,
                password,
                name
            }
        })
        const payload = {
            id: user.id,
        }
        const token = await sign(payload, c.env.JWT_SECRET);
        c.status(200);
        return c.json(token);
    } catch (err) {
        c.status(400);
        return c.json({message: err})
    }
})

router.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const {email, password} = await c.req.json();

    const { success } = signInSchema.safeParse({email, password});

    if (!success) {
        c.status(400);
        return c.json({message: 'Invalid input'})
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
                password
            }
        });
        if (!user) {
            c.status(403);
            return c.json({message: 'Invalid credentials'})
        }
        const payload = {
            id: user.id,
        }
        const token = await sign(payload, c.env.JWT_SECRET);
        c.status(200);
        return c.json(token);

    } catch (err) {
        c.status(403);
        return c.json({message: err})
    }
})

router.route('/user', router)

export { router }