import blockContent from "./blockContent";
import about from "./about";
import contact from "./contact";
import education from "./education";
import experience from "./experience";
import technology from "./technology";
import project from "./project";
import skill from "./skill";
import theme from "./theme/theme";
import themePalette from "./theme/themePalette";
import color from "./theme/color";

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
  skill,
  project,
  experience,
  education,
  contact,
  theme,
  themePalette,
  color,
  technology,
  blockContent,
];
