"use client";

import { useLiveQuery } from "@sanity/preview-kit";
import Posts from "@/components/Posts";
import { postsQuery } from "../../sanity/lib/queries";
import { FC } from "react";

type PreviewPostsProps = {
  posts: Post[];
};

const PreviewPosts: FC<PreviewPostsProps> = ({ posts = [] }) => {
  const [data] = useLiveQuery(posts, postsQuery);

  return <Posts posts={data} />;
};

export default PreviewPosts;
