
import { Database } from "lucide-react";
import { Skill } from "../../../skillsData";

export const ormSkills: Skill[] = [
  {
    id: "prisma",
    name: "Prisma",
    category: "Programming",
    description: "Modern database toolkit and ORM for Node.js and TypeScript applications.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹8-18 LPA"
  },
  {
    id: "sequelize",
    name: "Sequelize",
    category: "Programming",
    description: "Promise-based ORM for Node.js supporting multiple SQL databases.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹7-16 LPA"
  },
  {
    id: "mongoose",
    name: "Mongoose",
    category: "Programming",
    description: "MongoDB object modeling library for Node.js applications.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-green-600 to-emerald-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹6-15 LPA"
  }
];
