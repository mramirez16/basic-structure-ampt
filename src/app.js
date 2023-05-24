import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import privateApi from "./routes/public/routes.js"
import publicApi from "./routes/public/routes.js";
//Initialization app express
const app = express();
//Middleware configuration
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
//routes
app.use("/private-token", privateApi)
app.use("/public-blockio-api", publicApi);
//export app
export default app;
