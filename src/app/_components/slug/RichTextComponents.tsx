import {
  PortableTextComponents,
  PortableTextTypeComponentProps,
} from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { urlFor } from "@/utils/functions";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type RichComponentImageProps = PortableTextTypeComponentProps<{}> & {
  value: {
    author: string;
  } & SanityImageSource;
};

type RichComponentCodeSnippetProps = PortableTextTypeComponentProps<{}> & {
  language?: string;
  value: {
    filename: string;
    code: string;
  };
};

const RichTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: RichComponentImageProps) => {
      return (
        <div className="flex flex-col md:m-10">
          <div className="relative w-full h-96 mx-auto">
            <Image
              className="object-cover sm:object-scale-down"
              src={urlFor(value).url()}
              alt="Blog Post Image"
              fill
              sizes="100%"
            />
          </div>
          {value.author && (
            <span className="text-center text-sm italic text-gray-500">
              From {value.author}
            </span>
          )}
        </div>
      );
    },
    codeSnippet: ({
      language = "javascript",
      value,
    }: RichComponentCodeSnippetProps) => {
      return (
        <div className="my-5 pb-5">
          <span className="text-gray-500 italic">{value.filename}</span>
          <SyntaxHighlighter
            showLineNumbers
            language={language}
            style={nightOwl}
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      );
    },
    break: () => <hr className="hr my-7 md:my-14 mx-28" />,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-8 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li>
        <p>{children}</p>
      </li>
    ),
  },
  block: {
    blockquote: ({ children }) => (
      <blockquote className="border-l-main border-l-4 italic tracking-wide text-gray-600 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
    blockCode: ({ children }) => (
      <code className="bg-gray-200 text-gray-600 px-5 leading-10 block">
        {children}
      </code>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-main hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
    code: ({ children }) => (
      <code className="bg-gray-200 text-gray-600 px-2">{children}</code>
    ),
  },
};

export default RichTextComponents;
