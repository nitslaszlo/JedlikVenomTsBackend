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

  public getNumberOfFoods(req: Request, res: Response): void {
    mongooseCsudijo.countDocuments({}, (err, count) => {
      if (err) {
        res.send(err);
      } else {
        res.json(count);
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

  public getPageOfFoods(req: Request, res: Response): void {
    let perPage = 5;
    let page = 0;
    if (req.params.perPage) {
      perPage = parseInt(req.params.perPage, 10);
    }
    if (req.params.page) {
      page = parseInt(req.params.page, 10) - 1;
    }
    mongooseCsudijo
      .find({})
      .sort({ numberOfVote: "desc", foodName: "asc" })
      .skip(page * perPage)
      .limit(perPage)
      .exec((err, foods) => {
        if (err) {
          res.send(err);
        } else {
          res.json(foods);
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
                // adatforgalom minimalizálása feladat
                res.json(foods.map((a: any) => a.foodName)); // csak az ételek nevét küldjük át
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
