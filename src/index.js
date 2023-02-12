import express, { urlencoded, json } from "express";
const app = express();
import morgan from "morgan";
import router from "./routes/index.js";
import dataFetcher from "./dataFetcher.js";
//Conf
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//Routes
app.use(router);

//Start Fetcher
dataFetcher.startFetcher();

//Middleware
app.use(morgan("dev"));
app.use(urlencoded({ extended: false }));
app.use(json());

//Iniciando el servidor REST
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
app.on("exit", () => {
  console.log("exiting");
});
//Iniciando el servidor GET
