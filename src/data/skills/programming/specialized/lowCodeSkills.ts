
import { Zap, Blocks, Settings, Wrench, Code, Layers, Globe, Database } from "lucide-react";
import { Skill } from "../../../skillsData";

export const lowCodeSkills: Skill[] = [
  {
    id: "microsoft-powerapps",
    name: "Microsoft PowerApps",
    category: "Programming",
    description: "Low-code platform for building custom business applications quickly without traditional coding.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Blocks,
    color: "from-blue-600 to-indigo-600",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹6-20 LPA"
  },
  {
    id: "salesforce-lightning",
    name: "Salesforce Lightning Platform",
    category: "Programming",
    description: "Low-code development platform for building custom CRM applications and business processes.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-30 LPA"
  },
  {
    id: "mendix",
    name: "Mendix",
    category: "Programming",
    description: "Enterprise low-code platform for rapidly developing and deploying business applications.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Layers,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹12-35 LPA"
  },
  {
    id: "outsystems",
    name: "OutSystems",
    category: "Programming",
    description: "High-performance low-code platform for developing enterprise-grade applications.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Settings,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹14-40 LPA"
  },
  {
    id: "appian",
    name: "Appian",
    category: "Programming",
    description: "Low-code automation platform for building process-driven applications.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Wrench,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹12-32 LPA"
  },
  {
    id: "zapier",
    name: "Zapier Automation",
    category: "Programming",
    description: "No-code automation platform for connecting apps and automating workflows.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "beginner",
    timeToLearn: "1-3 months",
    salary: "₹5-18 LPA"
  }
];
