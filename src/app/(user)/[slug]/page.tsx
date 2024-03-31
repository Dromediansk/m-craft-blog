import { QueryParams } from "next-sanity";
import { draftMode } from "next/headers";

import Post from "@/components/Post";
import { postQuery, postsQuery } from "../../../../sanity/lib/queries";
import { client } from "../../../../sanity/lib/client";
import { loadQuery } from "../../../../sanity/lib/store";
import PostPreview from "@/components/PostPreview";

export async function generateStaticParams() {
  const posts = await client.fetch<Post[]>(postsQuery);

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const initial = await loadQuery<Post>(postQuery, params, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <PostPreview initial={initial} params={params} />
  ) : (
    <Post post={initial.data} />
  );
}
