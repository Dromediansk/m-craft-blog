"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import Posts from "@/components/Posts";
import { postsQuery } from "../../sanity/lib/queries";

export default function PostsPreview({
  initial,
}: {
  initial: QueryResponseInitial<Post[]>;
}) {
  const { data } = useQuery<Post[] | null>(postsQuery, {}, { initial });

  return data ? (
    <Posts posts={data} />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}
