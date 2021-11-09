import { Schema, model, Document } from 'mongoose';

export interface ISettings extends Document {
    id: string;
    userBan: Array<string>;
    guildBan: Array<string>;
}

const settingsSchema = new Schema({
    id: { type: String, unique: true },
    userBan: { type: Array, default: [] },
    guildBan: { type: Array, default: [] },
})

const mSettings = model<ISettings>('Settings', settingsSchema);
export default mSettings