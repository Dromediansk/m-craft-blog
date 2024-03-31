"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { QueryParams } from "next-sanity";

import Post from "@/components/Post";
import { postQuery } from "../../sanity/lib/queries";

export default function PostPreview({
  initial,
  params,
}: {
  initial: QueryResponseInitial<Post>;
  params: QueryParams;
}) {
  const { data } = useQuery<Post | null>(postQuery, params, {
    initial,
  });

  return data ? (
    <Post post={data} />
  ) : (
    <div className="bg-red-100">Post not found</div>
  );
}
