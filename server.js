import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { router as listRoute } from './js/api/routes/lists-route.js'
import { router as authRoute } from './js/api/routes/auth-route.js'

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

const app = express()
app.use(express.static('public'))

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('DB Connection Established!'))

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

app.use('/list', listRoute)
app.use('/user', authRoute)