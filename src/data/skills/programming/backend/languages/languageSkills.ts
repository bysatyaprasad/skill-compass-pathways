
import { pythonSkills } from "./pythonSkills";
import { javaSkills } from "./javaSkills";
import { Skill } from "../../../../skillsData";

export const languageSkills: Skill[] = [
  ...pythonSkills,
  ...javaSkills
];
