const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listSchema = new Schema({
    name: {
        type: String
    },
    date: {
        type: String
    },
    listItems: {
        type: Array
    }
}, { timestamps: true })

module.exports = mongoose.model('List', listSchema)
