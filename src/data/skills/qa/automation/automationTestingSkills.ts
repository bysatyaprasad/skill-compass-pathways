
import { Code } from "lucide-react";
import { Skill } from "../../../skillsData";

export const automationTestingSkills: Skill[] = [
  {
    id: "automation-testing",
    name: "Automation Testing",
    category: "Quality Assurance",
    description: "Using tools and scripts to automatically execute test cases, improving efficiency and coverage in software testing.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹5-12 LPA"
  },
  {
    id: "selenium",
    name: "Selenium",
    category: "Quality Assurance",
    description: "Open-source framework for automating web applications across different browsers and platforms.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹5-14 LPA"
  }
];
