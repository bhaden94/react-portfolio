import { createClient } from "@sanity/client";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "../studio/constants";
import { AboutSchema } from "../studio/schemaTypes/about";
import { ContactSchema } from "../studio/schemaTypes/contact";
import { EducationSchema } from "../studio/schemaTypes/education";

const isProd = process.env.NODE_ENV === "production";

export const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: isProd, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getAbout(): Promise<AboutSchema> {
  return await client.fetch('*[_type == "about"][0]');
}

export async function getContactInfo(): Promise<ContactSchema[]> {
  return await client.fetch('*[_type == "contact"]');
}

export async function getEducationInfo(): Promise<EducationSchema[]> {
  return await client.fetch('*[_type == "education"] | order(priority asc)');
}