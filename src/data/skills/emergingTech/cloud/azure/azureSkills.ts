
import { Cloud, Database, Settings, Zap } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const azureSkills: Skill[] = [
  {
    id: "azure-vm",
    name: "Azure Virtual Machines",
    category: "Emerging Technology",
    description: "On-demand, scalable computing resources with choice of operating systems and configurations.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Cloud,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "azure-functions",
    name: "Azure Functions",
    category: "Emerging Technology",
    description: "Serverless compute service for running event-triggered code without managing infrastructure.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹10-24 LPA"
  },
  {
    id: "azure-sql",
    name: "Azure SQL Database",
    category: "Emerging Technology",
    description: "Fully managed relational database service with built-in intelligence and security.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹9-21 LPA"
  }
];
