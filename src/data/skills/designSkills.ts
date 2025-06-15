
// Import granular skill categories
import { uiuxSkills } from "./design/uiuxSkills";
import { graphicDesignSkills } from "./design/graphicDesignSkills";
import { Skill } from "../skillsData";

export const designSkills: Skill[] = [
  ...uiuxSkills,
  ...graphicDesignSkills
];
