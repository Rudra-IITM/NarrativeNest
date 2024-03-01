import { Hono } from 'hono'
import { router as userRouter } from './routes/user.routes'
import { router as blogRouter } from './routes/blog.routes'
import { cors } from 'hono/cors'
import { authMiddleware } from './middlewares/auth.middlewares'

const app = new Hono()

app.route('/', userRouter)
app.route('/', blogRouter)

app.route('/api/v1', app)

app.use('/api/v1/blog/', authMiddleware);
app.use('/api/v1/*', cors());

export default app
