import { Router } from "express";
import privateApi from "../../api/private/auth.js";
import { body, param } from "express-validator";
const router = Router();

router.post(
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

export default router;
