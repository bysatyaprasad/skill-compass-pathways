
// Import granular skill categories
import { uiuxSkills } from "./design/uiuxSkills";
import { graphicDesignSkills } from "./design/graphicDesignSkills";
import { webDesignSkills } from "./design/web/webDesignSkills";
import { motionDesignSkills } from "./design/motion/motionDesignSkills";
import { Skill } from "../skillsData";

export const designSkills: Skill[] = [
  ...uiuxSkills,
  ...graphicDesignSkills,
  ...webDesignSkills,
  ...motionDesignSkills
];
