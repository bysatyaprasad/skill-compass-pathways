
import { Cloud, Shield, Database, Globe, Zap, Users, Target, Settings } from "lucide-react";
import { Skill } from "../../skillsData";

export const cloudArchitectureSkills: Skill[] = [
  {
    id: "multi-cloud-architecture",
    name: "Multi-Cloud Architecture",
    category: "Emerging Technology",
    description: "Designing applications that work across multiple cloud providers for redundancy and optimization.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Cloud,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹25-55 LPA"
  },
  {
    id: "cloud-native-architecture",
    name: "Cloud-Native Architecture",
    category: "Emerging Technology",
    description: "Designing applications specifically for cloud environments with microservices and containers.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹20-45 LPA"
  },
  {
    id: "serverless-architecture",
    name: "Serverless Architecture Design",
    category: "Emerging Technology",
    description: "Building applications using Function-as-a-Service and serverless computing patterns.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "cloud-security-architecture",
    name: "Cloud Security Architecture",
    category: "Emerging Technology",
    description: "Designing secure cloud infrastructure with identity management and compliance.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹22-50 LPA"
  },
  {
    id: "cloud-cost-optimization",
    name: "Cloud Cost Optimization",
    category: "Emerging Technology",
    description: "Strategies and tools for optimizing cloud spending and resource utilization.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "cloud-migration-strategy",
    name: "Cloud Migration Strategy",
    category: "Emerging Technology",
    description: "Planning and executing migration of on-premises systems to cloud environments.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹18-42 LPA"
  },
  {
    id: "cloud-governance",
    name: "Cloud Governance & Compliance",
    category: "Emerging Technology",
    description: "Establishing policies, procedures, and controls for cloud resource management.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-indigo-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹20-45 LPA"
  },
  {
    id: "edge-computing-architecture",
    name: "Edge Computing Architecture",
    category: "Emerging Technology",
    description: "Designing distributed computing systems that bring computation closer to data sources.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Settings,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹22-48 LPA"
  }
];
