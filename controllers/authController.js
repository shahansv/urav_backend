const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (email && password) {
      let existingUser = await userModel.findOne({ email: email });

      if (existingUser) {
        let isPasswordMatch = await bcrypt.compare(
          password,
          existingUser.password,
        );

        if (isPasswordMatch) {
          let payLoad = {
            email: existingUser.email,
            userType: existingUser.userType,
          };

          let token = jwt.sign(payLoad, process.env.JWT_SECRET);

          res.status(200).json({ token, existingUser });
        } else {
          res.status(403).json({ message: "Invalid password" });
        }
      } else {
        res.status(400).json({ message: "User with this email not exists" });
      }
    } else {
      res.status(400).json({ message: "Please fill are required details" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong in server" });
  }
};