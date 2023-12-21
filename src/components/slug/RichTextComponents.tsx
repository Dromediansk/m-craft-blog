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
        <div className="my-5">
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
      <ul className="py-0 list-disc my-0">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="p-0 my-4">
        <p className="my-0">{children}</p>
      </li>
    ),
  },
  block: {
    blockquote: ({ children }) => {
      return (
        <blockquote className="border-l-main border-l-4 italic tracking-wide text-gray-600 py-2 my-10">
          {children}
        </blockquote>
      );
    },
    blockCode: ({ children }) => (
      <span className="prose-code:before:content-none prose-code:after:content-none">
        <code className="bg-gray-200 text-gray-600 px-2 leading-10 block">
          {children}
        </code>
      </span>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      if (!value.href) {
        return;
      }
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-secondary hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
    code: ({ children }) => (
      <span className="bg-gray-200 px-2 prose-code:before:content-none prose-code:after:content-none">
        <code className="text-gray-600">{children}</code>
      </span>
    ),
  },
};

export default RichTextComponents;
