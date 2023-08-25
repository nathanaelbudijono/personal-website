import Giscus, { Repo } from "@giscus/react";

export default function GiscusComment() {
  return (
    <Giscus
      id="comment"
      repo={(process.env.NEXT_PUBLIC_GISCUS_REPO as Repo) || ""}
      repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ""}
      category="Announcements"
      categoryId="DIC_kwDOKG44yc4CY2TI"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="bottom"
      theme="dark_dimmed"
      lang="en"
      loading="lazy"
    />
  );
}
