import { QueryParams } from "next-sanity";
import { draftMode } from "next/headers";

import Post from "@/components/Post";
import PostPreview from "@/components/PostPreview";
import { postQuery, postsQuery } from "../../../../sanity/lib/queries";
import { client } from "../../../../sanity/lib/client";
import { loadQuery } from "../../../../sanity/lib/store";
import { FC } from "react";
import { Metadata } from "next";
import { createMetadataFromPost } from "@/utils/functions";

type PageProps = {
  params: QueryParams;
};

export const generateStaticParams = async () => {
  const posts: Post[] = await client.fetch<Post[]>(postsQuery);

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const post = await client.fetch<Post>(postQuery, params);
  return createMetadataFromPost(post);
};

const Page: FC<PageProps> = async ({ params }) => {
  const draftModeEnabled = draftMode().isEnabled;

  const initial = await loadQuery<Post>(postQuery, params, {
    perspective: draftModeEnabled ? "previewDrafts" : "published",
  });

  return draftModeEnabled ? (
    <PostPreview initial={initial} params={params} />
  ) : (
    <Post post={initial.data} />
  );
};

export default Page;
