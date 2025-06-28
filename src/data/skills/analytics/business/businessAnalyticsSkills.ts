
import { BarChart3, TrendingUp, Target, PieChart, Users, DollarSign, Globe, Zap } from "lucide-react";
import { Skill } from "../../../skillsData";

export const businessAnalyticsSkills: Skill[] = [
  {
    id: "customer-analytics",
    name: "Customer Analytics",
    category: "Data & Analytics",
    description: "Analyzing customer behavior, lifetime value, churn prediction, and segmentation.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "financial-analytics",
    name: "Financial Analytics",
    category: "Data & Analytics",
    description: "Revenue analysis, profitability modeling, budget forecasting, and financial reporting.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: DollarSign,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "market-research-analytics",
    name: "Market Research & Competitive Analysis",
    category: "Data & Analytics",
    description: "Market sizing, competitor analysis, trend identification, and consumer insights.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "operational-analytics",
    name: "Operational Analytics",
    category: "Data & Analytics",
    description: "Process optimization, efficiency metrics, supply chain analytics, and performance KPIs.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-indigo-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹9-24 LPA"
  },
  {
    id: "product-analytics",
    name: "Product Analytics",
    category: "Data & Analytics",
    description: "Feature usage analysis, A/B testing, user journey mapping, and product optimization.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "predictive-analytics",
    name: "Predictive Business Analytics",
    category: "Data & Analytics",
    description: "Forecasting models, trend prediction, demand planning, and risk assessment.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: TrendingUp,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "web-analytics",
    name: "Advanced Web Analytics",
    category: "Data & Analytics",
    description: "Beyond Google Analytics: custom tracking, attribution modeling, and conversion optimization.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "real-time-analytics",
    name: "Real-time Business Analytics",
    category: "Data & Analytics",
    description: "Live dashboards, streaming analytics, and instant business intelligence systems.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹16-38 LPA"
  }
];
