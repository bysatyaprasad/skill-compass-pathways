
import { BarChart3 } from "lucide-react";
import { Skill } from "../../../skillsData";

export const healthcareManagementSkills: Skill[] = [
  {
    id: "healthcare-analytics",
    name: "Healthcare Analytics",
    category: "Healthcare Technology",
    description: "Data analysis and insights generation to improve healthcare delivery, patient outcomes, and operational efficiency.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-blue-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹7-18 LPA"
  },
  {
    id: "healthcare-compliance",
    name: "Healthcare Compliance",
    category: "Healthcare Technology",
    description: "Understanding and implementing healthcare regulations, HIPAA, and medical data privacy standards.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-15 LPA"
  }
];
