import express from "express";
import SiteController from "../controllers/SiteController.js";
const router = express.Router();

router.use("/search", SiteController.search);
router.use("/", SiteController.home);

export default router;
