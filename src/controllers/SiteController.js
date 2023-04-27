import Course from "../models/Course.js";

class SiteController {
  // [GET] /
  async home(req, res) {
    res.json("Home");
  }
  //   [GET] /search
  search(req, res) {
    res.json("Search");
  }
}

export default new SiteController();
