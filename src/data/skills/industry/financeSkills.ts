
import { DollarSign, TrendingUp, Calculator, PieChart, Shield, Banknote, CreditCard, Building } from "lucide-react";
import { Skill } from "../../skillsData";

export const financeSkills: Skill[] = [
  {
    id: "trading-platform-development",
    name: "Trading Platform Development",
    category: "Finance Industry",
    description: "Build stock trading platforms, cryptocurrency exchanges, and investment management tools.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: TrendingUp,
    color: "from-green-600 to-emerald-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹25-60 LPA"
  },
  {
    id: "fintech-app-development",
    name: "FinTech App Development",
    category: "Finance Industry",
    description: "Create digital wallets, peer-to-peer payment apps, and mobile banking solutions.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: CreditCard,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹20-45 LPA"
  },
  {
    id: "robo-advisor-development",
    name: "Robo-Advisor Systems",
    category: "Finance Industry",
    description: "Build automated investment advisory platforms using AI and algorithmic trading strategies.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Calculator,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "10-15 months",
    salary: "₹30-70 LPA"
  },
  {
    id: "insurance-tech-solutions",
    name: "Insurance Technology Solutions",
    category: "Finance Industry",
    description: "Develop claims processing automation, risk assessment tools, and digital insurance platforms.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Shield,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "6-9 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "regulatory-compliance-systems",
    name: "Financial Compliance Systems",
    category: "Finance Industry",
    description: "Build systems for regulatory reporting, compliance monitoring, and audit trail management.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Building,
    color: "from-gray-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "cryptocurrency-solutions",
    name: "Cryptocurrency Solutions",
    category: "Finance Industry",
    description: "Develop blockchain-based financial applications, DeFi protocols, and crypto trading tools.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Banknote,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "8-15 months",
    salary: "₹22-55 LPA"
  },
  {
    id: "personal-finance-apps",
    name: "Personal Finance Management",
    category: "Finance Industry",
    description: "Create budgeting apps, expense trackers, and personal wealth management tools.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: DollarSign,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "financial-analytics-platforms",
    name: "Financial Analytics Platforms",
    category: "Finance Industry",
    description: "Build portfolio analysis, risk management, and financial forecasting tools.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: PieChart,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹20-50 LPA"
  }
];
