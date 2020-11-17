"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactSchema = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const schemaOptions = {
    collection: "CRMdata",
    versionKey: false
};
exports.contactSchema = new mongoose_1.default.Schema({
    age: {
        default: 25,
        max: 65,
        min: 18,
        type: Number,
        get: (v) => Math.round(v),
        set: (v) => Math.round(v)
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
}, schemaOptions);
//# sourceMappingURL=crmModel.js.map