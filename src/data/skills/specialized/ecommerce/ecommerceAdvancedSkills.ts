
import { ShoppingCart, Truck, BarChart3, Users, Globe } from "lucide-react";
import { Skill } from "../../../skillsData";

export const ecommerceAdvancedSkills: Skill[] = [
  {
    id: "marketplace-development",
    name: "Marketplace Platform Development",
    category: "Web Solutions",
    description: "Building multi-vendor marketplaces like Amazon or eBay with complex vendor management.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: ShoppingCart,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "inventory-management-systems",
    name: "Inventory Management Systems",
    category: "Business Solutions",
    description: "Real-time inventory tracking, automated reordering, and warehouse management.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Truck,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "recommendation-engines",
    name: "E-commerce Recommendation Engines",
    category: "Data Analytics Solutions",
    description: "AI-powered product recommendation systems to increase sales and user engagement.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-green-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "omnichannel-commerce",
    name: "Omnichannel Commerce Systems",
    category: "Web Solutions",
    description: "Unified commerce experience across web, mobile, social media, and physical stores.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "subscription-commerce",
    name: "Subscription Commerce Platforms",
    category: "Web Solutions",
    description: "Building recurring billing systems and subscription management platforms.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹10-25 LPA"
  }
];
