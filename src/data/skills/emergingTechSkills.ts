
import { Brain, Shield, Globe } from "lucide-react";
import { Skill } from "../skillsData";

export const emergingTechSkills: Skill[] = [
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence",
    category: "Emerging Technology",
    description: "Cutting-edge field focusing on creating intelligent systems that can perform tasks typically requiring human intelligence.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-violet-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹10-30 LPA"
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    category: "Emerging Technology",
    description: "Subset of AI that enables systems to learn and improve from data without explicit programming, powering modern innovations.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-indigo-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-35 LPA"
  },
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
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    category: "Emerging Technology",
    description: "Delivery of computing services over the internet, enabling scalable and flexible IT infrastructure for businesses.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-sky-500 to-blue-500",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-18 LPA"
  }
];
