
import { Palette, Camera } from "lucide-react";
import { Skill } from "../skillsData";

export const designSkills: Skill[] = [
  {
    id: "figma",
    name: "Figma",
    category: "Design & Creative",
    description: "Collaborative design tool for creating user interfaces, prototypes, and design systems used by top companies worldwide.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    category: "Design & Creative",
    description: "Industry-standard image editing and digital art software essential for graphic design, photography, and digital marketing.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Camera,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹3-10 LPA"
  }
];
