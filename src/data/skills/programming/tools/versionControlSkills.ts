
import { Code } from "lucide-react";
import { Skill } from "../../../skillsData";

export const versionControlSkills: Skill[] = [
  {
    id: "git",
    name: "Git",
    category: "Programming",
    description: "Distributed version control system for tracking changes in source code during development.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-orange-600 to-red-600",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹4-12 LPA",
    isFoundational: true
  },
  {
    id: "github",
    name: "GitHub",
    category: "Programming",
    description: "Web-based platform for version control and collaboration using Git.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-gray-800 to-gray-600",
    difficulty: "beginner",
    timeToLearn: "1-2 months",
    salary: "₹4-12 LPA",
    isFoundational: true
  },
  {
    id: "gitlab",
    name: "GitLab",
    category: "Programming",
    description: "DevOps platform with integrated CI/CD, version control, and project management.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹6-15 LPA"
  }
];
