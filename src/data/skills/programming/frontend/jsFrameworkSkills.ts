
import { Code } from "lucide-react";
import { Skill } from "../../../skillsData";

export const jsFrameworkSkills: Skill[] = [
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
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "Programming",
    description: "Progressive JavaScript framework for building user interfaces with gentle learning curve and powerful features.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    difficulty: "beginner",
    timeToLearn: "3-4 months",
    salary: "₹5-15 LPA"
  }
];
