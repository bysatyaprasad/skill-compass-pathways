
import { Code } from "lucide-react";
import { Skill } from "../../../skillsData";

export const manualTestingSkills: Skill[] = [
  {
    id: "manual-testing",
    name: "Manual Testing",
    category: "Quality Assurance",
    description: "Systematic process of manually testing software applications to identify bugs and ensure quality standards.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-gray-600 to-blue-600",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹3-8 LPA"
  },
  {
    id: "api-testing",
    name: "API Testing",
    category: "Quality Assurance",
    description: "Testing application programming interfaces to ensure data exchange between software components works correctly.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-purple-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-15 LPA"
  }
];
