
import { Code } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const pythonSkills: Skill[] = [
  {
    id: "python",
    name: "Python",
    category: "Programming",
    description: "Versatile programming language excellent for beginners, widely used in web development, data science, AI, and automation.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-blue-500 to-green-500",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹5-15 LPA",
    isFoundational: true
  },
  {
    id: "django",
    name: "Django",
    category: "Programming",
    description: "High-level Python web framework that encourages rapid development and clean, pragmatic design.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-green-600 to-emerald-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹7-18 LPA"
  },
  {
    id: "flask",
    name: "Flask",
    category: "Programming",
    description: "Lightweight Python web framework that provides flexibility for building web applications.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-gray-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹6-16 LPA"
  }
];
