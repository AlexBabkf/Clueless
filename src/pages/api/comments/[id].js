import dbConnect from "@/lib/connect.js";
import Comment from "@/models/Comment.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const comment = await Comment.find({ beerId: id });
    if (!comment) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(comment);
  }
}
