
import { Target, TrendingUp, Globe, Users, BarChart3, Zap, Mail, Search } from "lucide-react";
import { Skill } from "../../../skillsData";

export const advancedMarketingSkills: Skill[] = [
  {
    id: "marketing-automation-hubspot",
    name: "HubSpot Marketing Automation",
    category: "Digital Marketing",
    description: "Advanced inbound marketing, lead nurturing, and customer relationship management using HubSpot.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "salesforce-marketing-cloud",
    name: "Salesforce Marketing Cloud",
    category: "Digital Marketing",
    description: "Enterprise marketing automation, email marketing, and customer journey management.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "4-7 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "conversion-rate-optimization",
    name: "Conversion Rate Optimization (CRO)",
    category: "Digital Marketing",
    description: "A/B testing, user experience optimization, and data-driven conversion improvement strategies.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: TrendingUp,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "marketing-analytics-ga4",
    name: "Advanced Google Analytics 4",
    category: "Digital Marketing",
    description: "Advanced GA4 implementation, custom events, conversions, and attribution modeling.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "programmatic-advertising",
    name: "Programmatic Advertising",
    category: "Digital Marketing",
    description: "Automated ad buying, demand-side platforms (DSPs), and real-time bidding strategies.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-red-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹10-28 LPA"
  },
  {
    id: "affiliate-marketing",
    name: "Affiliate Marketing Management",
    category: "Digital Marketing",
    description: "Managing affiliate programs, partner relationships, and performance-based marketing campaigns.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹5-15 LPA"
  },
  {
    id: "email-marketing-advanced",
    name: "Advanced Email Marketing",
    category: "Digital Marketing",
    description: "Sophisticated email campaigns, segmentation, automation, and deliverability optimization.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Mail,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹4-14 LPA"
  },
  {
    id: "local-seo-gmb",
    name: "Local SEO & Google My Business",
    category: "Digital Marketing",
    description: "Local search optimization, Google My Business management, and location-based marketing.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Search,
    color: "from-teal-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹4-12 LPA"
  }
];
