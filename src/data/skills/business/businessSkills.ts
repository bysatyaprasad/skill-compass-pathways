import { businessAnalyticsSkills } from "./analytics/businessAnalyticsSkills";
import { projectManagementSkills } from "./project/projectManagementSkills";
import { financeSkills } from "./finance/financeSkills";
import { managementSkills } from "./management/managementSkills";
import { Skill } from "../../skillsData";
import { consultingSkills } from "../consultingSkills";
import { operationsSkills } from "../operationsSkills";

export const businessSkills: Skill[] = [
  ...businessAnalyticsSkills,
  ...projectManagementSkills,
  ...financeSkills,
  ...managementSkills,
  ...consultingSkills,
  ...operationsSkills
];
