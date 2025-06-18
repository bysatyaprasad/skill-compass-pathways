
import { Search, FileText, Bug, Shield } from "lucide-react";
import { Skill } from "../../../skillsData";

export const manualTestingSkills: Skill[] = [
  {
    id: "manual-testing",
    name: "Manual Software Testing",
    category: "Quality Assurance",
    description: "Systematic testing approach to find bugs and ensure software quality through human interaction.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Search,
    color: "from-blue-600 to-purple-600",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹3-12 LPA"
  },
  {
    id: "test-case-design",
    name: "Test Case Design & Documentation",
    category: "Quality Assurance",
    description: "Creating comprehensive test scenarios and documentation for systematic testing processes.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: FileText,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹4-14 LPA"
  },
  {
    id: "bug-tracking",
    name: "Bug Tracking & Reporting",
    category: "Quality Assurance",
    description: "Identifying, documenting, and tracking software defects through their lifecycle.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Bug,
    color: "from-red-600 to-orange-600",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹3-10 LPA"
  },
  {
    id: "user-acceptance-testing",
    name: "User Acceptance Testing",
    category: "Quality Assurance",
    description: "Final testing phase to ensure software meets business requirements and user expectations.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Shield,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹5-15 LPA"
  }
];
