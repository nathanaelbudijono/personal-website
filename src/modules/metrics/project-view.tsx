import Skeleton from "@/components/core/skeleton";
import Typography from "@/components/core/typography";
import { nextAPIUrl } from "@/constant/env";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";

export default function ViewsMetric({ slug }: { slug: any }) {
  const [view, setViews] = useState<number>(0);
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
      {view === null ? (
        <Skeleton className="w-[48px] h-[15px]" />
      ) : (
        <Typography variant="small">{view} views</Typography>
      )}
    </main>
  );
}
