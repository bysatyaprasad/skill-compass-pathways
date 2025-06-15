
import { Shield } from "lucide-react";
import { Skill } from "../../skillsData";

export const securitySkills: Skill[] = [
  {
    id: "blockchain",
    name: "Blockchain",
    category: "Emerging Technology",
    description: "Distributed ledger technology enabling secure, transparent transactions and powering cryptocurrencies and smart contracts.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Shield,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-8 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    category: "Emerging Technology",
    description: "Critical field protecting digital systems, networks, and data from cyber threats and attacks in our connected world.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "6-9 months",
    salary: "₹7-20 LPA"
  }
];
