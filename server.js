const express = require('express') // express framework
const mongoose = require('mongoose') // mongoDB access 
const morgan = require('morgan') // login console
const bodyParser = require('body-parser') // parse
const { allowedNodeEnvironmentFlags } = require('process')

const listRoute = require('./js/api/routes/lists-route') //lists route

mongoose.connect('mongodb://localhost:27017/tododbs', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('DB Connection Established!')
})

const app = express()
app.use(express.static('public'))

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

app.use('/api/list', listRoute)