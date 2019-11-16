// import fs from "fs"; // for HTTPS
// import https from "https"; // for HTTPS
import app from "./app";

const PORT: number = 3000;

// for HTTPS:
// Download and install OpenSSL:
// https://slproweb.com/products/Win32OpenSSL.html
// const httpsOptions: https.ServerOptions = {
//   // Generate cert.pem:
//   // OpenSSL> req -newkey rsa:2048 -nodes -keyout keytemp.pem -x509 -days 365 -out cert.pem
//   cert: fs.readFileSync("./config/cert.pem"),
//   // Generate key.pem
//   // OpenSSL> rsa -in keytemp.pem -out key.pem
//   key: fs.readFileSync("./config/key.pem")
// };

// simple HTTP:
app.listen(process.env.PORT || PORT, () => {
  console.log(`Express server listening on port: ${PORT}, if you get an error, check your mongoDB connection.`);
});

// HTTPS:
// https.createServer(httpsOptions, app).listen(PORT, () => {
//   console.log(`Express server listening on port: ${PORT}, if you get an error, check your mongoDB connection.`);
// });
