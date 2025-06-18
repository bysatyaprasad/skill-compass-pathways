
import { Database } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const postgresqlSkills: Skill[] = [
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Data & Analytics",
    description: "Advanced open-source relational database with strong standards compliance and extensibility.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "postgresql-administration",
    name: "PostgreSQL Database Administration",
    category: "Data & Analytics",
    description: "Advanced PostgreSQL administration including performance tuning, backup, and security.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹8-25 LPA"
  }
];
