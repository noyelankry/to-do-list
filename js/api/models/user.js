import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    }
}, { timestamps: true })

export default mongoose.model('User', userSchema)
