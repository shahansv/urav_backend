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

exports.toggleLikeIdea = async (req, res) => {
  try {
    const { ideaId } = req.params;

    const idea = await ideaModel.findById(ideaId);

    if (!idea) {
      return res.status(404).json({
        message: "Idea not found",
      });
    }

    idea.isLiked = !idea.isLiked;

    await idea.save();

    res.status(200).json({
      message: idea.isLiked ? "Idea liked" : "Idea disliked",
      idea,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong on the server",
    });
  }
};
