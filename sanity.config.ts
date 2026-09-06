import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import {
  SANITY_DATASET,
  SANITY_PROJECT_ID,
} from "./src/sanity/config";
import { schemaTypes } from "./src/sanity/schema";

const SINGLETONS = ["siteSettings"];

export default defineConfig({
  name: "default",
  title: "Brady Haden — Portfolio",

  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings"),
              ),
            S.divider(),
            S.documentTypeListItem("lensHero").title("Heroes (per lens)"),
            S.documentTypeListItem("sectionCopy").title("Section questions"),
            S.divider(),
            S.documentTypeListItem("caseStudy").title("Case studies"),
            S.documentTypeListItem("deltaRow").title("Deltas"),
            S.documentTypeListItem("leadershipCard").title("Leadership cards"),
            S.documentTypeListItem("stackTier").title("Stack tiers"),
            S.divider(),
            S.documentTypeListItem("historyItem").title("Employment history"),
            S.documentTypeListItem("credential").title("Clearance & education"),
            S.documentTypeListItem("repo").title("Public repositories"),
            S.documentTypeListItem("shippedItem").title("Shipped (recruiter)"),
            S.documentTypeListItem("snapshotRow").title("Snapshot (recruiter)"),
            S.documentTypeListItem("endpoint").title("Contact endpoints"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Singletons are reachable from the sidebar only, so they can't be duplicated.
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETONS.includes(schemaType)),
  },

  document: {
    actions: (input, { schemaType }) =>
      SINGLETONS.includes(schemaType)
        ? input.filter(
            ({ action }) =>
              action && ["publish", "discardChanges", "restore"].includes(action),
          )
        : input,
  },
});
