import Skeleton from "@/components/core/skeleton";
import Typography from "@/components/core/typography";
import { nextAPIUrl } from "@/constant/env";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";

export default function ShortsViewsMetric({ slug }: { slug: any }) {
  const [view, setViews] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const incrementView = async () => {
      try {
        const response = await axios.post(`${nextAPIUrl}/shorts/${slug}`, {
          slug,
        });
        setViews(response.data.views);
        setIsLoading(false);
      } catch (error) {
        console.error("Error incrementing view:", error);
        setIsLoading(false);
      }
    };

    incrementView();
  }, [slug]);
  return (
    <main className="flex items-center gap-2">
      <AiFillEye className="text-typography-100 dark:text-typography-800" />
      {isLoading ? (
        <Skeleton className="w-[48px] h-[15px]" />
      ) : (
        <Typography variant="small">{view} views</Typography>
      )}
    </main>
  );
}
