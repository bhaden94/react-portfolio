import { defineCliConfig } from "sanity/cli";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "./src/studio/constants";

export default defineCliConfig({
	api: {
		projectId: SANITY_PROJECT_ID,
		dataset: SANITY_DATASET,
	},
});
