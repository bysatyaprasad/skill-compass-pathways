
import { CheckCircle, Zap, Settings, Monitor } from "lucide-react";
import { Skill } from "../../../skillsData";

export const automationTestingSkills: Skill[] = [
  {
    id: "selenium",
    name: "Selenium WebDriver",
    category: "Quality Assurance",
    description: "Web browser automation framework for testing web applications across different browsers.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: CheckCircle,
    color: "from-green-600 to-blue-600",
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
    color: "from-green-500 to-teal-500",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "playwright",
    name: "Playwright",
    category: "Quality Assurance",
    description: "Cross-browser automation library for testing modern web applications with multiple browser engines.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Settings,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "appium",
    name: "Appium",
    category: "Quality Assurance",
    description: "Open-source automation framework for testing native, hybrid, and mobile web applications.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Monitor,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "4-7 months",
    salary: "₹8-20 LPA"
  }
];
