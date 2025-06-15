
// Import granular mobile skill categories
import { crossPlatformSkills } from "./crossPlatform/crossPlatformSkills";
import { nativeMobileSkills } from "./native/nativeMobileSkills";
import { Skill } from "../../skillsData";

export const mobileSkills: Skill[] = [
  ...crossPlatformSkills,
  ...nativeMobileSkills
];
