import bodyParser from "body-parser";
import cors, { CorsOptions } from "cors";
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
        // With cresentials: (Set "withCredentials: false" in frontend too)
        // ================================================================
        // const whitelist = ["http://localhost:8080", "http://127.0.0.1:8080", "http://192.168.1.68:8080"];
        // const corsOptions: CorsOptions = {
        //     origin: (origin, callback) => {
        //         console.log(`origin ${origin}`);
        //         if (whitelist.indexOf(origin) !== -1 || !origin) {
        //             callback(null, true);
        //         } else {
        //             callback(new Error("Not allowed by CORS!!!"), false);
        //         }
        //     },
        //     credentials: true
        // };
        // this.app.use(cors(corsOptions));
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files
        this.app.use(express.static("public"));
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
