
// Import solution-based skill categories
import { webSolutionsSkills } from "./solutions/webSolutionsSkills";
import { businessSolutionsSkills } from "./solutions/businessSolutionsSkills";
import { mobileSolutionsSkills } from "./solutions/mobileSolutionsSkills";
import { dataAnalyticsSolutionsSkills } from "./solutions/dataAnalyticsSolutionsSkills";
import { automationSolutionsSkills } from "./solutions/automationSolutionsSkills";
import { digitalTransformationSkills } from "./solutions/digitalTransformationSkills";
import { Skill } from "../skillsData";

export const solutionsSkills: Skill[] = [
  ...webSolutionsSkills,
  ...businessSolutionsSkills,
  ...mobileSolutionsSkills,
  ...dataAnalyticsSolutionsSkills,
  ...automationSolutionsSkills,
  ...digitalTransformationSkills
];
