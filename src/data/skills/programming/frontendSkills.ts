
// Import granular frontend skill categories
import { reactSkills } from "./frontend/reactSkills";
import { jsFrameworkSkills } from "./frontend/jsFrameworkSkills";
import { webFrameworkSkills } from "./frontend/webFrameworkSkills";
import { cssFrameworkSkills } from "./frontend/cssFrameworkSkills";
import { Skill } from "../../skillsData";

export const frontendSkills: Skill[] = [
  ...jsFrameworkSkills,
  ...reactSkills,
  ...webFrameworkSkills,
  ...cssFrameworkSkills
];
