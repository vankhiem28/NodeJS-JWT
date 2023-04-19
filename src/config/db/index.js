import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vankhiem284:vankhiemk2@cluster0.42ixofu.mongodb.net/NodeJSBasic",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connect success!!!");
  } catch (error) {
    console.log("connect fail!!!");
  }
};

export default { connect };
