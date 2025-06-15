
// Import granular skill categories
import { databaseSkills } from "./data/databaseSkills";
import { analyticsSkills } from "./data/analyticsSkills";
import { dataScienceSkills } from "./data/dataScience/dataScienceSkills";
import { Skill } from "../skillsData";

export const dataSkills: Skill[] = [
  ...databaseSkills,
  ...analyticsSkills,
  ...dataScienceSkills
];
