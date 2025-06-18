
// Import granular skill categories
import { frontendSkills } from "./programming/frontendSkills";
import { backendSkills } from "./programming/backendSkills";
import { versionControlSkills } from "./programming/tools/versionControlSkills";
import { ormSkills } from "./programming/database/ormSkills";
import { gameDevSkills } from "./programming/game/gameDevSkills";
import { frontendArchitectureSkills } from "./frontend/advanced/frontendArchitectureSkills";
import { Skill } from "../skillsData";

export const programmingSkills: Skill[] = [
  ...frontendSkills,
  ...backendSkills,
  ...versionControlSkills,
  ...ormSkills,
  ...gameDevSkills,
  ...frontendArchitectureSkills
];
