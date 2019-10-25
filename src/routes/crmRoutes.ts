import { NextFunction, Request, Response } from "express";
import { ContactController } from "../controllers/crmController";

export class CrmRoutes {
  public contactController: ContactController = new ContactController();

  public routes(app: any): void {
    app.route("/").get((req: Request, res: Response) => {
      console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
      res.status(200).send({
        message: "GET request success!"
      });
    });

    // Contact
    app
      .route("/contact")
      .get((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        // Secure with key:
        // GET request
        // https://127.0.0.1:3000?key=78942ef2c1c98bf10fca09c808d718fa3734703e
        // if (req.query.key !== "78942ef2c1c98bf10fca09c808d718fa3734703e") {
        //     res.status(401).send("You shall not pass!");
        // } else {
        //     next();
        // }
        next();
      }, this.contactController.getContacts)

      // POST endpoint
      .post((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.contactController.addNewContact);

    // Contact detail
    app
      .route("/contact/:contactId")
      // get specific contact, pl.: GET http://localhost:3000/contact/5d7a971dd9740e07b8bc725c
      .get((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.contactController.getContactWithID)

      .put((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.contactController.updateContact)

      .delete((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.contactController.deleteContact);
  }
}
