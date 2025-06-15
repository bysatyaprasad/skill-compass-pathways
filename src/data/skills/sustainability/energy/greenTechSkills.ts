
import { Globe } from "lucide-react";
import { Skill } from "../../../skillsData";

export const greenTechSkills: Skill[] = [
  {
    id: "renewable-energy-systems",
    name: "Renewable Energy Systems",
    category: "Sustainability Technology",
    description: "Design and implementation of solar, wind, and other renewable energy solutions for sustainable power generation.",
    status: "emerging",
    relevancePeriod: "Next 20+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-green-500 to-emerald-500",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "smart-grid-technology",
    name: "Smart Grid Technology",
    category: "Sustainability Technology",
    description: "Advanced electrical grid systems that use digital technology for efficient energy distribution and management.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-blue-500 to-green-500",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹9-24 LPA"
  }
];
