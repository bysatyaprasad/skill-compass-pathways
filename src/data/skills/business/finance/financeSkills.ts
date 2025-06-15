
import { BarChart3 } from "lucide-react";
import { Skill } from "../../../skillsData";

export const financeSkills: Skill[] = [
  {
    id: "financial-modeling",
    name: "Financial Modeling",
    category: "Business & Finance",
    description: "Building mathematical models to represent financial performance and make informed business decisions and valuations.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-emerald-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "investment-analysis",
    name: "Investment Analysis",
    category: "Business & Finance",
    description: "Evaluating investment opportunities and financial instruments to make informed investment decisions.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-blue-600 to-emerald-600",
    difficulty: "advanced",
    timeToLearn: "6-8 months",
    salary: "₹8-25 LPA"
  }
];
