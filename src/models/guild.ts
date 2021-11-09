import { Schema, model, Document } from 'mongoose';

export interface IGuild extends Document {
    id : string;
    registeredAt: Number;
    prefix: string;
    language: string;
    isBan: boolean;
    watchBot: IWatchBot;
}

interface IWatchBot {
    status: boolean;
    channel: string;
    watchList: Array<string>;
    ignoreList: Array<string>;
}

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

const mGuild = model<IGuild>('Guild', guildSchema);
export default mGuild;