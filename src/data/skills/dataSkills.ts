// Import granular skill categories
import { analyticsSkills } from "./data/analyticsSkills";
import { databaseSkills } from "./data/databaseSkills";
import { businessAnalyticsSkills } from "./analytics/business/businessAnalyticsSkills";
import { advancedDatabaseSkills } from "./database/database/advancedDatabaseSkills";
import { dataScienceSkills } from "./data/dataScienceSkills";
import { bigDataAdvancedSkills } from "./data/bigData/bigDataAdvancedSkills";
import { businessIntelligenceSkills } from "./data/analytics/business/businessIntelligenceSkills";
import { Skill } from "../skillsData";

export const dataSkills: Skill[] = [
  ...analyticsSkills,
  ...databaseSkills,
  ...businessAnalyticsSkills,
  ...advancedDatabaseSkills,
  ...dataScienceSkills,
  ...bigDataAdvancedSkills,
  ...businessIntelligenceSkills
];
