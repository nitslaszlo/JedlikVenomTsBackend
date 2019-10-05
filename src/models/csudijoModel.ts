import mongoose from "mongoose";

const csudijoSchemaOptions: mongoose.SchemaOptions = {
    collection: "CsudijoFoodCollection",
    versionKey: false
};

export const csudijoSchema = new mongoose.Schema({
    foodName: {
        default: "Lecsó kolbászcsipszel",
        required: "Kérem adjon meg egy étel nevet!",
        type: String,
        unique: true
    },
    numberOfVote: {
        default: 0,
        min: 0,
        type: Number,
        get: (v: any) => Math.round(v),
        set: (v: any) => Math.round(v)
    },
    created_date: {
        default: Date.now,
        type: Date
    }
}, csudijoSchemaOptions);