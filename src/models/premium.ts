import { Schema, model, Document } from 'mongoose';

export interface IPremium extends Document {
    id: string,
    premiumType: string;
    status: boolean;
    end: number;
}

const premiumSchema = new Schema({
    id: { type: String, unique: true },
    premiumType: String,
    status: { type: Boolean, default: false },
    end: { type: Number, default: 0 }
});

const mPremium = model<IPremium>('Premium', premiumSchema);
export default mPremium;