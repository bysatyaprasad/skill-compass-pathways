
import { nativeMobileSkills } from "./native/nativeMobileSkills";
import { crossPlatformSkills } from "./crossPlatform/crossPlatformSkills";
import { Skill } from "../../skillsData";

export const mobileSkills: Skill[] = [
  ...nativeMobileSkills,
  ...crossPlatformSkills
];
