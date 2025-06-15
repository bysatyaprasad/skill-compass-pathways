
import { serverSkills } from "./backend/serverSkills";
import { languageSkills } from "./backend/languages/languageSkills";
import { apiSkills } from "./backend/apiSkills";
import { Skill } from "../../skillsData";

export const backendSkills: Skill[] = [
  ...languageSkills,
  ...serverSkills,
  ...apiSkills
];
