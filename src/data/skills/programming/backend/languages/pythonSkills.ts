
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
    name: "Django Framework",
    category: "Programming",
    description: "High-level Python web framework for rapid development of secure and maintainable websites.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹7-20 LPA"
  },
  {
    id: "flask",
    name: "Flask Framework",
    category: "Programming",
    description: "Lightweight Python web framework for building APIs and web applications with flexibility.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Programming",
    description: "Modern, fast web framework for building APIs with Python based on standard Python type hints.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-22 LPA"
  }
];
