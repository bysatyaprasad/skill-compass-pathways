
// Import granular sustainability skill categories
import { greenTechSkills } from "./sustainability/greenTechSkills";
import { environmentalSkills } from "./sustainability/environmentalSkills";
import { Skill } from "../skillsData";

export const sustainabilitySkills: Skill[] = [
  ...greenTechSkills,
  ...environmentalSkills
];
