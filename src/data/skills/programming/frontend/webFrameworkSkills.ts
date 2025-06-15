
import { Code } from "lucide-react";
import { Skill } from "../../../skillsData";

export const webFrameworkSkills: Skill[] = [
  {
    id: "angular",
    name: "Angular",
    category: "Programming",
    description: "Comprehensive TypeScript-based framework for building scalable web applications with powerful features and enterprise support.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-red-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "svelte",
    name: "Svelte",
    category: "Programming",
    description: "Modern framework that compiles to vanilla JavaScript, offering excellent performance and developer experience.",
    status: "emerging",
    relevancePeriod: "Next 5+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-16 LPA"
  }
];
