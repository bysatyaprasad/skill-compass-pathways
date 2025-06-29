
import { Zap, Cloud, Globe, Database, Shield, Code } from "lucide-react";
import { Skill } from "../../../skillsData";

export const edgeComputingSkills: Skill[] = [
  {
    id: "edge-computing",
    name: "Edge Computing",
    category: "Emerging Technology",
    description: "Processing data closer to its source to reduce latency and improve performance for IoT and mobile applications.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-green-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "cdn-optimization",
    name: "CDN Optimization",
    category: "Emerging Technology",
    description: "Optimizing content delivery networks for faster global content distribution and edge caching.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹10-28 LPA"
  },
  {
    id: "fog-computing",
    name: "Fog Computing",
    category: "Emerging Technology",
    description: "Distributed computing infrastructure that extends cloud computing to the edge of networks.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Cloud,
    color: "from-gray-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹14-35 LPA"
  },
  {
    id: "edge-ai",
    name: "Edge AI",
    category: "Emerging Technology",
    description: "Deploying artificial intelligence algorithms directly on edge devices for real-time processing.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "5g-edge-development",
    name: "5G Edge Development",
    category: "Emerging Technology",
    description: "Building applications that leverage 5G networks and edge computing for ultra-low latency services.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Shield,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹16-42 LPA"
  }
];
