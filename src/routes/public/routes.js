import { Router } from "express";
import privateApi from "../../api/private/auth.js";
import publicApi from "../../api/public/block-io-api.js";
import { body, param } from "express-validator";
import security from "../../security/security.js";
const router = Router();

router.get(
  "/token",
  [
    body("name")
      .not()
      .isEmpty()
      .trim()
      .escape()
      .withMessage("The name is required"),
    body("password")
      .not()
      .isEmpty()
      .trim()
      .escape()
      .withMessage("The passsword is required"),
  ],
  privateApi.getToken
);
router.get("/hello", security(), publicApi.hello);

export default router;
