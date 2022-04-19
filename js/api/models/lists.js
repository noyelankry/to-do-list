const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listSchema = new Schema({
    name: {
        type: String
    },
    date: {
        type: String
    },
    list_items: {
        type: Array
    }
}, { timestamps: true })

const List = mongoose.model('List', listSchema)
module.exports = List
