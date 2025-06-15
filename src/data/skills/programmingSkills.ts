
// Import granular skill categories
import { frontendSkills } from "./programming/frontendSkills";
import { backendSkills } from "./programming/backendSkills";
import { Skill } from "../skillsData";

export const programmingSkills: Skill[] = [
  ...frontendSkills,
  ...backendSkills
];
