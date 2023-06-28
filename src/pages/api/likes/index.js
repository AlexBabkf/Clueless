import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import dbConnect from "@/lib/connect";
import User from "@/models/User";

export default async function handler(req, res) {
  await dbConnect();
  const session = await getServerSession(req, res, authOptions);

  if (req.method === "POST") {
    try {
      const { beerId } = req.body;
      await User.updateOne(
        { _id: session.user._id },
        { $addToSet: { liked: beerId } }
      );

      return res.status(200).json({ message: "Product liked " });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  }
  if (req.method === "PATCH") {
    try {
      const { beerId } = req.body;
      await User.updateOne(
        { _id: session.user._id },
        { $pull: { liked: beerId } }
      );

      return res.status(200).json({ message: "Product liked " });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  }
}
