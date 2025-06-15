
import { Database } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const sqlServerSkills: Skill[] = [
  {
    id: "sql-server",
    name: "Microsoft SQL Server",
    category: "Data & Analytics",
    description: "Enterprise-grade relational database management system by Microsoft.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "tsql",
    name: "T-SQL",
    category: "Data & Analytics",
    description: "Microsoft's extension to SQL for advanced database programming and procedures.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹7-16 LPA"
  }
];
