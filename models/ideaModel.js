const mongoose = require("mongoose");

const ideaSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    idea: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const ideaModel = mongoose.model("ideas", ideaSchema);

module.exports = ideaModel;
