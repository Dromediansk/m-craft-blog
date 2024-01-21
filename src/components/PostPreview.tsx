"use client";

import Post from "@/components/Post";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { QueryParams } from "sanity";
import { postQuery } from "../../sanity/lib/queries";
import { FC } from "react";

type PostPreviewProps = {
  initial: QueryResponseInitial<Post>;
  params: QueryParams;
};

const PostPreview: FC<PostPreviewProps> = ({ initial, params }) => {
  const { data } = useQuery<Post | null>(postQuery, params, {
    initial,
  });

  return data ? (
    <Post post={data} />
  ) : (
    <div className="bg-red-100">Post not found</div>
  );
};

export default PostPreview;
