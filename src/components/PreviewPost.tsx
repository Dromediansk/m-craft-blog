"use client";

import { useParams } from "next/navigation";
import { useLiveQuery } from "@sanity/preview-kit";
import Post from "@/components/Post";
import { postQuery } from "../../sanity/lib/queries";
import { FC } from "react";

type PreviewPostProps = {
  post: Post;
};

const PreviewPost: FC<PreviewPostProps> = ({ post }) => {
  const params = useParams();
  const [data] = useLiveQuery(post, postQuery, params);

  return <Post post={data} />;
};

export default PreviewPost;
