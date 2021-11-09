import { Schema, model, Document } from 'mongoose';

export interface IEconomy extends Document {
    id: string,
    inventory: Object;
}

const economySchema = new Schema({
    id: { type: String, unique: true, index: true },
    inventory: { type: Object, default: {} }
})

const mEconomy = model<IEconomy>('Economy', economySchema)
export default mEconomy;