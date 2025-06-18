
import { Globe, Shield, Zap, Router } from "lucide-react";
import { Skill } from "../../skillsData";

export const networkingSkills: Skill[] = [
  {
    id: "network-administration",
    name: "Network Administration",
    category: "Emerging Technology",
    description: "Managing and maintaining computer networks, servers, and network infrastructure.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "cisco-networking",
    name: "Cisco Networking (CCNA/CCNP)",
    category: "Emerging Technology",
    description: "Cisco network configuration, routing, switching, and network troubleshooting.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Router,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "6-10 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "network-security",
    name: "Network Security Engineering",
    category: "Emerging Technology",
    description: "Securing network infrastructure against threats and implementing security protocols.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹10-28 LPA"
  },
  {
    id: "sdn-programming",
    name: "Software-Defined Networking",
    category: "Emerging Technology",
    description: "Programming and managing networks through software rather than hardware configuration.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "load-balancing",
    name: "Load Balancing & High Availability",
    category: "Emerging Technology",
    description: "Distributing network traffic and ensuring system reliability and uptime.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "4-6 months",
    salary: "₹12-30 LPA"
  }
];
