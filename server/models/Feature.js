import mongoose from "mongoose";

const FeatureSchema = new mongoose.Schema(
  {
    image: String,
  },
  { timestamps: true }
);

export const FeatureModel = mongoose.model("Feature", FeatureSchema);
