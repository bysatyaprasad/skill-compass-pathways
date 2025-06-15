
// Import granular QA skill categories
import { automationTestingSkills } from "./automation/automationTestingSkills";
import { manualTestingSkills } from "./manual/manualTestingSkills";
import { Skill } from "../../skillsData";

export const qaSkills: Skill[] = [
  ...automationTestingSkills,
  ...manualTestingSkills
];
