
import { Shield, Lock, Bug, Eye, Zap, Search } from "lucide-react";
import { Skill } from "../../skillsData";

export const cybersecuritySkills: Skill[] = [
  {
    id: "ethical-hacking",
    name: "Ethical Hacking",
    category: "Emerging Technology",
    description: "Authorized penetration testing to identify and fix security vulnerabilities in systems.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Bug,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "penetration-testing",
    name: "Penetration Testing",
    category: "Emerging Technology",
    description: "Simulated cyberattacks to evaluate the security of IT infrastructure and applications.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-purple-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "incident-response",
    name: "Cybersecurity Incident Response",
    category: "Emerging Technology",
    description: "Managing and mitigating security breaches, analyzing threats, and implementing recovery procedures.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹20-50 LPA"
  },
  {
    id: "digital-forensics",
    name: "Digital Forensics",
    category: "Emerging Technology",
    description: "Investigating cybercrimes, recovering digital evidence, and analyzing security incidents.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Search,
    color: "from-blue-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "malware-analysis",
    name: "Malware Analysis",
    category: "Emerging Technology",
    description: "Reverse engineering and analyzing malicious software to understand threats and develop countermeasures.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Bug,
    color: "from-red-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "9-15 months",
    salary: "₹18-42 LPA"
  },
  {
    id: "soc-analyst",
    name: "SOC Analyst",
    category: "Emerging Technology",
    description: "Security Operations Center analyst monitoring, detecting, and responding to security threats.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Eye,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "cloud-security",
    name: "Cloud Security",
    category: "Emerging Technology",
    description: "Securing cloud infrastructure, implementing access controls, and managing cloud-specific security risks.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Lock,
    color: "from-teal-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹16-38 LPA"
  }
];
