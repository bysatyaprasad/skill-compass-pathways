
// Import granular digital marketing skill categories
import { socialMediaSkills } from "./socialMediaSkills";
import { contentMarketingSkills } from "./contentMarketingSkills";
import { Skill } from "../../../skillsData";

export const digitalMarketingSkills: Skill[] = [
  ...socialMediaSkills,
  ...contentMarketingSkills
];
