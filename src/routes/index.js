import newsRouter from "./news.js";
import usersRouter from "./users.js";
import siteRouter from "./site.js";
import coursesRouter from "./courses.js";

const route = (app) => {
  app.use("/users", usersRouter);
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
};

export default route;
