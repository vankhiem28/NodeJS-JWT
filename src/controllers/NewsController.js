class NewsController {
  // [GET] /news
  index(req, res) {
    res.json("News Cs");
  }
  //   [GET] /news/:slug
  show(req, res) {
    res.json("News details");
  }
}

export default new NewsController();
