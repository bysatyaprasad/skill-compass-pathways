
import { Shield, Lock, Eye, AlertTriangle, Scan, Bug } from "lucide-react";
import { Skill } from "../../../skillsData";

export const advancedCybersecuritySkills: Skill[] = [
  {
    id: "threat-hunting",
    name: "Threat Hunting",
    category: "Cybersecurity & Privacy",
    description: "Proactive searching for cyber threats that evade traditional security solutions using advanced analytics.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Eye,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "digital-forensics",
    name: "Digital Forensics",
    category: "Cybersecurity & Privacy",
    description: "Investigation and analysis of digital evidence from computers and networks for legal proceedings.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Scan,
    color: "from-purple-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "10-15 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "red-team-operations",
    name: "Red Team Operations",
    category: "Cybersecurity & Privacy",
    description: "Simulating real-world attacks to test organization's security posture and incident response.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: AlertTriangle,
    color: "from-red-700 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "12-18 months",
    salary: "₹20-50 LPA"
  },
  {
    id: "vulnerability-assessment",
    name: "Vulnerability Assessment",
    category: "Cybersecurity & Privacy",
    description: "Systematic evaluation of security weaknesses in systems, applications, and networks.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Bug,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "6-9 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "zero-trust-architecture",
    name: "Zero Trust Security",
    category: "Cybersecurity & Privacy",
    description: "Security model that requires verification for every user and device before granting access.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Lock,
    color: "from-blue-700 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹16-38 LPA"
  }
];
