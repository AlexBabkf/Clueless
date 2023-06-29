import Comment from "@/models/Comment";
import dbConnect from "@/lib/connect";

export default async function handler(req, res) {
  await dbConnect();

  console.log("ALL COMMENTS");

  if (req.method === "GET") {
    const id = req.query.id;
    const comment = await Comment.find(id);
    return res.status(200).json({ comment });
  }

  if (req.method === "POST") {
    try {
      const { comment, userId, beerId, userName } = req.body;
      const newComment = new Comment({
        comment,
        userId,
        beerId,
        userName,
      });
      await newComment.save();
      return res.status(201).json({ status: "comment created" });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }
}
