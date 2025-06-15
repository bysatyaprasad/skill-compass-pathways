
import { Shield } from "lucide-react";
import { Skill } from "../../../skillsData";

export const cybersecuritySkills: Skill[] = [
  {
    id: "ethical-hacking",
    name: "Ethical Hacking",
    category: "Emerging Technology",
    description: "Authorized hacking to find vulnerabilities and improve system security.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "penetration-testing",
    name: "Penetration Testing",
    category: "Emerging Technology",
    description: "Simulated cyber attacks to evaluate security of systems and networks.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-purple-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹10-30 LPA"
  },
  {
    id: "network-security",
    name: "Network Security",
    category: "Emerging Technology",
    description: "Protection of network infrastructure from unauthorized access and threats.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹7-20 LPA"
  },
  {
    id: "incident-response",
    name: "Incident Response",
    category: "Emerging Technology",
    description: "Organized approach to addressing and managing security breaches or attacks.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "malware-analysis",
    name: "Malware Analysis",
    category: "Emerging Technology",
    description: "Study of malicious software to understand its behavior and develop defenses.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Shield,
    color: "from-gray-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "8-15 months",
    salary: "₹15-35 LPA"
  }
];
