"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const express_1 = tslib_1.__importDefault(require("express"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const crmRoutes_1 = require("./routes/crmRoutes");
const csudijoRoutes_1 = require("./routes/csudijoRoutes");
class App {
    constructor() {
        this.crmRoutePrv = new crmRoutes_1.CrmRoutes();
        this.csudijoRoutePrv = new csudijoRoutes_1.CsudijoRoutes();
        this.mongoUrl = "mongodb://localhost/CRMdb";
        this.app = express_1.default();
        this.expressConfig();
        this.crmRoutePrv.routes(this.app);
        this.csudijoRoutePrv.routes(this.app);
        this.mongoSetup();
    }
    expressConfig() {
        this.app.use(cors_1.default());
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static("public"));
    }
    mongoSetup() {
        const options = {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        require("mongoose").Promise = global.Promise;
        mongoose_1.default.connect(this.mongoUrl, options).catch(error => console.error(error));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map