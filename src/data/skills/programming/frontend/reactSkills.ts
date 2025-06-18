
import { Code } from "lucide-react";
import { Skill } from "../../../skillsData";

export const reactSkills: Skill[] = [
  {
    id: "react",
    name: "React",
    category: "Programming",
    description: "Popular JavaScript library for building user interfaces, especially single-page applications with reusable components.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Programming",
    description: "React framework for production with server-side rendering, static site generation, and full-stack capabilities.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-gray-600 to-black",
    difficulty: "advanced",
    timeToLearn: "4-6 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "react-native",
    name: "React Native",
    category: "Mobile Development",
    description: "Cross-platform framework for building native mobile apps using React.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹7-18 LPA"
  }
];
