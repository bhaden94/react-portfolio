import {
  SanityImageAsset,
  SanityImageSource,
  tryGetImageAsset,
} from "@sanity/asset-utils";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "./sanityConstants";

export type ImageReference = {
  _key?: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export const getImageFromRef = (
  imageRef?: ImageReference | SanityImageSource | null,
): SanityImageAsset | undefined => {
  return (
    imageRef &&
    tryGetImageAsset(imageRef, {
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
    })
  );
};
