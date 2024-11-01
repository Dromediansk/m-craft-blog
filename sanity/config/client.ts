import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
});
