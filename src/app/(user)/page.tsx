import Posts from "@/components/Posts";
import { loadQuery } from "../../../sanity/lib/store";
import { postsQuery } from "../../../sanity/lib/queries";
import { draftMode } from "next/headers";
import PostsPreview from "@/components/PostsPreview";

export default async function Page() {
  const initial = await loadQuery<Post[]>(
    postsQuery,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <PostsPreview initial={initial} />
  ) : (
    <Posts posts={initial.data} />
  );
}
