const ideaModel = require("../models/ideaModel");

exports.getIdeas = async (req, res) => {
  try {
    let allIdeas = await ideaModel.find().sort({ createdAt: -1 });

    res.status(200).json({ message: "All ideas fetched", allIdeas });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong in server" });
  }
};
