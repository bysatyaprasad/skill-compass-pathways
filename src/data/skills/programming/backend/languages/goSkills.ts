
import { Code } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const goSkills: Skill[] = [
  {
    id: "golang",
    name: "Go (Golang)",
    category: "Programming",
    description: "Fast, statically typed programming language designed for building scalable backend systems.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹10-28 LPA"
  },
  {
    id: "gin-framework",
    name: "Gin Framework",
    category: "Programming",
    description: "High-performance HTTP web framework for Go programming language.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-green-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹12-30 LPA"
  }
];
