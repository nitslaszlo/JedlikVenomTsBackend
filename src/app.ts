import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { CrmRoutes } from "./routes/crmRoutes";
import { CsudijoRoutes } from "./routes/csudijoRoutes";

class App {

    public app: express.Application;
    public crmRoutePrv: CrmRoutes = new CrmRoutes();
    public csudijoRoutePrv: CsudijoRoutes = new CsudijoRoutes();
    public mongoUrl: string = "mongodb://localhost/CRMdb";
    // URL with auth
    // public mongoUrl: string = 'mongodb://nits:pwd123@localhost:27017/CRMdb';

    constructor() {
        this.app = express();
        this.expressConfig();
        this.crmRoutePrv.routes(this.app);
        this.csudijoRoutePrv.routes(this.app);
        this.mongoSetup();
    }

    private expressConfig(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files
        this.app.use(express.static("public"));

        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Length, Content-Type, Accept");
            next();
        });
    }

    private mongoSetup(): void {
        // Doc:
        // https://mongoosejs.com/docs/connections.html

        const options: mongoose.ConnectionOptions = {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        require("mongoose").Promise = global.Promise;
        mongoose.connect(this.mongoUrl, options).catch((error) => console.error(error));
    }

}

export default new App().app;
