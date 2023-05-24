import { Router } from "express";
import publicApi from "../../api/public/block-io-api.js";
import security from "../../security/security.js";
const router = Router();

router.get("/hello", security(), publicApi.hello);

export default router;
