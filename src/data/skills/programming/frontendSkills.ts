
import { Code } from "lucide-react";
import { Skill } from "../../skillsData";

export const frontendSkills: Skill[] = [
  {
    id: "javascript",
    name: "JavaScript",
    category: "Programming",
    description: "The essential language for web development, enabling interactive websites and modern applications across frontend and backend.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-yellow-500 to-orange-500",
    difficulty: "beginner",
    timeToLearn: "3-4 months",
    salary: "₹4-12 LPA", 
    isFoundational: true
  },
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
    id: "typescript",
    name: "TypeScript",
    category: "Programming",
    description: "Typed superset of JavaScript that improves code quality and developer experience in large applications.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-blue-600 to-indigo-500",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹8-20 LPA"
  }
];
