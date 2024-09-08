import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity-client/schemaTypes";
import {
  SANITY_DATASET,
  SANITY_PROJECT_ID,
} from "./src/sanity-client/sanityConstants";

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
