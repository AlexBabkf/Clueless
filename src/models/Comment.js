import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    author: { type: mongooseTypes.ObjectId, ref: "User" },
    text: String,
  },
  { timestamps: true }
);

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
