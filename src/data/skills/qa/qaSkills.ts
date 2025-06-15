
// Import granular QA skill categories
import { automationTestingSkills } from "./automation/automationTestingSkills";
import { manualTestingSkills } from "./manual/manualTestingSkills";
import { performanceTestingSkills } from "./performance/performanceTestingSkills";
import { securityTestingSkills } from "./security/securityTestingSkills";
import { Skill } from "../../skillsData";

export const qaSkills: Skill[] = [
  ...automationTestingSkills,
  ...manualTestingSkills,
  ...performanceTestingSkills,
  ...securityTestingSkills
];
