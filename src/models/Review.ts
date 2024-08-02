// src/models/review.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
  title: string;
  author: string;
  text: string;
  rating: number;
  userId: mongoose.Schema.Types.ObjectId;
}

const ReviewSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default mongoose.model<IReview>('Review', ReviewSchema);
