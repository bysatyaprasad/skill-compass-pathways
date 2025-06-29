
// Import granular programming skill categories
import { programmingSkills as coreProgrammingSkills } from "./programming/programmingSkills";
import { graphqlSkills } from "./graphqlSkills";
import { lowCodeSkills } from "./lowCodeSkills";
import { Skill } from "../skillsData";

export const programmingSkills: Skill[] = [
  ...coreProgrammingSkills,
  ...graphqlSkills,
  ...lowCodeSkills
];
