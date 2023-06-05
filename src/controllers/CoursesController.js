import slugify from "slugify";
import { faker } from "@faker-js/faker";
import Course from "../models/Course.js";
import Exception from "../exceptions/Exception.js";

class NewsController {
  //   [GET] /courses/
  async get(req, res) {
    let { page = 1, size = 10, searchString = "" } = req.query;
    size = size >= 10 ? 10 : parseInt(size);
    try {
      const filteredStudent = await Course.aggregate([
        {
          $match: {
            $or: [
              { name: { $regex: `.*${searchString}.*`, $options: "i" } }, //$options: "i" - khong phan biet chua hoa chu thuong
              // { description: { $regex: `.*${searchString}.*`, $options: "i" } },
              // { image: { $regex: `.*${searchString}.*`, $options: "i" } },
            ],
          },
        },
        {
          $skip: (page - 1) * size,
        },
        {
          $limit: size,
        },
      ]);
      res.status(200).json({
        page,
        size: filteredStudent.length,
        searchString,
        data: filteredStudent.length === 0 ? "Data Empty" : filteredStudent,
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
  //   [GET] /courses/:slug
  async show(req, res) {
    try {
      const course = await Course.findOne({ slug: req.params.slug });
      if (!course) {
        throw new Exception("Cannot find course");
      }
      res.status(200).json({
        message: "Get students detail Successfully",
        data: course,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  //   [POST] /courses/create
  async create(req, res) {
    try {
      const data = {
        ...req.body,
        slug: slugify(req.body.name, {
          lower: true,
          replacement: "-",
          remove: undefined,
          trim: true,
          strict: false,
          locale: "vi",
        }),
      };
      const newCourses = await Course.create(data);
      res.status(201).json({
        message: "Create Courses Successfully",
        data: newCourses,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  //   [POST] /courses/update
  async update(req, res) {
    try {
      const body = {
        ...req.body,
        // name: req.body.name === '',
        slug: slugify(req.body.name, {
          replacement: "-",
          lower: true,
          remove: undefined,
          trim: true,
          strict: false,
          locale: "vi",
        }),
      };
      const course = await Course.updateOne({ _id: req.params.id }, body);
      res.status(201).json({
        message: "Updated Courses Successfully",
        data: course,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new NewsController();
