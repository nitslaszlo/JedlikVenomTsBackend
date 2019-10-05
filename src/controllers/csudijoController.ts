import { Request, Response } from "express";
import mongoose from "mongoose";
import { csudijoSchema } from "../models/csudijoModel";

const mongooseCsudijo = mongoose.model("Csudijo", csudijoSchema);

export class CsudijoController {

    public addNewFood(req: Request, res: Response) {
        const newFood = new mongooseCsudijo(req.body);
        newFood.save((err, food) => {
            if (err) {
                res.send(err);
            } else {
                res.json(food);
            }
        });
    }

    public getAllFoods(req: Request, res: Response) {
        mongooseCsudijo.find({}, (err, food) => {
            if (err) {
                res.send(err);
            } else {
                res.json(food);
            }
        });
    }

    public getFoodWithID(req: Request, res: Response) {
        mongooseCsudijo.findById(req.params.foodId, (err, food) => {
            if (err) {
                res.send(err);
            } else {
                res.json(food);
            }
        });
    }

    public updateFood(req: Request, res: Response) {
        const updateOptions: mongoose.QueryFindOneAndUpdateOptions = {
            new: true, // return the modified document
            runValidators: true // runs update validators on this command
        };
        mongooseCsudijo.findOneAndUpdate({ _id: req.params.foodId }, req.body, updateOptions, (err, food) => {
            if (err) {
                res.send(err);
            } else {
                res.json(food);
            }
        });
    }

    public deleteFood(req: Request, res: Response) {
        mongooseCsudijo.deleteOne({ _id: req.params.foodId }, (err) => {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: "Successfully deleted food!" });
            }
        });
    }
}
