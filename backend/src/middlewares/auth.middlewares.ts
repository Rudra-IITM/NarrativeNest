import { Context, Next } from "hono";
import { verify } from "hono/jwt";

const authMiddleware = async (c: Context, next: Next) => {
    const token = c.req.header('Authorization')?.split(' ')[1];
    
    if (!token) {
        c.status(401);
        return c.json({ message: 'Unauthorized' });
    }

    try {
        const payload = await verify(token, c.env.JWT_SECRET);
        c.set('jwtPayload', payload);
        await next();
    } catch (err) {
        c.status(401)
        return c.json({ message: 'Unauthorized' });
    }
}

export { authMiddleware }