
import { Database } from "lucide-react";
import { Skill } from "../../../../skillsData";
import { postgresqlSkills } from "./postgresqlSkills";

export const sqlSkills: Skill[] = [
  {
    id: "sql",
    name: "SQL",
    category: "Data & Analytics",
    description: "Standard language for managing and querying databases, essential for any role involving data analysis or backend development.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹4-12 LPA",
    isFoundational: true
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Data & Analytics",
    description: "Popular open-source relational database management system used by millions of applications worldwide.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-blue-600 to-orange-500",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹4-12 LPA"
  },
  ...postgresqlSkills
];
