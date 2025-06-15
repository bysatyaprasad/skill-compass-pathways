
import { Database } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const oracleSkills: Skill[] = [
  {
    id: "oracle-database",
    name: "Oracle Database",
    category: "Data & Analytics",
    description: "Enterprise-grade relational database management system for large organizations.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-8 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "plsql",
    name: "PL/SQL",
    category: "Data & Analytics",
    description: "Oracle's procedural extension to SQL for database programming.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-orange-600 to-yellow-600",
    difficulty: "advanced",
    timeToLearn: "4-6 months",
    salary: "₹9-22 LPA"
  }
];
