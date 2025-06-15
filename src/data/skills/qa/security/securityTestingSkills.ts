
import { Shield } from "lucide-react";
import { Skill } from "../../../skillsData";

export const securityTestingSkills: Skill[] = [
  {
    id: "security-testing",
    name: "Security Testing",
    category: "Quality Assurance",
    description: "Testing applications for security vulnerabilities and data protection issues.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-8 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "owasp-testing",
    name: "OWASP Testing",
    category: "Quality Assurance",
    description: "Following OWASP guidelines for web application security testing.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Shield,
    color: "from-purple-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "4-6 months",
    salary: "₹9-22 LPA"
  }
];
