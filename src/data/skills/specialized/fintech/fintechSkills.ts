
import { CreditCard, TrendingUp, Shield, Zap, DollarSign, BarChart3, Lock, Globe } from "lucide-react";
import { Skill } from "../../../skillsData";

export const fintechSkills: Skill[] = [
  {
    id: "payment-systems",
    name: "Payment Gateway Development",
    category: "Finance Industry",
    description: "Building secure payment processing systems, digital wallets, and payment integration APIs.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: CreditCard,
    color: "from-green-600 to-emerald-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "trading-algorithms",
    name: "Algorithmic Trading",
    category: "Finance Industry",
    description: "Developing high-frequency trading systems, quantitative analysis, and trading bots.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: TrendingUp,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹25-60 LPA"
  },
  {
    id: "regulatory-compliance",
    name: "Financial Regulatory Compliance",
    category: "Finance Industry",
    description: "Implementing KYC, AML, PCI-DSS compliance systems and regulatory reporting.",
    status: "stable",
    relevancePeriod: "Next 20+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "robo-advisory",
    name: "Robo-Advisory Platforms",
    category: "Finance Industry",
    description: "Building automated investment advisory systems and portfolio management tools.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹20-50 LPA"
  },
  {
    id: "cryptocurrency-trading",
    name: "Cryptocurrency Trading Systems",
    category: "Finance Industry",
    description: "Developing crypto exchanges, DeFi protocols, and blockchain-based financial systems.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "insurance-tech",
    name: "Insurance Technology",
    category: "Finance Industry",
    description: "Building digital insurance platforms, claims processing, and risk assessment systems.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "lending-platforms",
    name: "Digital Lending Platforms",
    category: "Finance Industry",
    description: "Creating peer-to-peer lending, micro-finance, and credit scoring systems.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: DollarSign,
    color: "from-teal-600 to-green-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "open-banking",
    name: "Open Banking APIs",
    category: "Finance Industry",
    description: "Implementing open banking standards, API security, and financial data aggregation.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹16-38 LPA"
  }
];
