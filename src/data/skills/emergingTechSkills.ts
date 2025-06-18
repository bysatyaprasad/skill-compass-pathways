
// Import granular skill categories
import { aiSkills } from "./emergingTech/aiSkills";
import { securitySkills } from "./emergingTech/securitySkills";
import { cloudSkills } from "./emergingTech/cloudSkills";
import { iotSkills } from "./emergingTech/iot/iotSkills";
import { devopsSkills } from "./devops/devopsSkills";
import { networkingSkills } from "./networking/networkingSkills";
import { vrSkills } from "./emerging/vr/vrSkills";
import { Skill } from "../skillsData";

export const emergingTechSkills: Skill[] = [
  ...aiSkills,
  ...securitySkills,
  ...cloudSkills,
  ...iotSkills,
  ...devopsSkills,
  ...networkingSkills,
  ...vrSkills
];
