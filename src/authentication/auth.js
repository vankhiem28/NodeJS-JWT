import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
  // bypass login and register url
  if (req.url === "/users/login" || req.url === "/users/register") {
    next();
    return;
  }

  //   other request
  const token = req?.headers?.authorization.split(" ")[1];
  try {
    const jwtObject = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // check token is valid
    const isExpired = Date.now() >= jwtObject.exp * 1000;
    if (isExpired) {
      res.status(400).json({
        message: "Token expired",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
