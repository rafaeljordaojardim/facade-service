/* eslint-disable @typescript-eslint/restrict-template-expressions */
import express from 'express'
import Routers from './routes'
import cors from 'cors'
import { config } from './config/config'
const app = express()
const port = (process.env.PORT != null) ? process.env.PORT : 3000
const corsConfig = {
  origin: '*'
}
app.use(cors(corsConfig))
app.use(express.json())
app.use('/api', Routers)


app.listen(port, () => {
  console.log(`Listening at http://localhost:${config.server.port}`)
})

