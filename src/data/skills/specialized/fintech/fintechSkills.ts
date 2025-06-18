
import { DollarSign, Shield, TrendingUp, CreditCard, Banknote } from "lucide-react";
import { Skill } from "../../../skillsData";

export const fintechSkills: Skill[] = [
  {
    id: "payment-gateway-integration",
    name: "Payment Gateway Integration",
    category: "Finance Industry",
    description: "Integrating secure payment processing systems for online transactions.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: CreditCard,
    color: "from-green-600 to-emerald-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "fraud-detection-systems",
    name: "Fraud Detection Systems",
    category: "Finance Industry",
    description: "Building AI-powered systems to detect and prevent financial fraud.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "algorithmic-trading",
    name: "Algorithmic Trading",
    category: "Finance Industry",
    description: "Developing automated trading strategies and execution systems.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: TrendingUp,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "10-15 months",
    salary: "₹25-60 LPA"
  },
  {
    id: "digital-banking-platforms",
    name: "Digital Banking Platforms",
    category: "Finance Industry",
    description: "Creating comprehensive online banking solutions and mobile banking apps.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Banknote,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "kyc-aml-systems",
    name: "KYC/AML Compliance Systems",
    category: "Finance Industry",
    description: "Know Your Customer and Anti-Money Laundering compliance automation.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-25 LPA"
  }
];
