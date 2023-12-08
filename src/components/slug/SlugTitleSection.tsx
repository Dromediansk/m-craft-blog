import { urlFor } from "@/utils/functions";
import Image from "next/image";
import { FC } from "react";
import AuthorAndTagsContainer from "./AuthorAndTagsContainer";

type SlugTitleSectionProps = {
  mainImage: Post["mainImage"];
  publishedAt: Post["publishedAt"];
  title: Post["title"];
  description: Post["description"];
  author: Post["author"];
  categories: Post["categories"];
};

const SlugTitleSection: FC<SlugTitleSectionProps> = ({
  mainImage,
  publishedAt,
  title,
  description,
  author,
  categories,
}) => {
  return (
    <section className="text-gray-600 drop-shadow-sm">
      <h1 className="text-4xl font-extrabold text-main">{title}</h1>

      <AuthorAndTagsContainer
        author={author}
        categories={categories}
        publishedAt={publishedAt}
      />

      <p className="py-2 my-0">
        <i>{description}</i>
      </p>

      <div className="p-10 relative min-h-[45vh]">
        <Image
          className="object-cover object-center mx-auto"
          src={urlFor(mainImage).url()}
          alt={title}
          fill
          placeholder="blur"
          blurDataURL={urlFor(mainImage).url()}
          sizes="100%"
        />
      </div>
    </section>
  );
};

export default SlugTitleSection;
