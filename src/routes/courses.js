import express from "express";
import CoursesController from "../controllers/CoursesController.js";
const router = express.Router();

router.put("/update/:id", CoursesController.update);
router.post("/create", CoursesController.create);
router.get("/:slug", CoursesController.show);
router.get("/", CoursesController.get);

export default router;
