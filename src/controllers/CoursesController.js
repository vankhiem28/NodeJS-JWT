import slugify from "slugify";
import Course from "../models/Course.js";

class NewsController {
  //   [GET] /courses/
  get(req, res) {
    res.json("courses");
  }
  //   [GET] /courses/:slug
  async show(req, res) {
    const course = await Course.findOne({ slug: req.params.slug });
    res.json(course);
  }
  //   [POST] /courses/create
  async create(req, res) {
    const course = new Course(req.body);
    try {
      await course.save();
      res.json(course);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  //   [POST] /courses/update
  async update(req, res) {
    const body = {
      ...req.body,
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
    res.json(course);
  }
}

export default new NewsController();
