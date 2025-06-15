
// Import granular frontend skill categories
import { reactSkills } from "./frontend/reactSkills";
import { jsFrameworkSkills } from "./frontend/jsFrameworkSkills";
import { Skill } from "../../skillsData";

export const frontendSkills: Skill[] = [
  ...jsFrameworkSkills,
  ...reactSkills
];
