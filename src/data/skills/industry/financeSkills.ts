
import { DollarSign, TrendingUp, Shield, BarChart3, Calculator, CreditCard, Globe, Users } from "lucide-react";
import { Skill } from "../../skillsData";

export const financeSkills: Skill[] = [
  {
    id: "financial-modeling",
    name: "Financial Modeling & Valuation",
    category: "Finance Industry",
    description: "Building complex financial models, DCF analysis, and company valuation techniques.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Calculator,
    color: "from-green-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-35 LPA"
  },
  {
    id: "investment-analysis",
    name: "Investment Analysis & Portfolio Management",
    category: "Finance Industry",
    description: "Equity research, portfolio optimization, risk management, and investment strategies.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: TrendingUp,
    color: "from-blue-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "risk-management",
    name: "Financial Risk Management",
    category: "Finance Industry",
    description: "Credit risk, market risk, operational risk assessment and mitigation strategies.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹14-38 LPA"
  },
  {
    id: "financial-planning",
    name: "Financial Planning & Analysis",
    category: "Finance Industry",
    description: "Budgeting, forecasting, variance analysis, and strategic financial planning.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "corporate-finance",
    name: "Corporate Finance & M&A",
    category: "Finance Industry",
    description: "Mergers & acquisitions, capital structure optimization, and corporate restructuring.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-15 months",
    salary: "₹20-60 LPA"
  },
  {
    id: "derivatives-trading",
    name: "Derivatives & Options Trading",
    category: "Finance Industry",
    description: "Options, futures, swaps trading strategies and derivatives pricing models.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: DollarSign,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-50 LPA"
  },
  {
    id: "credit-analysis",
    name: "Credit Analysis & Underwriting",
    category: "Finance Industry",
    description: "Loan underwriting, credit scoring models, and default risk assessment.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: CreditCard,
    color: "from-teal-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "international-finance",
    name: "International Finance & FX",
    category: "Finance Industry",
    description: "Foreign exchange trading, international markets, and cross-border financial operations.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-40 LPA"
  }
];
