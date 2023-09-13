import { FC } from "react";
import { BlockDecoratorProps } from "sanity";

const InlineCode: FC<BlockDecoratorProps> = ({ children }) => {
  return <code className="bg-gray-500 text-black px-1">{children}</code>;
};

export default InlineCode;
