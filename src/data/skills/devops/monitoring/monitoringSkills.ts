
import { Monitor, BarChart3, AlertTriangle, Activity, Search, Target } from "lucide-react";
import { Skill } from "../../../skillsData";

export const monitoringSkills: Skill[] = [
  {
    id: "prometheus",
    name: "Prometheus",
    category: "Emerging Technology",
    description: "Open-source monitoring and alerting system for collecting and querying metrics.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹15-32 LPA"
  },
  {
    id: "grafana",
    name: "Grafana",
    category: "Emerging Technology",
    description: "Multi-platform analytics and interactive visualization platform for monitoring data.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Monitor,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "elk-stack",
    name: "ELK Stack (Elasticsearch, Logstash, Kibana)",
    category: "Emerging Technology",
    description: "Log analysis and visualization platform for searching, analyzing, and visualizing data.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Search,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "4-8 months",
    salary: "₹16-35 LPA"
  },
  {
    id: "new-relic",
    name: "New Relic",
    category: "Emerging Technology",
    description: "Application performance monitoring platform for tracking system health and user experience.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Activity,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹10-24 LPA"
  }
];
