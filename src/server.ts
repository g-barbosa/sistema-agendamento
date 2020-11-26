import express from 'express'
import session from 'express-session'
import cors from 'cors'
import bodyParser  from 'body-parser'

import { routesRest, routesView } from './routes/'

const app = express()
app.set('view engine', 'ejs')
app.set('views', './src/views')
app.use(express.static('public'))
app.use(cors())
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routesView)
app.use(routesRest)

app.listen(process.env.PORT || 3333)

export default app