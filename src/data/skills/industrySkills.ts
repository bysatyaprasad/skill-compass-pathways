
// Import industry-specific skill categories
import { financeSkills } from "./industry/financeSkills";
import { healthcareSkills } from "./industry/healthcareSkills";
import { educationSkills } from "./industry/educationSkills";
import { fintechSkills } from "./specialized/fintech/fintechSkills";
import { ecommerceAdvancedSkills } from "./specialized/ecommerce/ecommerceAdvancedSkills";
import { Skill } from "../skillsData";

export const industrySkills: Skill[] = [
  ...financeSkills,
  ...healthcareSkills,
  ...educationSkills,
  ...fintechSkills,
  ...ecommerceAdvancedSkills
];
