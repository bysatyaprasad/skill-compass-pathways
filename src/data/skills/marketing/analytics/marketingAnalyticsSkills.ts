
import { BarChart3 } from "lucide-react";
import { Skill } from "../../../skillsData";

export const marketingAnalyticsSkills: Skill[] = [
  {
    id: "google-analytics",
    name: "Google Analytics",
    category: "Digital Marketing",
    description: "Web analytics service for tracking website traffic, user behavior, and conversion metrics.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "marketing-automation",
    name: "Marketing Automation",
    category: "Digital Marketing",
    description: "Using software to automate marketing processes like email campaigns, social media posting, and lead nurturing.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-18 LPA"
  }
];
