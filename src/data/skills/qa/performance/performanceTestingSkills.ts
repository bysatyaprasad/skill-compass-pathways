
import { BarChart3 } from "lucide-react";
import { Skill } from "../../../skillsData";

export const performanceTestingSkills: Skill[] = [
  {
    id: "load-testing",
    name: "Load Testing",
    category: "Quality Assurance",
    description: "Testing application performance under expected user loads and traffic.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "jmeter",
    name: "Apache JMeter",
    category: "Quality Assurance",
    description: "Open-source tool for performance testing and load testing applications.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-red-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹5-14 LPA"
  },
  {
    id: "gatling",
    name: "Gatling",
    category: "Quality Assurance",
    description: "High-performance load testing framework for web applications.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-purple-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹7-16 LPA"
  }
];
