import express from "express";
import SiteController from "../controllers/SiteController.js";
const router = express.Router();

router.get("/search", SiteController.search);
router.get("/", SiteController.home);

export default router;
