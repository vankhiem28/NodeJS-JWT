import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/index.js";
import db from "./config/db/index.js";
import { checkToken } from "./authentication/auth.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(checkToken);

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes init
route(app);

app.listen(port, async () => {
  // Connect to db
  await db.connect();
  console.log("Server listening on port " + port);
});
