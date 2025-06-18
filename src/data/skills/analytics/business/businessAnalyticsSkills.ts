
import { BarChart3, TrendingUp, Target, PieChart } from "lucide-react";
import { Skill } from "../../../skillsData";

export const businessAnalyticsSkills: Skill[] = [
  {
    id: "business-intelligence",
    name: "Business Intelligence",
    category: "Data & Analytics",
    description: "Analyzing business data to support decision-making and strategic planning.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "market-research-analytics",
    name: "Market Research Analytics",
    category: "Data & Analytics",
    description: "Analyzing market trends, consumer behavior, and competitive landscapes.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "financial-analytics",
    name: "Financial Analytics",
    category: "Data & Analytics",
    description: "Analyzing financial data for investment decisions, risk assessment, and performance measurement.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: TrendingUp,
    color: "from-emerald-600 to-green-600",
    difficulty: "advanced",
    timeToLearn: "6-8 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "customer-analytics",
    name: "Customer Analytics",
    category: "Data & Analytics",
    description: "Understanding customer behavior, segmentation, and lifetime value analysis.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: PieChart,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "supply-chain-analytics",
    name: "Supply Chain Analytics",
    category: "Data & Analytics",
    description: "Optimizing supply chain operations through data analysis and predictive modeling.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹10-25 LPA"
  }
];
