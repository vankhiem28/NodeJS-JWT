import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";

const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 3,
        message: "User must have 3 characters",
      },
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value) => isEmail(value),
        message: "Email wrong format",
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => value.length > 8,
        message: "Password must be at least 8 characters ",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", User);
