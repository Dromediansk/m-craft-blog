/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import { defineConfig } from "sanity";

import { dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { defaultDocumentNode } from "./sanity/desk/defaultDocumentNode";
import { codeInput } from "@sanity/code-input";
import StudioNavbar from "@/components/studio/StudioNavbar";
import theme from "@/utils/theme";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import { structureTool } from "sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
  theme,
  plugins: [
    structureTool({ defaultDocumentNode }),
    codeInput(),
    vercelDeployTool(),
  ],
});
