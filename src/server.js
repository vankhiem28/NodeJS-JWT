import express from "express";
import * as dotenv from "dotenv";
import route from "./routes/index.js";
import db from "./config/db/index.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Connect to db
db.connect();

// Routes init
route(app);

app.listen(port, async () => {
  console.log("Server listening on port " + port);
});
