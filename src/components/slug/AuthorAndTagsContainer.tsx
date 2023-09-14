import Image from "next/image";
import { FC } from "react";
import Category from "../Category";
import { urlFor } from "@/utils/functions";

type AuthorAndTagsContainerProps = {
  categories: Post["categories"];
  author: Post["author"];
};

const AuthorAndTagsContainer: FC<AuthorAndTagsContainerProps> = ({
  categories,
  author,
}) => {
  return (
    <div className="flex justify-between flex-col sm:flex-row gap-2">
      <div className="flex items-center space-x-4">
        <Image
          className="rounded-full border border-main"
          src={urlFor(author.image).url()}
          alt={author.name}
          height={50}
          width={50}
        />

        <div>
          <h3 className="text-lg font-bold text-gray-600">{author.name}</h3>
        </div>
      </div>
      {categories && (
        <div className="flex items-center space-x-2 my-2">
          {categories.map((category) => (
            <Category key={category._id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorAndTagsContainer;
