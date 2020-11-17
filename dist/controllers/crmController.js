"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const crmModel_1 = require("../models/crmModel");
const mongooseContact = mongoose_1.default.model("Contact", crmModel_1.contactSchema);
class ContactController {
    addNewContact(req, res) {
        const newContact = new mongooseContact(req.body);
        newContact.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    getContacts(req, res) {
        mongooseContact.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    getContactWithID(req, res) {
        mongooseContact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    updateContact(req, res) {
        const updateOptions = {
            new: true,
            runValidators: true
        };
        mongooseContact.findOneAndUpdate({ _id: req.params.contactId }, req.body, updateOptions, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    deleteContact(req, res) {
        mongooseContact.deleteOne({ _id: req.params.contactId }, err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Successfully deleted contact!" });
        });
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=crmController.js.map