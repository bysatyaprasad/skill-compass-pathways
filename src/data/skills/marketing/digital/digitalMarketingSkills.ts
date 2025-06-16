
import { socialMediaSkills } from "./socialMediaSkills";
import { contentMarketingSkills } from "./contentMarketingSkills";
import { seoSkills } from "./seo/seoSkills";
import { Skill } from "../../../skillsData";

export const digitalMarketingSkills: Skill[] = [
  ...socialMediaSkills,
  ...contentMarketingSkills,
  ...seoSkills
];
