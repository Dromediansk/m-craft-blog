import React, { FC } from "react";
import { BlockStyleProps } from "sanity";

const Blockquote: FC<BlockStyleProps> = ({ children }) => {
  return (
    <blockquote className="border-l-main border-l-4 italic pl-4 tracking-wide py-2 my-4">
      {children}
    </blockquote>
  );
};

export default Blockquote;
