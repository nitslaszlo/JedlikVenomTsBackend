import { Request, Response } from "express";
import mongoose from "mongoose";
import { contactSchema } from "../models/crmModel";

const mongooseContact = mongoose.model("Contact", contactSchema);

export class ContactController {
  public addNewContact(req: Request, res: Response): void {
    const newContact = new mongooseContact(req.body);
    newContact.save((err: any, contact: any) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public getContacts(req: Request, res: Response): void {
    mongooseContact.find({}, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public getContactWithID(req: Request, res: Response): void {
    mongooseContact.findById(req.params.contactId, (err: any, contact: any) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public updateContact(req: Request, res: Response): void {
    const updateOptions: mongoose.QueryOptions = {
      new: true, // return the modified document
      runValidators: true // runs update validators on this command
    };
    mongooseContact.findOneAndUpdate({ _id: req.params.contactId }, req.body, updateOptions, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public deleteContact(req: Request, res: Response): void {
    const deleteOptions: mongoose.QueryOptions = {
      new: true, // return the modified document
      runValidators: true // runs update validators on this command
    };
    mongooseContact.deleteOne({ _id: req.params.contactId }, deleteOptions, (err: any) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted contact!" });
    });
  }
}
