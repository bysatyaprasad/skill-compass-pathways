
// Import granular healthcare skill categories
import { medicalTechSkills } from "./healthcare/medicalTechSkills";
import { healthcareManagementSkills } from "./healthcare/healthcareManagementSkills";
import { Skill } from "../skillsData";

export const healthcareSkills: Skill[] = [
  ...medicalTechSkills,
  ...healthcareManagementSkills
];
