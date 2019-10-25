"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const csudijoModel_1 = require("../models/csudijoModel");
const mongooseCsudijo = mongoose_1.default.model("Csudijo", csudijoModel_1.csudijoSchema);
class CsudijoController {
    addNewFood(req, res) {
        const newFood = new mongooseCsudijo(req.body);
        newFood.save((err, food) => {
            if (err) {
                res.send(err);
            }
            else {
                res.json(food);
            }
        });
    }
    getAllFoods(req, res) {
        mongooseCsudijo.find({}, (err, food) => {
            if (err) {
                res.send(err);
            }
            else {
                res.json(food);
            }
        });
    }
    getTopFoods(req, res) {
        mongooseCsudijo
            .find({})
            .sort({ numberOfVote: "desc" })
            .limit(1)
            .exec((err, food) => {
            if (err) {
                res.send(err);
            }
            else {
                if (food.length > 0) {
                    const max = food[0].numberOfVote;
                    mongooseCsudijo.find({ numberOfVote: max }, (error, foods) => {
                        if (error) {
                            res.send(error);
                        }
                        else {
                            res.json(foods);
                        }
                    });
                }
                else {
                    res.json({ error: "No food!" });
                }
            }
        });
    }
    getFoodWithID(req, res) {
        mongooseCsudijo.findById(req.params.foodId, (err, food) => {
            if (err) {
                res.send(err);
            }
            else {
                res.json(food);
            }
        });
    }
    updateFood(req, res) {
        const updateOptions = {
            new: true,
            runValidators: true
        };
        mongooseCsudijo.findOneAndUpdate({ _id: req.params.foodId }, req.body, updateOptions, (err, food) => {
            if (err) {
                res.send(err);
            }
            else {
                res.json(food);
            }
        });
    }
    deleteFood(req, res) {
        mongooseCsudijo.deleteOne({ _id: req.params.foodId }, err => {
            if (err) {
                res.send(err);
            }
            else {
                res.json({ message: "Successfully deleted food!" });
            }
        });
    }
}
exports.CsudijoController = CsudijoController;
//# sourceMappingURL=csudijoController.js.map