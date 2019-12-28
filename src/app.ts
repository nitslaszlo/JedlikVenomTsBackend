import bodyParser from "body-parser";
// import cors from "cors";
// import cors, { CorsOptions } from "cors";
import express from "express";
import mongoose from "mongoose";
import { CrmRoutes } from "./routes/crmRoutes";
import { CsudijoRoutes } from "./routes/csudijoRoutes";

class App {
  public app: express.Application;
  public crmRoutePrv: CrmRoutes = new CrmRoutes();
  public csudijoRoutePrv: CsudijoRoutes = new CsudijoRoutes();
  public mongoUrl: string = "";
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
    // Ha szeretnéd vezérelni, hogy a backend API-t milyen ip-ről érheti el a frontend alkalmazás:
    // ============================================================================================
    // Állítsad be a "withCredentials: true" opciót a frontend oldalon is (CsudijoModule.ts)
    // Vegyed ki a megjegyzésből a következő sorokat:
    // const whitelist = ["http://localhost:8080", "http://127.0.0.1:8080", "http://192.168.1.68:8080"];
    // const corsOptions: CorsOptions = {
    //     origin: (origin, callback) => {
    //         // console.log(`origin ${origin}`);
    //         if (whitelist.indexOf(origin) !== -1 || !origin) {
    //             callback(null, true);
    //         } else {
    //             callback(new Error("Not allowed by CORS!!!"), false);
    //         }
    //     },
    //     credentials: true
    // };
    // this.app.use(cors(corsOptions));
    // this.app.use(cors()); // ezt mehet majd megjegyzésbe
    this.app.use(bodyParser.json());

    // Cors kezelés corse modul nélkül:
    // ==================================
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      // res.header("Access-Control-Allow-Origin", "http://192.168.1.68:8080");
      // Ha "Access-Control-Allow-Credentials", "true", akkor az origin nem lehet "*"!
      // res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      res.header("Set-Cookie", "HttpOnly;Secure;SameSite=None");
      if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
        return res.status(200).json({});
      }
      next();
    });

    this.app.use(bodyParser.urlencoded({ extended: false }));
    // serving static files
    this.app.use(express.static("public"));
  }

  private mongoSetup(): void {
    // Doc:
    // https://mongoosejs.com/docs/connections.html

    const options: mongoose.ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    };

    this.mongoUrl = process.env.MONGODB_URL || "mongodb://localhost/CRMdb";
    require("mongoose").Promise = global.Promise;
    mongoose.connect(this.mongoUrl, options).catch(error => console.error(error));
  }
}

export default new App().app;
