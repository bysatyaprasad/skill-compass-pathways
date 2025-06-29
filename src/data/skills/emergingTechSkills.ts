// Import granular skill categories
import { aiSkills } from "./emergingTech/aiSkills";
import { securitySkills } from "./emergingTech/securitySkills";
import { cloudSkills } from "./emergingTech/cloudSkills";
import { iotSkills } from "./emergingTech/iot/iotSkills";
import { devopsSkills } from "./devops/devopsSkills";
import { networkingSkills } from "./networking/networkingSkills";
import { vrSkills } from "./emerging/vr/vrSkills";
import { blockchainSkills } from "./blockchain/blockchainSkills";
import { cybersecuritySkills } from "./security/cybersecuritySkills";
import { advancedIoTSkills } from "./iot/advancedIoTSkills";
import { devopsAdvancedSkills } from "./devops/devopsAdvancedSkills";
import { securityAdvancedSkills } from "./security/securityAdvancedSkills";
import { metaverseSkills } from "./metaverseSkills";
import { edgeComputingSkills } from "./edgeComputingSkills";
import { Skill } from "../skillsData";

export const emergingTechSkills: Skill[] = [
  ...aiSkills,
  ...securitySkills,
  ...cloudSkills,
  ...iotSkills,
  ...devopsSkills,
  ...networkingSkills,
  ...vrSkills,
  ...blockchainSkills,
  ...cybersecuritySkills,
  ...advancedIoTSkills,
  ...devopsAdvancedSkills,
  ...securityAdvancedSkills,
  ...metaverseSkills,
  ...edgeComputingSkills
];
