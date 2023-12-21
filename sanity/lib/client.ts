import { ClientConfig, createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  // set CDN to live API in development mode
  useCdn,
};

export const client = createClient(config);
