import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/utils/functions";
import { FC } from "react";

type PostsProps = {
  posts: Post[];
};

const Posts: FC<PostsProps> = ({ posts = [] }) => {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <div className="lg:px-12">
      <h1 className="text-2xl p-4 font-bold">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-y-16 min-h-[80vh]">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={post.slug.current}
            className="cursor-pointer h-[400px]"
          >
            <div className="relative w-full h-full">
              <Image
                className="object-cover object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
                placeholder="blur"
                blurDataURL={urlFor(post.mainImage).url()}
                sizes="100%"
              />
              <div className="absolute bottom-0 w-full bg-opacity-40 bg-black backdrop-blur-lg drop-shadow-lg text-white p-5 flex justify-between">
                <div>
                  <h3 className="font-bold text-lg">{post.title}</h3>
                  <span>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
