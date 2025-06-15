
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
    description: "Java framework that simplifies the development of production-ready Spring applications.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  }
];
