import Posts from "@/components/Posts";
import { postsQuery } from "../../../sanity/lib/queries";
import { loadQuery } from "../../../sanity/lib/store";
import { draftMode } from "next/headers";
import PostsPreview from "@/components/PostsPreview";

const Page = async () => {
  const isDraftModeEnabled = draftMode().isEnabled;

  const initial = await loadQuery<Post[]>(
    postsQuery,
    {},
    { perspective: isDraftModeEnabled ? "previewDrafts" : "published" }
  );

  return isDraftModeEnabled ? (
    <PostsPreview initial={initial} />
  ) : (
    <Posts posts={initial.data} />
  );
};

export default Page;
