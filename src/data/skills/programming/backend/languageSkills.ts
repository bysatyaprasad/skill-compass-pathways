
import { Code } from "lucide-react";
import { Skill } from "../../../skillsData";

export const languageSkills: Skill[] = [
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
    id: "java",
    name: "Java",
    category: "Programming",
    description: "Enterprise-grade programming language used for building large-scale applications and Android development.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-red-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-18 LPA"
  }
];
