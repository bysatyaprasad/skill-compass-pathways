
import { DollarSign, Shield, TrendingUp, CreditCard, Banknote, Calculator, Globe, Zap } from "lucide-react";
import { Skill } from "../../../skillsData";

export const fintechSkills: Skill[] = [
  {
    id: "payment-gateway-integration",
    name: "Payment Gateway Integration",
    category: "Finance Industry",
    description: "Integrating payment systems like Stripe, PayPal, Razorpay, and other payment processors.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: CreditCard,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "blockchain-fintech",
    name: "Blockchain for Finance",
    category: "Finance Industry",
    description: "Implementing blockchain solutions for payments, smart contracts, and decentralized finance (DeFi).",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "algorithmic-trading",
    name: "Algorithmic Trading",
    category: "Finance Industry",
    description: "Developing automated trading systems and quantitative investment strategies.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: TrendingUp,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹20-60 LPA"
  },
  {
    id: "robo-advisors",
    name: "Robo-Advisory Platforms",
    category: "Finance Industry",
    description: "Building automated investment advisory services and portfolio management systems.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Calculator,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "kyc-aml-compliance",
    name: "KYC/AML Compliance Systems",
    category: "Finance Industry",
    description: "Implementing Know Your Customer and Anti-Money Laundering compliance solutions.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "open-banking-apis",
    name: "Open Banking APIs",
    category: "Finance Industry",
    description: "Developing and integrating with open banking APIs for financial data access and payments.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "neobank-development",
    name: "Neobank Platform Development",
    category: "Finance Industry",
    description: "Building digital-first banking platforms and mobile banking applications.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Banknote,
    color: "from-teal-600 to-green-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "cryptocurrency-trading",
    name: "Cryptocurrency Trading Systems",
    category: "Finance Industry",
    description: "Developing crypto trading platforms, wallets, and blockchain-based financial services.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-40 LPA"
  }
];
