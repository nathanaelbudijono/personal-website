import Typography from "@/components/core/typography";
import { nextAPIUrl } from "@/constant/env";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";

export default function ViewsMetric({ slug }: { slug: any }) {
  const [view, setViews] = useState<number>(0);
  console.log(slug);

  useEffect(() => {
    const incrementView = async () => {
      try {
        const response = await axios.post(`${nextAPIUrl}/projects/${slug}`, {
          slug,
        });
        setViews(response.data.views);
      } catch (error) {
        console.error("Error incrementing view:", error);
      }
    };

    incrementView();
  }, [slug]);
  return (
    <main className="flex items-center gap-2">
      <AiFillEye className="text-typography-100 dark:text-typography-800" />
      <Typography variant="small">{view} views</Typography>
    </main>
  );
}
