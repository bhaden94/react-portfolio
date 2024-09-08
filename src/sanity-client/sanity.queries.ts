import { createClient } from "@sanity/client";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "../studio/constants";
import { AboutSchema } from "../studio/schemaTypes/about";
import { ContactSchema } from "../studio/schemaTypes/contact";

const isProd = process.env.NODE_ENV === "production";

export const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: isProd, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getAbout(): Promise<AboutSchema> {
  const posts = await client.fetch('*[_type == "about"][0]');
  return posts;
}

export async function getContactInfo(): Promise<ContactSchema[]> {
  const posts = await client.fetch('*[_type == "contact"]');
  return posts;
}
