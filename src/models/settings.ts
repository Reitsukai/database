import { Schema, model } from 'mongoose';

const settingsSchema = new Schema({
    id: { type: String, unique: true },
    userBan: { type: Array, default: [] },
    guildBan: { type: Array, default: [] },
})

const Settings = model('Settings', settingsSchema);
export default Settings