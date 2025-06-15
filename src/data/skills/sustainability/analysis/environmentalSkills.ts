
import { BarChart3 } from "lucide-react";
import { Skill } from "../../../skillsData";

export const environmentalSkills: Skill[] = [
  {
    id: "carbon-footprint-analysis",
    name: "Carbon Footprint Analysis",
    category: "Sustainability Technology",
    description: "Measurement and analysis of greenhouse gas emissions to help organizations reduce their environmental impact.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹5-15 LPA"
  },
  {
    id: "environmental-impact-assessment",
    name: "Environmental Impact Assessment",
    category: "Sustainability Technology",
    description: "Evaluating the environmental consequences of proposed projects and development activities.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-emerald-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "5-7 months",
    salary: "₹6-16 LPA"
  }
];
