
import { BarChart3, TrendingUp, Target, Zap } from "lucide-react";
import { Skill } from "../../../skillsData";

export const machineLearningSkills: Skill[] = [
  {
    id: "machine-learning",
    name: "Machine Learning",
    category: "Emerging Technology",
    description: "AI subset enabling computers to learn and improve from data without explicit programming.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "predictive-analytics",
    name: "Predictive Analytics",
    category: "Emerging Technology",
    description: "Using statistical algorithms and machine learning to identify future outcomes based on historical data.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: TrendingUp,
    color: "from-green-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "recommendation-systems",
    name: "Recommendation Systems",
    category: "Emerging Technology",
    description: "ML systems that suggest products, content, or services based on user behavior and preferences.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "anomaly-detection",
    name: "Anomaly Detection",
    category: "Emerging Technology",
    description: "ML techniques for identifying unusual patterns or outliers in data for fraud detection and monitoring.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-8 months",
    salary: "₹16-38 LPA"
  }
];
