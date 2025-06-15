
// Import granular backend skill categories
import { serverSkills } from "./backend/serverSkills";
import { languageSkills } from "./backend/languageSkills";
import { apiSkills } from "./backend/apiSkills";
import { Skill } from "../../skillsData";

export const backendSkills: Skill[] = [
  ...languageSkills,
  ...serverSkills,
  ...apiSkills
];
