
import { Layers, Database, Globe, Zap, Shield, Target, Settings, Monitor } from "lucide-react";
import { Skill } from "../../../skillsData";

export const systemDesignSkills: Skill[] = [
  {
    id: "system-architecture",
    name: "System Architecture Design",
    category: "Programming",
    description: "Designing scalable, maintainable, and robust software system architectures.",
    status: "stable",
    relevancePeriod: "Next 20+ years",
    demandLevel: "high",
    icon: Layers,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-15 months",
    salary: "₹25-60 LPA"
  },
  {
    id: "microservices-architecture",
    name: "Microservices Architecture",
    category: "Programming",
    description: "Designing and implementing distributed systems using microservices patterns.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹20-50 LPA"
  },
  {
    id: "distributed-systems",
    name: "Distributed Systems",
    category: "Programming",
    description: "Building systems that run across multiple machines with consistency and fault tolerance.",
    status: "stable",
    relevancePeriod: "Next 20+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-green-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "10-18 months",
    salary: "₹30-70 LPA"
  },
  {
    id: "event-driven-architecture",
    name: "Event-Driven Architecture",
    category: "Programming",
    description: "Designing systems based on production, detection, and reaction to events.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "api-gateway-design",
    name: "API Gateway Design",
    category: "Programming",
    description: "Designing centralized entry points for managing API traffic, security, and routing.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "caching-strategies",
    name: "Caching Architecture",
    category: "Programming",
    description: "Implementing efficient caching strategies for improved system performance.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹16-38 LPA"
  }
];
