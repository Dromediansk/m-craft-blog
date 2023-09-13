import { FC } from "react";
import { AiOutlineTag } from "react-icons/ai";

type CategoryProps = {
  category: Category;
};

const Category: FC<CategoryProps> = ({ category }) => {
  return (
    <span
      key={category._id}
      className="py-1 px-2 rounded-full text-xs uppercase text-gray-500 bg-gray-200 flex items-center gap-2"
    >
      <AiOutlineTag size={15} />
      {category.title}
    </span>
  );
};

export default Category;
