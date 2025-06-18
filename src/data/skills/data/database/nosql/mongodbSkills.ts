
import { Database } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const mongodbSkills: Skill[] = [
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Data & Analytics",
    description: "NoSQL document database for modern applications with flexible schema and horizontal scaling.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "mongoose",
    name: "Mongoose ODM",
    category: "Data & Analytics",
    description: "Object modeling library for MongoDB and Node.js providing schema validation and middleware.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-teal-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹6-16 LPA"
  }
];
