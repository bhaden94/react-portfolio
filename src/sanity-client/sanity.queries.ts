import { createClient } from "@sanity/client";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "./sanityConstants";
import { AboutSchema } from "./schemaTypes/about";
import { ContactSchema } from "./schemaTypes/contact";
import { EducationSchema } from "./schemaTypes/education";
import { ExperienceSchema } from "./schemaTypes/experience";
import { ProjectSchema } from "./schemaTypes/project";
import { SkillSchema } from "./schemaTypes/skill";
import { ThemeSchema } from "./schemaTypes/theme/theme";

// const isProd = process.env.NODE_ENV === "production";

export const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: import.meta.env.PROD, // set to `false` to bypass the edge cache
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

export async function getExperienceInfo(): Promise<ExperienceSchema[]> {
  return await client.fetch('*[_type == "experience"] | order(endDate desc)');
}

export async function getProjectInfo(): Promise<ProjectSchema[]> {
  return await client.fetch(
    '*[_type == "project" && isShown] | order(priority asc)',
  );
}

export async function getSkillInfo(): Promise<SkillSchema[]> {
  return await client.fetch('*[_type == "skill"] | order(priority asc)');
}

export async function getTheme(): Promise<ThemeSchema> {
  return await client.fetch('*[_type == "theme"][0]');
}
