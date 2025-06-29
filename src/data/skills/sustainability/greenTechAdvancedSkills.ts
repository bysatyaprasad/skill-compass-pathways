
import { Leaf, Zap, Recycle, Sun } from "lucide-react";
import { Skill } from "../../skillsData";

export const greenTechAdvancedSkills: Skill[] = [
  {
    id: "carbon-footprint-analysis",
    name: "Carbon Footprint Analysis",
    category: "Green Technology",
    description: "Measuring and analyzing carbon emissions for businesses and digital products.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Leaf,
    color: "from-green-600 to-emerald-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "green-software-development",
    name: "Green Software Development",
    category: "Green Technology",
    description: "Building energy-efficient software and optimizing code for minimal environmental impact.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-yellow-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹9-22 LPA"
  },
  {
    id: "renewable-energy-systems",
    name: "Renewable Energy Management",
    category: "Green Technology",
    description: "Software systems for managing solar, wind, and other renewable energy sources.",
    status: "emerging",
    relevancePeriod: "Next 20+ years",
    demandLevel: "high",
    icon: Sun,
    color: "from-orange-600 to-yellow-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "waste-management-tech",
    name: "Smart Waste Management",
    category: "Green Technology",
    description: "IoT and AI solutions for optimizing waste collection and recycling processes.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Recycle,
    color: "from-teal-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹10-24 LPA"
  }
];
