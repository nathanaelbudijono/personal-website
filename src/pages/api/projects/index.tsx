import { connectToDatabase } from "@/lib/connect-db";
import { ProjectView } from "@/models/project-view";
import type { NextApiRequest, NextApiResponse } from "next";

connectToDatabase();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        const getProjectViews = await ProjectView.find();
        res.status(200).json(getProjectViews);
      } catch (err) {
        return res.status(500).json({ message: "Error fetching data." });
      }
      break;
  }
}
