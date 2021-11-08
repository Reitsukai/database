import { Schema, model } from 'mongoose';
const roles = ['user', 'vip', 'mod', 'owner', 'designer', 'donator'];

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

const User = model('User', UserSchema);
export default User;