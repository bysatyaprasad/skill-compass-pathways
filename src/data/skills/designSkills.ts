
import { webDesignSkills } from "./design/web/webDesignSkills";
import { motionDesignSkills } from "./design/motion/motionDesignSkills";
import { Skill } from "../skillsData";

export const designSkills: Skill[] = [
  ...webDesignSkills,
  ...motionDesignSkills
];
