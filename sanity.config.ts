/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import { defineConfig } from "sanity";

import { dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { codeInput } from "@sanity/code-input";
import StudioNavbar from "@/components/studio/StudioNavbar";
import theme from "@/utils/theme";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
  theme,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Collections")
          .items([...S.documentTypeListItems()]),
    }),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
    codeInput(),
    vercelDeployTool(),
  ],
});
