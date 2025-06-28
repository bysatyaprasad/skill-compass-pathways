
// Import granular programming skill categories
import { frontendSkills } from "./frontendSkills";
import { backendSkills } from "./backendSkills";
import { gameDevSkills } from "./game/gameDevSkills";
import { versionControlSkills } from "./tools/versionControlSkills";
import { ormSkills } from "./database/ormSkills";
import { Skill } from "../../skillsData";

export const programmingSkills: Skill[] = [
  ...frontendSkills,
  ...backendSkills,
  ...gameDevSkills,
  ...versionControlSkills,
  ...ormSkills
];
