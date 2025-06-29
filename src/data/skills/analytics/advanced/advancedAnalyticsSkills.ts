
import { BarChart3, TrendingUp, Eye, Zap, Target, Brain, Database, PieChart } from "lucide-react";
import { Skill } from "../../../skillsData";

export const advancedAnalyticsSkills: Skill[] = [
  {
    id: "predictive-analytics",
    name: "Predictive Analytics",
    category: "Data & Analytics",
    description: "Using historical data and statistical algorithms to predict future outcomes and trends.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: TrendingUp,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹15-45 LPA"
  },
  {
    id: "prescriptive-analytics",
    name: "Prescriptive Analytics",
    category: "Data & Analytics",
    description: "Advanced analytics that recommends actions to achieve desired outcomes using optimization algorithms.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-15 months",
    salary: "₹18-50 LPA"
  },
  {
    id: "real-time-analytics",
    name: "Real-time Analytics",
    category: "Data & Analytics",
    description: "Processing and analyzing data as it arrives to provide immediate insights and actions.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹16-42 LPA"
  },
  {
    id: "customer-analytics",
    name: "Customer Analytics",
    category: "Data & Analytics",
    description: "Analyzing customer behavior, preferences, and lifecycle to improve business decisions.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Eye,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹12-35 LPA"
  },
  {
    id: "behavioral-analytics",
    name: "Behavioral Analytics",
    category: "Data & Analytics",
    description: "Studying user behavior patterns to understand and predict actions across digital platforms.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "5-9 months",
    salary: "₹14-38 LPA"
  },
  {
    id: "web-analytics",
    name: "Web Analytics",
    category: "Data & Analytics",
    description: "Measuring and analyzing website traffic and user interactions to optimize digital experiences.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "statistical-modeling",
    name: "Statistical Modeling",
    category: "Data & Analytics",
    description: "Creating mathematical models to understand relationships between variables and make predictions.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: PieChart,
    color: "from-red-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹16-45 LPA"
  }
];
