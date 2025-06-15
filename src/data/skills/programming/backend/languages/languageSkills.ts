
import { pythonSkills } from "./pythonSkills";
import { javaSkills } from "./javaSkills";
import { csharpSkills } from "./csharpSkills";
import { goSkills } from "./goSkills";
import { rustSkills } from "./rustSkills";
import { phpSkills } from "./phpSkills";
import { rubySkills } from "./rubySkills";
import { Skill } from "../../../../skillsData";

export const languageSkills: Skill[] = [
  ...pythonSkills,
  ...javaSkills,
  ...csharpSkills,
  ...goSkills,
  ...rustSkills,
  ...phpSkills,
  ...rubySkills
];
