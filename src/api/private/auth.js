import { validationResult } from "express-validator";
import response from "../../res/single-response.js";
import logger from "../../logs/logger.js";
import auth from "../../auth/auth.js";

const privateApi = {
  getToken: function (req, res) {
    const data = {
      usuario: req.body.name,
      password: req.body.password,
    };
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        logger.info(`function::getToken::errors:: ${JSON.stringify(errors)}`);
        response.error(req, res, 400, 400, null, errors.array());
      } else {
        const token = auth.asignToken({ ...data });
        response.success(req, res, { token: token }, 200, "OK");
      }
    } catch (error) {
      logger.error("Error getting token ", error.message);
      response.error(req, res, 500, 500, error.message);
    }
  },
};

export default privateApi;
