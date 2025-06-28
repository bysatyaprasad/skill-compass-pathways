
import { businessAnalyticsSkills } from "./analytics/businessAnalyticsSkills";
import { projectManagementSkills } from "./project/projectManagementSkills";
import { financeSkills } from "./finance/financeSkills";
import { managementSkills } from "./management/managementSkills";
import { Skill } from "../../skillsData";

export const businessSkills: Skill[] = [
  ...businessAnalyticsSkills,
  ...projectManagementSkills,
  ...financeSkills,
  ...managementSkills
];
