
// Import granular education skill categories
import { edTechSkills } from "./education/edTechSkills";
import { onlineLearningSkills } from "./education/onlineLearningSkills";
import { Skill } from "../skillsData";

export const educationSkills: Skill[] = [
  ...edTechSkills,
  ...onlineLearningSkills
];
