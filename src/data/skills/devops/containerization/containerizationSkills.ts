
import { Package, Server, Layers, Settings, Zap, Shield, Monitor, Cloud } from "lucide-react";
import { Skill } from "../../../skillsData";

export const containerizationSkills: Skill[] = [
  {
    id: "docker",
    name: "Docker",
    category: "Emerging Technology",
    description: "Containerization platform for packaging applications and their dependencies into portable containers.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Package,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "Emerging Technology",
    description: "Container orchestration platform for automating deployment, scaling, and management of applications.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Settings,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "helm",
    name: "Helm",
    category: "Emerging Technology",
    description: "Package manager for Kubernetes that simplifies application deployment and management.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Package,
    color: "from-teal-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "openshift",
    name: "Red Hat OpenShift",
    category: "Emerging Technology",
    description: "Enterprise Kubernetes platform with built-in security, monitoring, and developer tools.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Shield,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "4-8 months",
    salary: "₹20-40 LPA"
  }
];
