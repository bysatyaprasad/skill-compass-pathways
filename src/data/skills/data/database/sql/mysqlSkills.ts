
import { Database } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const mysqlSkills: Skill[] = [
  {
    id: "mysql",
    name: "MySQL",
    category: "Data & Analytics",
    description: "Popular open-source relational database management system used worldwide.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-blue-600 to-orange-600",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "mysql-optimization",
    name: "MySQL Performance Tuning",
    category: "Data & Analytics",
    description: "Advanced techniques for optimizing MySQL database performance and queries.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  }
];
