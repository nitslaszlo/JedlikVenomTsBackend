"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const https_1 = tslib_1.__importDefault(require("https"));
const app_1 = tslib_1.__importDefault(require("./app"));
const PORT = 3000;
const httpsOptions = {
    cert: fs_1.default.readFileSync("./config/cert.pem"),
    key: fs_1.default.readFileSync("./config/key.pem")
};
https_1.default.createServer(httpsOptions, app_1.default).listen(PORT, () => {
    console.log(`Express server listening on port: ${PORT}, if you get an error, check your mongoDB connection.`);
});
//# sourceMappingURL=server.js.map