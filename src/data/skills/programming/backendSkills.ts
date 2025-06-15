
import { Code } from "lucide-react";
import { Skill } from "../../skillsData";

export const backendSkills: Skill[] = [
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
    id: "nodejs",
    name: "Node.js",
    category: "Programming",
    description: "JavaScript runtime for server-side development, enabling full-stack JavaScript applications with high performance.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-green-600 to-green-400",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹7-16 LPA"
  }
];
