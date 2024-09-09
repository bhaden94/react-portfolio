import blockContent from "./blockContent";
import about from "./about";
import contact from "./contact";
import education from "./education";
import experience from "./experience";

export type ImageReference = {
  _key?: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export const schemaTypes = [
  about,
  contact,
  education,
  experience,
  blockContent,
];
