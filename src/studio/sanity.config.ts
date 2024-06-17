import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export const SANITY_PROJECT_ID = "0kc6p0xa";
export const SANITY_DATASET = "production";
export const config = defineConfig({
	name: "default",
	title: "portfolio",

	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,

	plugins: [structureTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
});
