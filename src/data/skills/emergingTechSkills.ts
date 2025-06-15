
// Import granular skill categories
import { aiSkills } from "./emergingTech/aiSkills";
import { securitySkills } from "./emergingTech/securitySkills";
import { cloudSkills } from "./emergingTech/cloudSkills";
import { Skill } from "../skillsData";

export const emergingTechSkills: Skill[] = [
  ...aiSkills,
  ...securitySkills,
  ...cloudSkills
];
