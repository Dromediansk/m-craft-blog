import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/utils/functions";
import { FC } from "react";

type PostsProps = {
  posts: Post[];
};

const Posts: FC<PostsProps> = ({ posts }) => {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <div className="lg:px-12">
      <h1 className="text-2xl p-4 font-bold">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[80vh]">
        {posts.map((post, index) => {
          const shouldPrioritize =
            index <
            (typeof window !== "undefined" && window.innerWidth <= 768 ? 2 : 6);

          return (
            <Link
              key={post._id}
              href={post.slug.current}
              className="cursor-pointer h-80 my-5 mx-2 sm:mx-4"
            >
              <div className="text-right text-sm text-gray-400">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <div className="relative w-full h-full">
                <Image
                  className="object-cover object-center"
                  src={urlFor(post.mainImage).width(800).quality(75).url()}
                  alt={post.author.name}
                  fill
                  priority={shouldPrioritize}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 w-full bg-opacity-40 bg-black backdrop-blur-lg drop-shadow-lg text-white px-4 py-2 flex justify-between h-[100px]">
                  <h3 className="font-bold text-lg my-auto">{post.title}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
