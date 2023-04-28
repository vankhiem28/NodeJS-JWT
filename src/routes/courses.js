import express from "express";
import CoursesController from "../controllers/CoursesController.js";
import { faker } from "@faker-js/faker";
import Course from "../models/Course.js";
const router = express.Router();

router.put("/update/:id", CoursesController.update);
router.post("/create", CoursesController.create);
router.post("/aa");
router.get("/:slug", CoursesController.show);
router.get("/", CoursesController.get);

export default router;
