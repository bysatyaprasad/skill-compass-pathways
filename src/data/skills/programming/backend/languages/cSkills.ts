
import { Code, Zap } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const cSkills: Skill[] = [
  {
    id: "c-programming",
    name: "C Programming",
    category: "Programming",
    description: "Foundational programming language for system programming and embedded systems development.",
    status: "stable",
    relevancePeriod: "Next 20+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-gray-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹5-18 LPA"
  },
  {
    id: "embedded-c",
    name: "Embedded C",
    category: "Programming",
    description: "C programming for microcontrollers and embedded systems development.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹8-22 LPA"
  }
];
