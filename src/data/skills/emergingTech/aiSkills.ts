
import { aiGeneralSkills } from "./ai/aiGeneralSkills";
import { machineLearningSkills } from "./ai/machineLearningSkills";
import { aiFrameworkSkills } from "./ai/frameworks/aiFrameworkSkills";
import { nlpSkills } from "./ai/nlp/nlpSkills";
import { Skill } from "../../skillsData";

export const aiSkills: Skill[] = [
  ...aiGeneralSkills,
  ...machineLearningSkills,
  ...aiFrameworkSkills,
  ...nlpSkills
];
