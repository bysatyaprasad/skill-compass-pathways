
import { Shield, Lock, AlertTriangle, Eye } from "lucide-react";
import { Skill } from "../../skillsData";

export const cybersecuritySkills: Skill[] = [
  {
    id: "ethical-hacking",
    name: "Ethical Hacking",
    category: "Emerging Technology",
    description: "Authorized penetration testing to identify security vulnerabilities in systems and networks.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹12-35 LPA"
  },
  {
    id: "network-security",
    name: "Network Security",
    category: "Emerging Technology",
    description: "Protecting computer networks from intrusions, attacks, and unauthorized access.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Lock,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹10-30 LPA"
  },
  {
    id: "incident-response",
    name: "Incident Response",
    category: "Emerging Technology",
    description: "Systematic approach to handling and managing security breaches and cyberattacks.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: AlertTriangle,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "4-8 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "digital-forensics",
    name: "Digital Forensics",
    category: "Emerging Technology",
    description: "Investigation and analysis of digital devices to recover and investigate digital evidence.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Eye,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹12-32 LPA"
  }
];
