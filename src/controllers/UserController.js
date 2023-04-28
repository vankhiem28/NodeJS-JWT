import Exception from "../exceptions/Exception.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

class UserController {
  // [POST] /users/register
  async register(req, res, next) {
    try {
      let existingUser = await User.findOne({ email: req.body.email });
      if (!!existingUser) {
        throw new Exception(Exception.USER_EXISTING);
      }
      // encrypt the password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      // insert to db
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      res.status(201).json({
        message: "Resgister Successfully",
        data: newUser,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // [POST] /users/login
  async login(req, res, next) {
    try {
      let existingUser = await User.findOne({ email: req.body.email });
      if (!!existingUser) {
        const isMached = await bcrypt.compare(req.body.password, existingUser.password);
        if (isMached) {
          // create JWT
          let token = jwt.sign(
            {
              data: existingUser,
            },
            process.env.JWT_SECRET_KEY,
            {
              expiresIn: "10h",
            }
          );
          res.json({
            ...existingUser.toObject(),
            password: "not shown",
            token,
          });
        } else {
          throw new Exception(Exception.WRONG_EMAIL_OR_PASSWORD);
        }
      } else {
        throw new Exception(Exception.WRONG_EMAIL_OR_PASSWORD);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // [GET] /users
  show(req, res, next) {
    res.json("users");
  }
}

export default new UserController();
