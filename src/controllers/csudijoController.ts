import mongoose from "mongoose";
import { Request, Response } from "express";
import { csudijoSchema } from "../models/csudijoModel";

const mongooseCsudijo = mongoose.model("Csudijo", csudijoSchema);

export class CsudijoController {
  public addNewFood(req: Request, res: Response): void {
    const newFood = new mongooseCsudijo(req.body);
    newFood.save((err, food) => {
      if (err) {
        res.send(err);
      } else {
        res.json(food);
      }
    });
  }

  public getAllFoods(req: Request, res: Response): void {
    mongooseCsudijo.find({}, (err, food) => {
      if (err) {
        res.send(err);
      } else {
        res.json(food);
      }
    });
  }

  public getTopFoods(req: Request, res: Response): void {
    mongooseCsudijo
      .find({})
      .sort({ numberOfVote: "desc" })
      .limit(1)
      .exec((err, food) => {
        if (err) {
          res.send(err);
        } else {
          if (food.length > 0) {
            const max = (food[0] as any).numberOfVote;
            mongooseCsudijo.find({ numberOfVote: max }, (error, foods) => {
              if (error) {
                res.send(error);
              } else {
                // 9. feladat:
                // Az ételek összes adata átkerül, nekünk elegendőek az ételek nevei
                res.json(foods);
              }
            });
          } else {
            // Ha még nincs étel a kollekcióban:
            res.json({ error: "No food!" });
          }
        }
      });
  }

  public getFoodWithID(req: Request, res: Response): void {
    mongooseCsudijo.findById(req.params.foodId, (err, food) => {
      if (err) {
        res.send(err);
      } else {
        res.json(food);
      }
    });
  }

  public updateFood(req: Request, res: Response): void {
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

  public deleteFood(req: Request, res: Response): void {
    mongooseCsudijo.deleteOne({ _id: req.params.foodId }, err => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: "Successfully deleted food!" });
      }
    });
  }
}
