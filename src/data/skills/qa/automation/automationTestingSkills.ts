
import { Code, Zap, Target, CheckCircle } from "lucide-react";
import { Skill } from "../../../skillsData";

export const automationTestingSkills: Skill[] = [
  {
    id: "selenium",
    name: "Selenium WebDriver",
    category: "Quality Assurance",
    description: "Web application testing framework for automating browser interactions across platforms.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-green-600 to-emerald-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "cypress",
    name: "Cypress",
    category: "Quality Assurance",
    description: "Modern end-to-end testing framework for web applications with real-time browser testing.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-cyan-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "playwright",
    name: "Playwright",
    category: "Quality Assurance",
    description: "Cross-browser automation library for reliable end-to-end testing of web applications.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Target,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "jest",
    name: "Jest Testing Framework",
    category: "Quality Assurance",
    description: "JavaScript testing framework with built-in assertions, mocking, and code coverage.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "high",
    icon: CheckCircle,
    color: "from-red-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "appium",
    name: "Appium",
    category: "Quality Assurance",
    description: "Cross-platform mobile app automation testing framework for iOS and Android.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-blue-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "4-6 months",
    salary: "₹8-22 LPA"
  }
];
