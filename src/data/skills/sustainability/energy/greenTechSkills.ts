
import { Telescope } from "lucide-react";
import { Skill } from "../../../skillsData";

export const greenTechSkills: Skill[] = [
  {
    id: "renewable-energy-systems",
    name: "Renewable Energy Systems",
    category: "Sustainability Technology",
    description: "Technologies for harnessing renewable energy sources like solar, wind, and hydroelectric power.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Telescope,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "6-9 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "energy-storage",
    name: "Energy Storage Solutions",
    category: "Sustainability Technology",
    description: "Technologies for storing renewable energy efficiently for later use.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Telescope,
    color: "from-yellow-600 to-green-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹10-25 LPA"
  }
];
