import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  music: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Video" },
  like: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }],
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
