import mongoose, { Document, Schema } from "mongoose";

export interface IShortsView extends Document {
  slug: string;
  views: number;
}

const ShortsViewSchema = new Schema<IShortsView>({
  slug: { type: String, required: true },
  views: { type: Number, default: 0 },
});

export const ShortsView =
  mongoose.models.ShortsView ||
  mongoose.model<IShortsView>("ShortsView", ShortsViewSchema);
