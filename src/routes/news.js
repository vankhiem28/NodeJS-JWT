import express from "express";
import newsController from "../controllers/NewsController.js";
const router = express.Router();

router.get("/:slug", newsController.show);
router.get("/", newsController.index);

export default router;
