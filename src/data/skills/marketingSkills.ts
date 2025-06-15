
// Import granular skill categories
import { digitalMarketingSkills } from "./marketing/digital/digitalMarketingSkills";
import { marketingAnalyticsSkills } from "./marketing/analytics/marketingAnalyticsSkills";
import { Skill } from "../skillsData";

export const marketingSkills: Skill[] = [
  ...digitalMarketingSkills,
  ...marketingAnalyticsSkills
];
