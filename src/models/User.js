import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  avatarUrl: {
    type: String,
    required: true,
    default: "",
  },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  likeMusics: [{ type: mongoose.Schema.Types.ObjectId, ref: "Music" }],
});

const User = mongoose.model("User", userSchema);

export default User;
