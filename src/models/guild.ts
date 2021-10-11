import { Schema, model } from 'mongoose';

const guildSchema = new Schema({
    id: { type: String, unique: true },
    registeredAt: { type: Number, default: Date.now() },
    prefix: { type: String, default: 'w' },
    language: { type: String, default: 'en-US' },
    isBan: { type: Boolean, default: false },
    watchBot: {
        status: { type: Boolean, default: false },
        channel: { type: String, default: "" },
        watchList: { type: Array, default: [] },
        ignoreList: { type: Array, default: [] }
    }

})

const Guild = model('Guild', guildSchema);
export default Guild;