import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import dbConnect from "@/lib/connect";

export default async function handler(req, res) {
  await dbConnect();
  const session = await getServerSession(req, res, authOptions);

  if (req.method === "GET") {
    const id = req.query.id;
    const user = await User.findById(id);
    res.json({ user });
  }
  console.log("USERS");
  if (req.method === "PATCH") {
    const { name, bio, favorite } = req.body;
    const userData = {};
    if (name) userData.name = name;
    if (bio) userData.bio = bio;
    if (favorite) userData.favorite = favorite;
    const patch = await User.findByIdAndUpdate(session.user._id, userData, {
      new: true,
    });

    res.status(200).json(patch);
  }
}
