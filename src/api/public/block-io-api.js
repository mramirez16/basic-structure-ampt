import response from "../../res/single-response.js";
import logger from "../../logs/logger.js";
import { validationResult } from "express-validator";
let validations = [];

const publicApi = {
  hello: function (req, res) {
    try {
      const msg = {
        mensaje: "Hola desde api publica function Hello!",
      };
      logger.info("Function::hello::data::", JSON.stringify(msg));
      response.success(req, res, msg, 200, "OK");
    } catch (error) {
      logger.error("Error in hello function:", error);
      response.error(req, res, 500, 500, error.message);
    }
    return response;
  },
};

export default publicApi;
