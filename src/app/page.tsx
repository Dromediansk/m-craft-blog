import { sanityFetch, token } from "../../sanity/lib/sanityFetch";
import { postsQuery } from "../../sanity/lib/queries";
import Posts from "@/components/Posts";
import { draftMode } from "next/headers";
import PreviewProvider from "@/components/PreviewProvider";
import PreviewPosts from "@/components/PreviewPosts";

export default async function Home() {
  const posts = await sanityFetch<Post[]>({ query: postsQuery });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    );
  }

  return <Posts posts={posts} />;
}
