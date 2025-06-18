
import { Code } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const javaSkills: Skill[] = [
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
  },
  {
    id: "spring-boot",
    name: "Spring Boot",
    category: "Programming",
    description: "Java framework for creating production-ready applications with minimal configuration.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-green-600 to-emerald-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "spring-framework",
    name: "Spring Framework",
    category: "Programming",
    description: "Comprehensive programming and configuration model for modern Java-based enterprise applications.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-teal-600 to-green-600",
    difficulty: "advanced",
    timeToLearn: "6-8 months",
    salary: "₹10-25 LPA"
  }
];
