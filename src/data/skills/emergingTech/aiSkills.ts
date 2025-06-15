
// Import granular AI skill categories
import { machineLearningSkills } from "./ai/machineLearningSkills";
import { aiGeneralSkills } from "./ai/aiGeneralSkills";
import { Skill } from "../../skillsData";

export const aiSkills: Skill[] = [
  ...aiGeneralSkills,
  ...machineLearningSkills
];
