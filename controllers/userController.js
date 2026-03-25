const ideaModel = require("../models/ideaModel");

exports.addIdea = async (req, res) => {
  try {
    let { name, email, idea } = req.body;

    if (name && email && idea) {
      let newIdea = new ideaModel({
        name,
        email,
        idea,
      });

      await newIdea.save();

      res.status(201).json({ message: "Idea added" }, newIdea);
    } else {
      res.status(400).json({ message: "Please fill all are required details" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong in server" });
  }
};
