import mongoose from "mongoose";
import { print, outputType } from "../../helpers/print.js";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vankhiem284:vankhiemk2@cluster0.nkqtukl.mongodb.net/NodeJSWithJWT",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    print("connect successfully!!!", outputType.SUCCESS);
  } catch (error) {
    console.log("connect fail!!!");
  }
};

export default { connect };
