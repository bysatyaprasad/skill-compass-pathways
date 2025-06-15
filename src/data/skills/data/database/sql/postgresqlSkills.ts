
import { Database } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const postgresqlSkills: Skill[] = [
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Data & Analytics",
    description: "Advanced open-source relational database with powerful features for complex applications.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "oracle-database",
    name: "Oracle Database",
    category: "Data & Analytics",
    description: "Enterprise-grade relational database management system widely used in large organizations.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-8 months",
    salary: "₹8-22 LPA"
  }
];
