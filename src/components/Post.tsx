"use client";

import { PortableText } from "@portabletext/react";
import RichTextComponents from "./slug/RichTextComponents";
import SlugTitleSection from "./slug/SlugTitleSection";
import { FC } from "react";

type PostProps = {
  post: Post;
};

const Post: FC<PostProps> = ({ post }) => {
  return (
    <article className="mx-auto w-full prose prose-lg p-2">
      <SlugTitleSection
        mainImage={post.mainImage}
        publishedAt={post.publishedAt}
        title={post.title}
        description={post.description}
        author={post.author}
        categories={post.categories}
      />
      <section className="py-5">
        <PortableText value={post.body} components={RichTextComponents} />
      </section>
    </article>
  );
};

export default Post;
