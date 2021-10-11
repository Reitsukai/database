import { Schema, model } from 'mongoose';

const economySchema = new Schema({
    id: { type: String, unique: true, index: true },
    inventory: { type: Object, default: {} }
})

const Economy = model('Economy', economySchema)
export default Economy;