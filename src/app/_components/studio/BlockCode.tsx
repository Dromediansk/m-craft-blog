import { FC } from "react";
import { BlockStyleProps } from "sanity";

const BlockCode: FC<BlockStyleProps> = ({ children }) => {
  return (
    <code className="bg-gray-200 text-gray-600 px-5 leading-10 block">
      {children}
    </code>
  );
};

export default BlockCode;
