const jwt = require("jsonwebtoken");

const jwtAdminMiddleware = async (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];

    if (token) {
      let decodedData = jwt.verify(token, process.env.JWT_SECRET);
      if (decodedData) {
        if (decodedData.userType == "ADMIN") {
          next();
        } else {
          res
            .status(403)
            .json({ message: "This operation can only be done by the ADMIN" });
        }
      } else {
        res.status(403).json({ message: "Invalied Token , Please login" });
      }
    } else {
      res.status(401).json({ message: "Token is requied , Please login" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong while validating token" });
  }
};

module.exports = jwtAdminMiddleware;
