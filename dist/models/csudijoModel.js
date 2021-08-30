"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csudijoSchema = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = (0, tslib_1.__importDefault)(require("mongoose"));
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
    createdDate: {
        default: Date.now,
        type: Date
    }
}, csudijoSchemaOptions);
//# sourceMappingURL=csudijoModel.js.map