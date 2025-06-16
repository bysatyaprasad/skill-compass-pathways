
import { Search, TrendingUp, Globe, FileText, BarChart3, Target, Zap, Users } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const seoSkills: Skill[] = [
  {
    id: "technical-seo",
    name: "Technical SEO",
    category: "Digital Marketing",
    description: "Optimize website technical aspects: site speed, mobile-friendliness, crawlability, and indexing.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Search,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "4-6 months",
    salary: "₹6-20 LPA"
  },
  {
    id: "content-seo",
    name: "Content SEO & Strategy",
    category: "Digital Marketing",
    description: "Create SEO-optimized content strategies, keyword research, and content planning.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: FileText,
    color: "from-green-600 to-emerald-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹4-15 LPA"
  },
  {
    id: "local-seo",
    name: "Local SEO",
    category: "Digital Marketing",
    description: "Optimize businesses for local search results, Google My Business, and location-based marketing.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "international-seo",
    name: "International SEO",
    category: "Digital Marketing",
    description: "Optimize websites for multiple countries and languages with hreflang and geo-targeting.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "ecommerce-seo",
    name: "E-commerce SEO",
    category: "Digital Marketing",
    description: "Specialized SEO for online stores: product pages, category optimization, and shopping feeds.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: TrendingUp,
    color: "from-teal-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "4-7 months",
    salary: "₹6-22 LPA"
  },
  {
    id: "seo-analytics",
    name: "SEO Analytics & Reporting",
    category: "Digital Marketing",
    description: "Track SEO performance, create reports, and analyze organic traffic data using various tools.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹5-18 LPA"
  },
  {
    id: "voice-search-seo",
    name: "Voice Search Optimization",
    category: "Digital Marketing",
    description: "Optimize content for voice assistants and conversational search queries.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "enterprise-seo",
    name: "Enterprise SEO",
    category: "Digital Marketing",
    description: "Manage SEO for large websites with thousands of pages and complex technical requirements.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-red-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-35 LPA"
  }
];
