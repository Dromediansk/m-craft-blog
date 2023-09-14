import Post from "@/components/Post";
import { draftMode } from "next/headers";
import PreviewProvider from "@/components/PreviewProvider";
import PreviewPost from "@/components/PreviewPost";
import { FC } from "react";
import { Metadata } from "next";
import { createMetadataFromPost } from "@/utils/functions";
import { client } from "../../../../sanity/lib/client";
import { postPathsQuery, postQuery } from "../../../../sanity/lib/queries";
import { sanityFetch, token } from "../../../../sanity/lib/sanityFetch";

type PostPageProps = {
  params: {
    slug: string;
  };
};

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const postPaths = await client.fetch(postPathsQuery);

  return postPaths;
}

export const generateMetadata = async ({
  params,
}: PostPageProps): Promise<Metadata> => {
  const post = await sanityFetch<Post>({ query: postQuery, params });
  return createMetadataFromPost(post);
};

const PostPage: FC<PostPageProps> = async ({ params }) => {
  const post = await sanityFetch<Post>({ query: postQuery, params });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPost post={post} />
      </PreviewProvider>
    );
  }

  return <Post post={post} />;
};

export default PostPage;
