import "server-only";

import type { QueryParams } from "@sanity/client";
import { draftMode } from "next/headers";
import { client } from "../lib/client";

const DEFAULT_PARAMS: QueryParams = {};
const DEFAULT_TAGS: string[] = [];

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required."
    );
  }

  const isDevelopment = process.env.NODE_ENV === "development";

  return client.fetch<QueryResponse>(query, params, {
    cache: isDevelopment || isDraftMode ? undefined : "force-cache",
    token,
    perspective: isDraftMode ? "previewDrafts" : "published",
    next: {
      ...(isDraftMode && { revalidate: 30 }),
      tags,
    },
  });
}
