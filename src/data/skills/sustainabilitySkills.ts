
import { Leaf, Sun, Wind, Recycle } from "lucide-react";
import { Skill } from "../skillsData";

export const sustainabilitySkills: Skill[] = [
  {
    id: "renewable-energy-systems",
    name: "Renewable Energy Systems",
    category: "Sustainability Technology",
    description: "Design and implementation of solar, wind, and other renewable energy solutions.",
    status: "emerging",
    relevancePeriod: "Next 20+ years",
    demandLevel: "high",
    icon: Sun,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "carbon-footprint-tracking",
    name: "Carbon Footprint Tracking",
    category: "Sustainability Technology",
    description: "Develop systems to monitor and reduce carbon emissions for businesses and individuals.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: Leaf,
    color: "from-green-600 to-emerald-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "smart-grid-technology",
    name: "Smart Grid Technology",
    category: "Sustainability Technology",
    description: "Intelligent electricity distribution networks for efficient energy management.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: Wind,
    color: "from-blue-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "9-15 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "waste-management-systems",
    name: "Waste Management Systems",
    category: "Sustainability Technology",
    description: "Digital solutions for tracking, optimizing, and reducing waste in smart cities.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Recycle,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹10-25 LPA"
  }
];
