import { Schema, model } from 'mongoose';

const settingsSchema = new Schema({
    id: { type: String, unique: true }
})

const Settings = model('Settings', settingsSchema);
export default Settings