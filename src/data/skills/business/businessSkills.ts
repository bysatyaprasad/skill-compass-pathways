
// Import granular business skill categories
import { financeSkills } from "./finance/financeSkills";
import { managementSkills } from "./management/managementSkills";
import { Skill } from "../../skillsData";

export const businessSkills: Skill[] = [
  ...financeSkills,
  ...managementSkills
];
