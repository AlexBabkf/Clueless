import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    userName: String,
    userId: String,
    comment: String,
    beerId: String,
  },
  { timestamps: true }
);

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
