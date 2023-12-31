/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { defaultDocumentNode } from "./sanity/desk/defaultDocumentNode";
import { codeInput } from "@sanity/code-input";
import StudioNavbar from "@/components/studio/StudioNavbar";
import theme from "@/utils/theme";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";

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
    deskTool({ defaultDocumentNode }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    codeInput(),
    vercelDeployTool(),
  ],
});
