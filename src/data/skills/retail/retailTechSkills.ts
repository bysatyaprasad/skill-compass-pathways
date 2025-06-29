
import { ShoppingCart, Scan, Smartphone, BarChart3, Users, Target, Zap, Globe } from "lucide-react";
import { Skill } from "../../skillsData";

export const retailTechSkills: Skill[] = [
  {
    id: "omnichannel-retail",
    name: "Omnichannel Retail Strategy",
    category: "Business & Finance",
    description: "Integrating online and offline retail experiences for seamless customer journeys.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "pos-systems",
    name: "Point of Sale (POS) Systems",
    category: "Business & Finance",
    description: "Implementing and managing modern POS systems with inventory integration and analytics.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Scan,
    color: "from-green-600 to-teal-600",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹4-15 LPA"
  },
  {
    id: "inventory-management-systems",
    name: "Smart Inventory Management",
    category: "Business & Finance",
    description: "Automated inventory tracking, demand forecasting, and supply chain optimization systems.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹7-22 LPA"
  },
  {
    id: "retail-analytics",
    name: "Retail Analytics & Customer Insights",
    category: "Data & Analytics",
    description: "Analyzing customer behavior, sales patterns, and retail performance metrics for optimization.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹8-24 LPA"
  },
  {
    id: "mobile-commerce",
    name: "Mobile Commerce Development",
    category: "Programming",
    description: "Creating mobile shopping apps with payment integration, push notifications, and loyalty programs.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "6-10 months",
    salary: "₹10-28 LPA"
  },
  {
    id: "personalization-engines",
    name: "Retail Personalization Engines",
    category: "Emerging Technology",
    description: "AI-driven product recommendations, dynamic pricing, and personalized shopping experiences.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "augmented-reality-shopping",
    name: "AR Shopping Experiences",
    category: "Emerging Technology",
    description: "Creating virtual try-on experiences, AR product visualization, and immersive shopping apps.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-45 LPA"
  }
];
