import { createClient } from "@sanity/client";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "../studio/sanity.config";

export const client = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	useCdn: false, // set to `false` to bypass the edge cache
	apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getAbout() {
	const posts = await client.fetch('*[_type == "about"][0]');
	return posts;
}
