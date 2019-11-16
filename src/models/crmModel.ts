import mongoose from "mongoose";

// Doc:
// https://mongoosejs.com/docs/guide.html
// https://mongoosejs.com/docs/schematypes.html

const schemaOptions: mongoose.SchemaOptions = {
  collection: "CRMdata",
  versionKey: false
};

// tslint:disable: object-literal-sort-keys
export const contactSchema = new mongoose.Schema(
  {
    age: {
      default: 25,
      max: 65,
      min: 18,
      type: Number,
      get: (v: number) => Math.round(v),
      set: (v: number) => Math.round(v)
    },
    company: {
      default: "JEDLIK",
      type: String,
      uppercase: true,
      minlength: 3,
      maxlength: 10
    },
    createdDate: {
      default: Date.now,
      type: Date
    },
    email: {
      default: "jedlik@jedlik.eu",
      lowercase: true,
      trim: true,
      type: String
    },
    firstName: {
      required: "Enter a first name",
      type: String
    },
    lastName: {
      required: "Enter a first name",
      type: String,
      index: true,
      unique: true
    }
  },
  schemaOptions
);
