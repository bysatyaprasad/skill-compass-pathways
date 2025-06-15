
import { Code } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const phpSkills: Skill[] = [
  {
    id: "php",
    name: "PHP",
    category: "Programming",
    description: "Server-side scripting language widely used for web development and backend systems.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-indigo-600 to-purple-600",
    difficulty: "beginner",
    timeToLearn: "3-4 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "Programming",
    description: "Elegant PHP framework for web artisans with expressive, beautiful syntax.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-red-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "symfony",
    name: "Symfony",
    category: "Programming",
    description: "PHP framework and set of reusable components for building web applications.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-gray-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "5-7 months",
    salary: "₹7-18 LPA"
  }
];
