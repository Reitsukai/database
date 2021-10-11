import { Schema, model } from 'mongoose';

const reminderSchema = new Schema({
    server: { type: String, required: true, index: true },
    channel: { type: String, required: true },
    user: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    completedAt: { type: Date, required: true, index: true },
});

const Reminder = model('Reminder', reminderSchema);
export default Reminder;