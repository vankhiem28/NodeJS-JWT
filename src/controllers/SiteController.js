import Course from "../models/Course.js";

class SiteController {
  // [GET] /
  async home(req, res) {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (error) {
      res.status(500).json("Error");
    }
  }
  //   [GET] /search
  search(req, res) {
    res.json("Search");
  }
}

export default new SiteController();
