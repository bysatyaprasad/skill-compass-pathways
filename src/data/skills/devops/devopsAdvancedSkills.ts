
import { containerizationSkills } from "./containerization/containerizationSkills";
import { cicdSkills } from "./cicd/cicdSkills";
import { monitoringSkills } from "./monitoring/monitoringSkills";
import { infrastructureSkills } from "./infrastructure/infrastructureSkills";
import { Skill } from "../../skillsData";

export const devopsAdvancedSkills: Skill[] = [
  ...containerizationSkills,
  ...cicdSkills,
  ...monitoringSkills,
  ...infrastructureSkills
];
