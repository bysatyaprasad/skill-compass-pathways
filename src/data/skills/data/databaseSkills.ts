
import { sqlSkills } from "./database/sql/sqlSkills";
import { nosqlSkills } from "./database/nosql/nosqlSkills";
import { Skill } from "../../skillsData";

export const databaseSkills: Skill[] = [
  ...sqlSkills,
  ...nosqlSkills
];
