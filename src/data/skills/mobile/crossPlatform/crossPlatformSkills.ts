
import { Smartphone } from "lucide-react";
import { Skill } from "../../../skillsData";

export const crossPlatformSkills: Skill[] = [
  {
    id: "react-native",
    name: "React Native",
    category: "Mobile Development",
    description: "Cross-platform framework for building native mobile apps using React, enabling code sharing between iOS and Android.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹7-18 LPA"
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "Mobile Development",
    description: "Google's UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-blue-500 to-indigo-500",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-16 LPA"
  }
];
