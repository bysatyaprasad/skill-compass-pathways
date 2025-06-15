
import { Scan } from "lucide-react";
import { Skill } from "../../../skillsData";

export const healthcareManagementSkills: Skill[] = [
  {
    id: "healthcare-analytics",
    name: "Healthcare Analytics",
    category: "Healthcare Technology",
    description: "Data analysis and business intelligence tools specifically designed for healthcare organizations.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Scan,
    color: "from-teal-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "healthcare-compliance",
    name: "Healthcare Compliance Systems",
    category: "Healthcare Technology",
    description: "Systems and processes for ensuring healthcare organizations meet regulatory requirements.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Scan,
    color: "from-red-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-15 LPA"
  }
];
