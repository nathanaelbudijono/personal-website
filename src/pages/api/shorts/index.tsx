import { connectToDatabase } from "@/lib/connect-db";
import { ShortsView } from "@/models/shorts-view";
import type { NextApiRequest, NextApiResponse } from "next";

connectToDatabase();

export type Metrics = {
  [slug: string]: {
    views: string | number;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        const getShortsView = await ShortsView.find();
        let metrics: Metrics = {};
        getShortsView.forEach((item) => {
          const slug = item?.slug;
          metrics[slug] = { views: item?.views || 0 };
        });
        res.status(200).json(metrics);
      } catch (err) {
        return res.status(500).json({ message: "Error fetching data." });
      }
      break;
  }
}
