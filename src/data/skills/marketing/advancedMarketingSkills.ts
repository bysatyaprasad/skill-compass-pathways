
import { TrendingUp, Users, Mail, Smartphone, Target, BarChart3 } from "lucide-react";
import { Skill } from "../../skillsData";

export const advancedMarketingSkills: Skill[] = [
  {
    id: "facebook-ads",
    name: "Facebook Ads",
    category: "Digital Marketing",
    description: "Creating and managing advertising campaigns on Facebook and Instagram platforms for targeted marketing.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    category: "Digital Marketing",
    description: "Creating effective email campaigns, automation sequences, and newsletter strategies for customer engagement.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Mail,
    color: "from-green-600 to-teal-600",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹3-10 LPA"
  },
  {
    id: "conversion-optimization",
    name: "Conversion Rate Optimization",
    category: "Digital Marketing",
    description: "Improving website and landing page performance to increase conversion rates and user actions.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "influencer-marketing",
    name: "Influencer Marketing",
    category: "Digital Marketing",
    description: "Managing influencer partnerships and campaigns to leverage social media personalities for brand promotion.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-pink-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹5-15 LPA"
  },
  {
    id: "affiliate-marketing",
    name: "Affiliate Marketing",
    category: "Digital Marketing",
    description: "Managing affiliate programs and partnerships to drive sales through commission-based marketing.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: TrendingUp,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "mobile-marketing",
    name: "Mobile Marketing",
    category: "Digital Marketing",
    description: "Creating marketing strategies specifically for mobile devices, apps, and mobile user behavior.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹5-14 LPA"
  },
  {
    id: "marketing-analytics",
    name: "Marketing Analytics",
    category: "Digital Marketing",
    description: "Analyzing marketing data, measuring campaign performance, and optimizing marketing ROI using data insights.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-indigo-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-18 LPA"
  }
];
