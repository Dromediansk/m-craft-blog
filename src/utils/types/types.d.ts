type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

type Post = Base & {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  publishedAt: string;
};

type PostPath = {
  params: {
    slug: string;
  };
};

type Author = Base & {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
};

type Image = {
  _type: "image";
  asset: Reference;
};

type Reference = {
  _ref: string;
  _type: "reference";
};

type Slug = {
  _type: "slug";
  current: string;
};

type Block = {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
};

type Span = {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
};

type Category = Base & {
  description: string;
  title: string;
};

type MainImage = {
  _type: "image";
  asset: Reference;
};

type Title = {
  _type: string;
  current: string;
};
