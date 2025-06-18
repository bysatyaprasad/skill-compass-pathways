
import { Code } from "lucide-react";
import { Skill } from "../../../skillsData";

export const jsFrameworkSkills: Skill[] = [
  {
    id: "javascript",
    name: "JavaScript",
    category: "Programming",
    description: "Essential programming language for web development, enabling interactive and dynamic user experiences.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-yellow-500 to-orange-500",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹4-14 LPA",
    isFoundational: true
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Programming",
    description: "Typed superset of JavaScript that compiles to plain JavaScript, improving code quality and developer experience.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹6-20 LPA"
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "Programming",
    description: "Progressive JavaScript framework for building user interfaces and single-page applications.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹5-16 LPA"
  },
  {
    id: "angular",
    name: "Angular",
    category: "Programming",
    description: "Platform and framework for building single-page client applications using HTML and TypeScript.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-red-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "4-6 months",
    salary: "₹6-20 LPA"
  },
  {
    id: "svelte",
    name: "Svelte",
    category: "Programming",
    description: "Modern JavaScript framework that compiles to vanilla JavaScript, offering excellent performance.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "low",
    icon: Code,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹7-18 LPA"
  }
];
