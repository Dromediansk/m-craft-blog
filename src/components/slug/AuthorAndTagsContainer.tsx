import Image from "next/image";
import { FC } from "react";
import Category from "../Category";
import { urlFor } from "@/utils/functions";

type AuthorAndTagsContainerProps = {
  categories: Post["categories"];
  author: Post["author"];
  publishedAt: string;
};

const AuthorAndTagsContainer: FC<AuthorAndTagsContainerProps> = ({
  categories,
  author,
  publishedAt,
}) => {
  return (
    <>
      <div className="flex justify-between flex-col sm:flex-row items-start">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <Image
              className="rounded-full border border-main my-2 mx-0"
              src={urlFor(author.image).url()}
              alt={author.name}
              height={50}
              width={50}
            />
            <h3 className="m-auto text-lg font-bold text-gray-600">
              {author.name}
            </h3>
          </div>
          <span className="text-md italic">
            {new Date(publishedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
      <div className="my-3">
        {categories && (
          <div className="flex items-center space-x-2 my-auto">
            {categories.map((category) => (
              <Category key={category._id} category={category} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AuthorAndTagsContainer;
