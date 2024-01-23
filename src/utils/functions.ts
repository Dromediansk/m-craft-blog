import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { Metadata } from "next";

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

export const createMetadataFromPost = (post: Post): Metadata => {
  return {
    metadataBase: new URL("https://blog.miroslavpillar.eu"),
    icons: "./M_logo.svg",
    title: post.title,
    description: post.description,
    authors: {
      name: post.author.name,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://blog.miroslavpillar.eu/${post.slug.current}`,
      siteName: "MP Dev Blog",
      images: urlFor(post.mainImage).url(),
      type: "article",
      locale: "en_GB",
    },
  };
};
