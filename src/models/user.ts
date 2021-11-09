import { Schema, model, Document } from 'mongoose';
const roles = ['user', 'vip', 'mod', 'owner', 'designer', 'donator'];

export interface IUser extends Document {
    discordId: string;
    nickname: string;
    avatar: string;
    role: string;
    sex: string;
    money: number;
    gem: number;
    level: number;
    exp: number;
}

const UserSchema = new Schema({
    discordId: { type: String, unique: true },
    nickname: { type: String, default: '' },
    avatar: String,
    role: { type: String, default: 'user', enum: roles },
    sex: String,
    money: { type: Number, default: 0, index: true },
    gem: { type: Number, default: 0, index: true },
    level: { type: Number, default: 1, index: true },
    exp: { type: Number, default: 0, index: true }
})

const User = model<IUser>('User', UserSchema);
export default User;