
import { Database } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const redisSkills: Skill[] = [
  {
    id: "redis",
    name: "Redis",
    category: "Data & Analytics",
    description: "In-memory data structure store used as database, cache, and message broker.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-red-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹8-18 LPA"
  },
  {
    id: "redis-cluster",
    name: "Redis Clustering",
    category: "Data & Analytics",
    description: "Advanced Redis deployment for high availability and scalability.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-pink-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "3-4 months",
    salary: "₹12-25 LPA"
  }
];
