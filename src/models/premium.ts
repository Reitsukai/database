import { Schema, model } from 'mongoose';

const premiumSchema = new Schema({
    id: { type: String, unique: true },
    premiumType: String,
    status: { type: Boolean, default: false },
    end: { type: Number, default: 0 }
});

const Premium = model('Premium', premiumSchema);
export default Premium;