
import { Globe } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const azureSkills: Skill[] = [
  {
    id: "azure",
    name: "Microsoft Azure",
    category: "Emerging Technology",
    description: "Microsoft's cloud computing platform offering comprehensive services for modern applications.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "azure-functions",
    name: "Azure Functions",
    category: "Emerging Technology",
    description: "Serverless compute service that enables running event-triggered code without managing infrastructure.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-18 LPA"
  }
];
