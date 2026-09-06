import { defineCliConfig } from "sanity/cli";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "./src/sanity/config";

export default defineCliConfig({
  api: {
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
  },
  // Target for `npm run studio:deploy`; without it the CLI prompts each time.
  studioHost: "bradyhaden-portfolio",
});
