
import { BarChart3 } from "lucide-react";
import { Skill } from "../../../skillsData";

export const analyticsSkills: Skill[] = [
  {
    id: "data-analysis",
    name: "Data Analysis",
    category: "Data & Analytics",
    description: "Process of inspecting, cleaning, transforming, and modeling data to discover useful information and insights.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-blue-500 to-purple-500",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-16 LPA",
    isFoundational: true
  },
  {
    id: "tableau",
    name: "Tableau",
    category: "Data & Analytics",
    description: "Leading data visualization tool that helps people see and understand their data through interactive dashboards.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹7-18 LPA"
  },
  {
    id: "power-bi",
    name: "Power BI",
    category: "Data & Analytics",
    description: "Microsoft's business analytics tool that provides interactive visualizations and business intelligence capabilities.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-yellow-500 to-orange-500",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹6-15 LPA"
  }
];
