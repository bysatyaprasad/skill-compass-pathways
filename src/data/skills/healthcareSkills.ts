
// Import granular skill categories
import { healthcareManagementSkills } from "./healthcare/management/healthcareManagementSkills";
import { medicalTechSkills } from "./healthcare/medical/medicalTechSkills";
import { advancedHealthcareSkills } from "./healthcare/advancedHealthcareSkills";
import { Skill } from "../skillsData";

export const healthcareSkills: Skill[] = [
  ...healthcareManagementSkills,
  ...medicalTechSkills,
  ...advancedHealthcareSkills
];
