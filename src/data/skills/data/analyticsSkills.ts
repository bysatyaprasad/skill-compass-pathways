
import { analyticsSkills as coreAnalyticsSkills } from "./analytics/analytics/analyticsSkills";
import { businessIntelligenceSkills } from "./analytics/business/businessIntelligenceSkills";
import { Skill } from "../../skillsData";

export const analyticsSkills: Skill[] = [
  ...coreAnalyticsSkills,
  ...businessIntelligenceSkills
];
