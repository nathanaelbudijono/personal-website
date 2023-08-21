import { connectToDatabase } from "@/lib/connect-db";
import { ProjectView } from "@/models/project-view";
import type { NextApiRequest, NextApiResponse } from "next";

connectToDatabase();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { slug } = req.body;

    try {
      const viewEntry = await ProjectView.findOneAndUpdate(
        { slug },
        { $inc: { views: 1 } },
        { upsert: true, new: true }
      );

      return res.status(200).json({ views: viewEntry.views });
    } catch (error) {
      return res.status(500).json({ message: "Error updating view count." });
    }
  }

  return res.status(405).json({ message: "Method not allowed." });
}
