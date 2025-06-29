
import { Zap, Activity, Database, Globe } from "lucide-react";
import { Skill } from "../../skillsData";

export const performanceOptimizationSkills: Skill[] = [
  {
    id: "web-performance-optimization",
    name: "Web Performance Optimization",
    category: "Performance & Optimization",
    description: "Optimizing web applications for speed, Core Web Vitals, and user experience.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-24 LPA"
  },
  {
    id: "database-optimization",
    name: "Database Performance Tuning",
    category: "Performance & Optimization",
    description: "Optimizing database queries, indexing strategies, and connection pooling.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "cdn-optimization",
    name: "CDN & Caching Strategies",
    category: "Performance & Optimization",
    description: "Content delivery networks, edge caching, and distributed system optimization.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹9-22 LPA"
  },
  {
    id: "application-monitoring",
    name: "Application Performance Monitoring",
    category: "Performance & Optimization",
    description: "Real-time monitoring, alerting, and performance analytics for applications.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Activity,
    color: "from-red-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹11-25 LPA"
  }
];
