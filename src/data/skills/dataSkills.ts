
import { Database, BarChart3 } from "lucide-react";
import { Skill } from "../skillsData";

export const dataSkills: Skill[] = [
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
    id: "excel",
    name: "Excel",
    category: "Data & Analytics",
    description: "Powerful spreadsheet tool for data analysis, financial modeling, and business intelligence - a must-have business skill.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-green-500 to-emerald-500",
    difficulty: "beginner",
    timeToLearn: "1-2 months",
    salary: "₹3-10 LPA",
    isFoundational: true
  },
  {
    id: "tableau",
    name: "Tableau",
    category: "Data & Analytics",
    description: "Leading data visualization platform that transforms raw data into interactive, insightful dashboards and reports.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹6-15 LPA"
  },
  {
    id: "powerbi",
    name: "Power BI",
    category: "Data & Analytics",
    description: "Microsoft's business intelligence platform for creating interactive reports and dashboards from various data sources.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-yellow-500 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹5-14 LPA"
  },
  {
    id: "r-programming",
    name: "R Programming",
    category: "Data & Analytics",
    description: "Statistical programming language excellent for data analysis, statistical modeling, and research in academia and industry.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-16 LPA"
  }
];
