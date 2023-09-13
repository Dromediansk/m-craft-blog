import { urlFor } from "@/utils/functions";
import Image from "next/image";
import { FC } from "react";
import AuthorAndTagsContainer from "./AuthorAndTagsContainer";

type SlugTitleSectionProps = {
  mainImage: Post["mainImage"];
  createdAt: Post["_createdAt"];
  title: Post["title"];
  description: Post["description"];
  author: Post["author"];
  categories: Post["categories"];
};

const SlugTitleSection: FC<SlugTitleSectionProps> = ({
  mainImage,
  createdAt,
  title,
  description,
  author,
  categories,
}) => {
  return (
    <section className="text-gray-600 drop-shadow-sm">
      <div className="p-5 w-full">
        <div className="flex flex-col md:flex-row justify-between gap-y-5">
          <div>
            <h1 className="text-4xl font-extrabold text-main">{title}</h1>
            <span className="text-md italic">
              {new Date(createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
        <div className="py-4">
          <AuthorAndTagsContainer author={author} categories={categories} />
        </div>

        <p className="pt-2 pb-4">{description}</p>

        <div className="p-10 relative min-h-[25vh]">
          <Image
            className="object-cover object-center mx-auto"
            src={urlFor(mainImage).url()}
            alt={title}
            fill
            priority
            sizes="100%"
          />
        </div>
      </div>
    </section>
  );
};

export default SlugTitleSection;
