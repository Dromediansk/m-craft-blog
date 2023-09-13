"use client";

import { PortableText } from "@portabletext/react";
import RichTextComponents from "./slug/RichTextComponents";
import SlugTitleSection from "./slug/SlugTitleSection";
import { FC } from "react";
import Footer from "./Footer";

type PostProps = {
  post: Post;
};

const Post: FC<PostProps> = ({ post }) => {
  return (
    <article className="mx-auto prose prose-lg">
      <SlugTitleSection
        mainImage={post.mainImage}
        createdAt={post._createdAt}
        title={post.title}
        description={post.description}
        author={post.author}
        categories={post.categories}
      />
      <section className="p-5">
        <PortableText value={post.body} components={RichTextComponents} />
      </section>
    </article>
  );
};

export default Post;
