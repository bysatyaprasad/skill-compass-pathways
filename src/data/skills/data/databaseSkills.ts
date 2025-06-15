
// Import granular database skill categories
import { sqlSkills } from "./database/sqlSkills";
import { nosqlSkills } from "./database/nosqlSkills";
import { Skill } from "../../skillsData";

export const databaseSkills: Skill[] = [
  ...sqlSkills,
  ...nosqlSkills
];
