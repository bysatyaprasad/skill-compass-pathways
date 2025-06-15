
import { Palette } from "lucide-react";
import { Skill } from "../../../skillsData";

export const webDesignSkills: Skill[] = [
  {
    id: "responsive-design",
    name: "Responsive Web Design",
    category: "Design & Creative",
    description: "Designing websites that work seamlessly across all devices and screen sizes.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Palette,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "css-grid",
    name: "CSS Grid",
    category: "Design & Creative",
    description: "Advanced CSS layout system for creating complex responsive web layouts.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Palette,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹5-14 LPA"
  },
  {
    id: "css-flexbox",
    name: "CSS Flexbox",
    category: "Design & Creative",
    description: "CSS layout method for arranging elements in a flexible and responsive way.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Palette,
    color: "from-cyan-600 to-blue-600",
    difficulty: "beginner",
    timeToLearn: "1-2 months",
    salary: "₹4-12 LPA"
  }
];
