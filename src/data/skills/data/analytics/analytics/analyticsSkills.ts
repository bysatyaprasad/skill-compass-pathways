
import { BarChart3, TrendingUp, PieChart, Target } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const analyticsSkills: Skill[] = [
  {
    id: "google-analytics-4",
    name: "Google Analytics 4",
    category: "Data & Analytics",
    description: "Advanced web analytics with event-based tracking and machine learning insights.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹5-15 LPA"
  },
  {
    id: "adobe-analytics",
    name: "Adobe Analytics",
    category: "Data & Analytics",
    description: "Enterprise analytics solution for deep customer insights and real-time analytics.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: TrendingUp,
    color: "from-red-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "4-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "mixpanel",
    name: "Mixpanel",
    category: "Data & Analytics",
    description: "Product analytics platform for tracking user interactions and conversion funnels.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: PieChart,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "amplitude",
    name: "Amplitude",
    category: "Data & Analytics",
    description: "Digital optimization platform for product analytics and user behavior tracking.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Target,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹7-18 LPA"
  }
];
