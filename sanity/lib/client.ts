import { ClientConfig, createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn, token } from "../env";

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  // set CDN to live API in development mode
  useCdn,
  token,
};

export const client = createClient(config);
