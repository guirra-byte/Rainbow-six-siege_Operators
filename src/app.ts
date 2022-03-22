import express from 'express'
import { routes } from './routes/agent.routes'

const app = express()

app.use(express.json())
app.use('/operator', routes)



export default app