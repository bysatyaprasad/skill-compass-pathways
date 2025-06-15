
// Import granular business skill categories
import { financeSkills } from "./finance/financeSkills";
import { managementSkills } from "./management/managementSkills";
import { businessAnalyticsSkills } from "./analytics/businessAnalyticsSkills";
import { projectManagementSkills } from "./project/projectManagementSkills";
import { Skill } from "../../skillsData";

export const businessSkills: Skill[] = [
  ...financeSkills,
  ...managementSkills,
  ...businessAnalyticsSkills,
  ...projectManagementSkills
];
