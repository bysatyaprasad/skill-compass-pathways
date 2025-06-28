
import { ShoppingCart, Truck, Search, Users, BarChart3, Globe, Zap, Target } from "lucide-react";
import { Skill } from "../../../skillsData";

export const ecommerceAdvancedSkills: Skill[] = [
  {
    id: "marketplace-development",
    name: "Multi-vendor Marketplace",
    category: "Business Solutions",
    description: "Building complex marketplace platforms with vendor management, commissions, and analytics.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: ShoppingCart,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "inventory-optimization",
    name: "Inventory Optimization Systems",
    category: "Business Solutions",
    description: "AI-powered inventory management, demand forecasting, and supply chain optimization.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹16-38 LPA"
  },
  {
    id: "personalization-engines",
    name: "E-commerce Personalization",
    category: "Business Solutions",
    description: "Building recommendation systems, personalized shopping experiences, and customer segmentation.",
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
    id: "logistics-management",
    name: "Logistics & Fulfillment Systems",
    category: "Business Solutions",
    description: "Building warehouse management, shipping optimization, and last-mile delivery systems.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Truck,
    color: "from-green-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹14-32 LPA"
  },
  {
    id: "product-search-engines",
    name: "Product Search & Discovery",
    category: "Business Solutions",
    description: "Advanced search functionality, filters, faceted search, and product discovery engines.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Search,
    color: "from-indigo-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "subscription-commerce",
    name: "Subscription Commerce Platforms",
    category: "Business Solutions",
    description: "Building recurring billing, subscription management, and customer retention systems.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹13-30 LPA"
  },
  {
    id: "social-commerce",
    name: "Social Commerce Integration",
    category: "Business Solutions",
    description: "Integrating shopping features with social media platforms and influencer marketing.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-pink-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "cross-border-ecommerce",
    name: "Cross-border E-commerce",
    category: "Business Solutions",
    description: "Multi-currency, multi-language platforms with international shipping and tax compliance.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-teal-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-35 LPA"
  }
];
