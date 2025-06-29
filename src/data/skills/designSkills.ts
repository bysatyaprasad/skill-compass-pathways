
// Import granular design skill categories
import { graphicDesignSkills } from "./design/graphicDesignSkills";
import { uiuxSkills } from "./design/uiuxSkills";
import { webDesignSkills } from "./design/web/webDesignSkills";
import { motionDesignSkills } from "./design/motion/motionDesignSkills";
import { contentCreationSkills } from "./media/contentCreationSkills";
import { audioVideoSkills } from "./media/audioVideoSkills";
import { Skill } from "../skillsData";

export const designSkills: Skill[] = [
  ...graphicDesignSkills,
  ...uiuxSkills,
  ...webDesignSkills,
  ...motionDesignSkills,
  ...contentCreationSkills,
  ...audioVideoSkills
];
