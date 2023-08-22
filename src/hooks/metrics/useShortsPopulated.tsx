import useSWR from "swr";
import * as React from "react";
import { Metrics } from "@/pages/api/shorts";
import { PopulatedShorts, ShortsPostMeta } from "@/lib/shorts-types";

const API_URL = `/api/shorts`;

async function getShortsMetrics(type: string): Promise<Metrics> {
  const res = await fetch(API_URL + `?type=${type}`);
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
}

export const usePopulatedShortsPosts = (
  posts: ShortsPostMeta[],
  type: string
) => {
  const { data: metrics, error } = useSWR<Metrics>(
    [API_URL, type],
    () => getShortsMetrics(type),
    {
      dedupingInterval: 1000,
      refreshInterval: 1000,
    }
  );

  const populatedShortsPost = React.useMemo(() => {
    const result = posts.reduce((result: PopulatedShorts[], post) => {
      if (metrics && post.slug in metrics) {
        const { views } = metrics?.[post.slug];
        result.push({ ...post, views });
      } else {
        result.push({ ...post, views: 0 });
      }
      return result;
    }, []);

    return result;
  }, [metrics]);

  return {
    populatedShortsPost,
    isLoading: !error && !metrics,
    isError: !!error,
  };
};
