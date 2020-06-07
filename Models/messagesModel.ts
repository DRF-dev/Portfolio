import { Schema, model } from "mongoose"

const messageSchema = new Schema({
    name: { type: String, required: true}, 
    entreprise: { type: String, required: true}, 
    message: { type: String, required: true} 
}, { timestamps: true })
const messageModel = model('message', messageSchema)

export default messageModel