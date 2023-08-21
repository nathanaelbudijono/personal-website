import mongoose, { Document, Schema } from "mongoose";

export interface IProjectView extends Document {
  slug: string;
  views: number;
}

const projectViewSchema = new Schema<IProjectView>({
  slug: { type: String, required: true },
  views: { type: Number, default: 0 },
});

export const ProjectView =
  mongoose.models.ProjectView ||
  mongoose.model<IProjectView>("ProjectView", projectViewSchema);
