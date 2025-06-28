
import { webDesignSkills } from "./design/web/webDesignSkills";
import { motionDesignSkills } from "./design/motion/motionDesignSkills";
import { contentCreationSkills } from "./media/contentCreationSkills";
import { uxuiSkills } from "./design/uxuiSkills";
import { Skill } from "../skillsData";

export const designSkills: Skill[] = [
  ...webDesignSkills,
  ...motionDesignSkills,
  ...contentCreationSkills,
  ...uxuiSkills
];
