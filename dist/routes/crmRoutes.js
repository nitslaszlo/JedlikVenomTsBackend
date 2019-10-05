"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
class CrmRoutes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
    }
    routes(app) {
        app.route("/")
            .get((req, res) => {
            console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
            res.status(200).send({
                message: "GET request success!"
            });
        });
        app.route("/contact")
            .get((req, res, next) => {
            console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
            next();
        }, this.contactController.getContacts)
            .post((req, res, next) => {
            console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
            next();
        }, this.contactController.addNewContact);
        app.route("/contact/:contactId")
            .get((req, res, next) => {
            console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
            next();
        }, this.contactController.getContactWithID)
            .put((req, res, next) => {
            console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
            next();
        }, this.contactController.updateContact)
            .delete((req, res, next) => {
            console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
            next();
        }, this.contactController.deleteContact);
    }
}
exports.CrmRoutes = CrmRoutes;
//# sourceMappingURL=crmRoutes.js.map