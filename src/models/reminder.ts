import { Schema, model, Document } from 'mongoose';

export interface IReminder extends Document {
    server: string;
    channel: string;
    user: string;
    content: string;
    createdAt: string;
    completedAt: string;
}

const reminderSchema = new Schema({
    server: { type: String, required: true, index: true },
    channel: { type: String, required: true },
    user: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    completedAt: { type: Date, required: true, index: true },
});

const mReminder = model<IReminder>('Reminder', reminderSchema);
export default mReminder;