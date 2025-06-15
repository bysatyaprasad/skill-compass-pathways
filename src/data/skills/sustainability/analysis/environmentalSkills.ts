
import { Telescope } from "lucide-react";
import { Skill } from "../../../skillsData";

export const environmentalSkills: Skill[] = [
  {
    id: "environmental-monitoring",
    name: "Environmental Monitoring",
    category: "Sustainability Technology",
    description: "Technologies and methods for tracking environmental conditions and pollution levels.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Telescope,
    color: "from-blue-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "carbon-footprint-analysis",
    name: "Carbon Footprint Analysis",
    category: "Sustainability Technology",
    description: "Methodologies for measuring and analyzing carbon emissions and environmental impact.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Telescope,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹7-18 LPA"
  }
];
