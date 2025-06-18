
import { businessAnalyticsSkills } from "./analytics/businessAnalyticsSkills";
import { projectManagementSkills } from "./project/projectManagementSkills";
import { Skill } from "../../skillsData";

export const businessSkills: Skill[] = [
  ...businessAnalyticsSkills,
  ...projectManagementSkills
];
