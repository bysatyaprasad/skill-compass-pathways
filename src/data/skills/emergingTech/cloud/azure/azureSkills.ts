
import { Cloud, Database, Shield, Zap } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const azureSkills: Skill[] = [
  {
    id: "azure-solutions-architect",
    name: "Azure Solutions Architect",
    category: "Emerging Technology",
    description: "Design and implement enterprise-level solutions on Microsoft Azure platform.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Cloud,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "azure-functions",
    name: "Azure Functions",
    category: "Emerging Technology",
    description: "Event-driven serverless compute platform for building applications without managing infrastructure.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "azure-devops",
    name: "Azure DevOps",
    category: "Emerging Technology",
    description: "Complete DevOps toolchain for planning, developing, delivering, and operating applications.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-indigo-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "azure-sql-database",
    name: "Azure SQL Database",
    category: "Emerging Technology",
    description: "Fully managed SQL database service with built-in intelligence and security.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹12-25 LPA"
  }
];
