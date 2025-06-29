
import { DollarSign, TrendingUp, Shield, Zap } from "lucide-react";
import { Skill } from "../../skillsData";

export const fintechAdvancedSkills: Skill[] = [
  {
    id: "algorithmic-trading",
    name: "Algorithmic Trading",
    category: "Finance Technology",
    description: "Automated trading strategies using mathematical models and high-frequency trading algorithms.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: TrendingUp,
    color: "from-green-600 to-emerald-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹25-60 LPA"
  },
  {
    id: "defi-development",
    name: "DeFi Development",
    category: "Finance Technology",
    description: "Decentralized Finance protocols, smart contracts, and yield farming mechanisms.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: DollarSign,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹20-50 LPA"
  },
  {
    id: "payment-gateway-integration",
    name: "Payment Gateway Integration",
    category: "Finance Technology",
    description: "Integration of secure payment processing systems like Stripe, Razorpay, and PayPal.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "robo-advisory",
    name: "Robo-Advisory Systems",
    category: "Finance Technology",
    description: "Automated investment advice and portfolio management using AI algorithms.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "compliance-automation",
    name: "Financial Compliance Automation",
    category: "Finance Technology",
    description: "Automated KYC, AML, and regulatory compliance systems for financial institutions.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹15-35 LPA"
  }
];
