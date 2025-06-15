
import { postgresqlSkills } from "./postgresqlSkills";
import { mysqlSkills } from "./mysqlSkills";
import { sqlServerSkills } from "./sqlServerSkills";
import { oracleSkills } from "./oracleSkills";
import { Skill } from "../../../../skillsData";

export const sqlSkills: Skill[] = [
  ...postgresqlSkills,
  ...mysqlSkills,
  ...sqlServerSkills,
  ...oracleSkills
];
