import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/studio/schemaTypes";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "./src/studio/constants";

export default defineConfig({
	name: "default",
	title: "portfolio",

	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,

	plugins: [structureTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
});
