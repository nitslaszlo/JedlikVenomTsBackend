"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const mongoose_1 = (0, tslib_1.__importDefault)(require("mongoose"));
const crmRoutes_1 = require("./routes/crmRoutes");
const csudijoRoutes_1 = require("./routes/csudijoRoutes");
class App {
    constructor() {
        this.crmRoutePrv = new crmRoutes_1.CrmRoutes();
        this.csudijoRoutePrv = new csudijoRoutes_1.CsudijoRoutes();
        this.mongoUrl = "";
        this.app = (0, express_1.default)();
        this.expressConfig();
        this.crmRoutePrv.routes(this.app);
        this.csudijoRoutePrv.routes(this.app);
        this.mongoSetup();
    }
    expressConfig() {
        this.app.use(express_1.default.json());
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            res.header("Set-Cookie", "HttpOnly;Secure;SameSite=None");
            if (req.method === "OPTIONS") {
                res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
                return res.status(200).json({});
            }
            next();
        });
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static("public"));
    }
    mongoSetup() {
        const options = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        };
        this.mongoUrl = process.env.MONGODB_URL || "mongodb://localhost/CRMdb";
        require("mongoose").Promise = global.Promise;
        mongoose_1.default.connect(this.mongoUrl, options).catch(error => console.error(error));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map