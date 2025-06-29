
import { Shield, Lock, AlertTriangle, Search } from "lucide-react";
import { Skill } from "../../../skillsData";

export const securityTestingSkills: Skill[] = [
  {
    id: "owasp-testing",
    name: "OWASP Security Testing",
    category: "Quality Assurance",
    description: "Security testing methodologies following OWASP guidelines to identify web application vulnerabilities.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "4-8 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "burp-suite",
    name: "Burp Suite",
    category: "Quality Assurance",
    description: "Web application security testing platform for finding security vulnerabilities.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Search,
    color: "from-purple-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "3-6 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "penetration-testing",
    name: "Penetration Testing",
    category: "Quality Assurance",
    description: "Ethical hacking and security assessment to identify system vulnerabilities and security weaknesses.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Lock,
    color: "from-red-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹18-45 LPA"
  }
];
