
import { Zap, BarChart3, Monitor, Activity } from "lucide-react";
import { Skill } from "../../../skillsData";

export const performanceTestingSkills: Skill[] = [
  {
    id: "jmeter",
    name: "Apache JMeter",
    category: "Quality Assurance",
    description: "Load testing tool for analyzing and measuring performance of web applications and services.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "loadrunner",
    name: "LoadRunner",
    category: "Quality Assurance",
    description: "Enterprise performance testing tool for load testing applications under various load conditions.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "4-8 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "gatling",
    name: "Gatling",
    category: "Quality Assurance",
    description: "High-performance load testing framework designed for ease of use and high performance.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "low",
    icon: Activity,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹12-28 LPA"
  }
];
