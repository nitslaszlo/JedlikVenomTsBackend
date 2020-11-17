"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsudijoRoutes = void 0;
const csudijoController_1 = require("../controllers/csudijoController");
class CsudijoRoutes {
  constructor() {
    this.csudijoController = new csudijoController_1.CsudijoController();
  }
  routes(app) {
    app
      .route("/csudijo")
      .get((req, res, next) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.csudijoController.getAllFoods)
      .post((req, res, next) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.csudijoController.addNewFood);
    app.route("/csudijobest").get((req, res, next) => {
      console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
      next();
    }, this.csudijoController.getTopFoods);
    app.route("/csudijo/count").get((req, res, next) => {
      console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
      next();
    }, this.csudijoController.getNumberOfFoods);
    app.route("/csudijo/page/:page/perPage/:perPage").get((req, res, next) => {
      console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
      next();
    }, this.csudijoController.getPageOfFoods);
    app
      .route("/csudijo/:foodId")
      .get((req, res, next) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.csudijoController.getFoodWithID)
      .put((req, res, next) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.csudijoController.updateFood)
      .delete((req, res, next) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.csudijoController.deleteFood);
  }
}
exports.CsudijoRoutes = CsudijoRoutes;
//# sourceMappingURL=csudijoRoutes.js.map
