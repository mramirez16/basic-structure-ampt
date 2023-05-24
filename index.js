import { http } from "@ampt/sdk";
import app from "./src/app.js";
import logger from "./src/logs/logger.js";
import config from "./src/config/config.js";
//Server configuration
app.set("port", config.server.port);
app.listen(app.get("port"), () => {
  logger.info("Listening on port ", app.settings.port);
});
http.useNodeHandler(app);
