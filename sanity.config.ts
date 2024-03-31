import { defineConfig } from "sanity";

import { dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { defaultDocumentNode } from "./sanity/structure/defaultDocumentNode";
import { codeInput } from "@sanity/code-input";
import StudioNavbar from "@/components/studio/StudioNavbar";
import theme from "@/utils/theme";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { locate } from "./sanity/presentation/locate";

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
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
    vercelDeployTool(),
  ],
});
