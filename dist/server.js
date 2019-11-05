"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("./app"));
const PORT = 3000;
app_1.default.listen(process.env.PORT || PORT, () => {
    console.log(`Express server listening on port: ${PORT}, if you get an error, check your mongoDB connection.`);
});
//# sourceMappingURL=server.js.map