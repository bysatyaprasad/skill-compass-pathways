
import { mongodbSkills } from "./nosql/mongodbSkills";
import { redisSkills } from "./nosql/redisSkills";
import { elasticsearchSkills } from "./nosql/elasticsearchSkills";
import { cassandraSkills } from "./nosql/cassandraSkills";
import { Skill } from "../../../skillsData";

export const nosqlSkills: Skill[] = [
  ...mongodbSkills,
  ...redisSkills,
  ...elasticsearchSkills,
  ...cassandraSkills
];
