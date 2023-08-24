import useSWR from "swr";
import * as React from "react";
import { Metrics } from "@/pages/api/projects";
import { PopulatedProject, ProjectPostMeta } from "@/lib/project-types";

const API_URL = `/api/projects`;

async function getProjectMetrics(type: string): Promise<Metrics> {
  const res = await fetch(API_URL + `?type=${type}`);
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
    [API_URL, type],
    () => getProjectMetrics(type),
    {
      dedupingInterval: 1000,
      refreshInterval: 1000,
    }
  );

  const populatedProjectPosts = React.useMemo(() => {
    const result = posts.reduce((result: PopulatedProject[], post) => {
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
    populatedProjectPosts,
    isLoading: !error && !metrics,
    isError: !!error,
  };
};
