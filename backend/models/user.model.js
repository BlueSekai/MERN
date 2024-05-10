const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    role: {
      type: String,
      default: "operator",
    },
    showSettings: {
      type: [mongoose.SchemaTypes.Mixed]
    },
    archivedProjects: {
      type: [mongoose.Types.ObjectId],
      ref: "projects",
    },
    archivedWells: {
      type: [mongoose.Types.ObjectId],
      ref: "wells",
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", schema);
