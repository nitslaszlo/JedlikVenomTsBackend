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
        const whitelist = ["http://localhost:8080", "http://127.0.0.1:8080", "http://192.168.1.68:8080"];
        const corsOptions = {
            origin: (origin, callback) => {
                if (whitelist.indexOf(origin) !== -1 || !origin) {
                    callback(null, true);
                }
                else {
                    callback(new Error("Not allowed by CORS!!!"), false);
                }
            },
            credentials: true
        };
        this.app.use(cors_1.default(corsOptions));
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
        mongoose_1.default.connect(this.mongoUrl, options).catch((error) => console.error(error));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map