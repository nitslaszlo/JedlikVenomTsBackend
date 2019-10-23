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
    pictureUrl: {
        validate: {
            validator: (v: any) => {
                return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(v);
            },
            msg: "Nem megfelelő az URL formátuma!"
        },
        type: String,
        unique: true
    },
    description: {
        type: String,
        unique: true
    },
    created_date: {
        default: Date.now,
        type: Date
    }
}, csudijoSchemaOptions);
