import BlockCode from "@/components/studio/BlockCode";
import Blockquote from "@/components/studio/Blockquote";
import Divider from "@/components/studio/Divider";
import InlineCode from "@/components/studio/InlineCode";
import { defineType, defineArrayMember } from "sanity";

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote", component: Blockquote },
        { title: "Block Code", value: "blockCode", component: BlockCode },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code", component: InlineCode },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      name: "break",
      type: "object",
      title: "Break",
      fields: [
        {
          name: "style",
          type: "string",
          options: {
            list: ["break"],
          },
        },
      ],
      components: {
        preview: Divider,
      },
    }),
    defineArrayMember({
      type: "image",
      fields: [
        {
          name: "author",
          type: "string",
          title: "Author",
        },
      ],
      options: { hotspot: true },
    }),
    defineArrayMember({
      type: "code",
      name: "codeSnippet",
      title: "Code Snippet",
      options: {
        language: "javascript",
        languageAlternatives: [
          { title: "Javascript", value: "javascript" },
          { title: "Typescript", value: "typescript" },
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
        ],
        withFilename: true,
      },
    }),
  ],
});
