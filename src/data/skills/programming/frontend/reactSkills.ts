
import { Code } from "lucide-react";
import { Skill } from "../../../skillsData";

export const reactSkills: Skill[] = [
  {
    id: "react",
    name: "React",
    category: "Programming",
    description: "Popular JavaScript library for building user interfaces, essential for modern frontend development with component-based architecture.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Programming",
    description: "React framework for production-grade applications with server-side rendering and static site generation.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-gray-800 to-gray-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-20 LPA"
  }
];
