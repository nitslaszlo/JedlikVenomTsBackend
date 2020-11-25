"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csudijoSchema = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const csudijoSchemaOptions = {
    collection: "CsudijoFoodCollection",
    versionKey: false
};
exports.csudijoSchema = new mongoose_1.default.Schema({
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
        get: (v) => Math.round(v),
        set: (v) => Math.round(v)
    },
    pictureUrl: {
        validate: {
            validator: (v) => {
                return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(v);
            },
            msg: "Nem megfelelő az URL formátuma!"
        },
        type: String
    },
    description: {
        type: String
    },
    createdDate: {
        default: Date.now,
        type: Date
    }
}, csudijoSchemaOptions);
//# sourceMappingURL=csudijoModel.js.map