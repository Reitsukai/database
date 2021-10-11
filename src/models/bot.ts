import { Schema, model } from 'mongoose';

const botSchema = new Schema({
    id: { type: String, unique: true },
    isBan: { type: Boolean, default: false },
    lastOnline: { type: Number, default: Date.now() }
})

const Bot = model('Bot', botSchema);
export default Bot;