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
    const name = req.body;
    console.log(req.body);
    const patch = await User.findByIdAndUpdate(session.user._id, {
      $set: { name: name },
    });

    res.status(200).json(patch);
  }
}
