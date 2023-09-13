"use client";

import { useParams } from "next/navigation";
import { useLiveQuery } from "@sanity/preview-kit";
import Post from "@/app/_components/Post";
import { postQuery } from "../../../sanity/lib/queries";

export default function PreviewPost({ post }: { post: Post }) {
  const params = useParams();
  const [data] = useLiveQuery(post, postQuery, params);

  return <Post post={data} />;
}
