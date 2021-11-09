import { Schema, model, Document } from 'mongoose';

export interface IBot extends Document {
    id: string;
    isBan: boolean;
    lastOnline: number;
}

const botSchema = new Schema({
    id: { type: String, unique: true },
    isBan: { type: Boolean, default: false },
    lastOnline: { type: Number, default: Date.now() }
})

const mBot = model<IBot>('Bot', botSchema);
export default mBot;