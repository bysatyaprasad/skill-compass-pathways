
import { Search, CheckCircle, AlertTriangle, FileText } from "lucide-react";
import { Skill } from "../../../skillsData";

export const manualTestingSkills: Skill[] = [
  {
    id: "manual-testing",
    name: "Manual Testing",
    category: "Quality Assurance",
    description: "Human-executed testing to find defects and ensure software quality without automation tools.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Search,
    color: "from-blue-600 to-green-600",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹3-12 LPA",
    isFoundational: true
  },
  {
    id: "test-case-design",
    name: "Test Case Design",
    category: "Quality Assurance",
    description: "Creating comprehensive test scenarios and cases to validate software functionality and requirements.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: FileText,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹4-15 LPA"
  },
  {
    id: "bug-reporting",
    name: "Bug Reporting & Tracking",
    category: "Quality Assurance",
    description: "Systematic identification, documentation, and tracking of software defects using tools like JIRA.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: AlertTriangle,
    color: "from-red-600 to-orange-600",
    difficulty: "beginner",
    timeToLearn: "1-3 months",
    salary: "₹3-10 LPA"
  },
  {
    id: "usability-testing",
    name: "Usability Testing",
    category: "Quality Assurance",
    description: "Evaluating user experience and interface design to ensure applications are user-friendly.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: CheckCircle,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹5-16 LPA"
  }
];
