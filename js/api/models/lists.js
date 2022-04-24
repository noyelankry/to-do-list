import mongoose from 'mongoose'
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

export default mongoose.model('List', listSchema)
