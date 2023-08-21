import useSWR from "swr";
import * as React from "react";
import { Metrics } from "@/pages/api/projects";
import { nextAPIUrl } from "@/constant/env";
import { PopulatedProject, ProjectPostMeta } from "@/lib/projectTypes";

async function getProjectMetrics(type: string): Promise<Metrics> {
  const res = await fetch(`${nextAPIUrl}` + `?type=${type}`);
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
}

export const usePopulatedProjectPosts = (
  posts: ProjectPostMeta[],
  type: string
) => {
  const { data: metrics, error } = useSWR<Metrics>(
    [`${nextAPIUrl}`, type],
    () => getProjectMetrics(type),
    {
      dedupingInterval: 1000,
      refreshInterval: 1000,
    }
  );

  const populatedProjectPosts = React.useMemo(() => {
    const result = posts.reduce((result: PopulatedProject[], post) => {
      if (metrics && post.slug in metrics) {
        const { views } = metrics[post.slug];
        result.push({ ...post, views });
      } else {
        result.push({ ...post, views: 0 });
      }
      return result;
    }, []);

    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metrics]);

  return {
    populatedProjectPosts,
    isLoading: !error && !metrics,
    isError: !!error,
  };
};
