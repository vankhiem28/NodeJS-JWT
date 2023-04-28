import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: {
      type: String,
      require: true,
      validate: {
        validator: (value) => value.length > 2,
        message: "name must have a least 5 characters",
      },
    },
    description: {
      type: String,
      require: true,
      validate: {
        validator: (value) => value.length > 5,
        message: "description must have a least 5 characters",
      },
    },
    image: { type: String, require: true },
    slug: { type: String, require: true, unique: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", Course);
