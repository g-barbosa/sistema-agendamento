import express from 'express'
import cors from 'cors'
import bodyParser  from 'body-parser'

import { routesRest } from './routes/'

const app = express()
app.use(express.static('public'))
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routesRest)

app.listen(process.env.PORT || 3333)

export default app