
import { Bot, Zap, Settings, Monitor, Database, Globe, Target, Users } from "lucide-react";
import { Skill } from "../../skillsData";

export const rpaSkills: Skill[] = [
  {
    id: "uipath",
    name: "UiPath RPA",
    category: "Automation Solutions",
    description: "Leading robotic process automation platform for automating repetitive business processes.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Bot,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "automation-anywhere",
    name: "Automation Anywhere",
    category: "Automation Solutions",
    description: "Cloud-native RPA platform with AI-powered automation capabilities.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹7-22 LPA"
  },
  {
    id: "blue-prism",
    name: "Blue Prism",
    category: "Automation Solutions",
    description: "Enterprise-grade RPA platform for scalable automation solutions.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Settings,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "5-7 months",
    salary: "₹9-28 LPA"
  },
  {
    id: "power-automate",
    name: "Microsoft Power Automate",
    category: "Automation Solutions",
    description: "Low-code automation platform for workflow automation across Microsoft ecosystem.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Monitor,
    color: "from-purple-600 to-blue-600",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "zapier",
    name: "Zapier Automation",
    category: "Automation Solutions",
    description: "No-code automation platform connecting thousands of apps and services.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-orange-500 to-yellow-500",
    difficulty: "beginner",
    timeToLearn: "1-3 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "process-mining",
    name: "Process Mining",
    category: "Automation Solutions",
    description: "Analyzing business processes using event logs to identify automation opportunities.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-green-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "intelligent-automation",
    name: "Intelligent Automation",
    category: "Automation Solutions",
    description: "Combining RPA with AI/ML for cognitive automation and decision-making.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "rpa-governance",
    name: "RPA Governance & COE",
    category: "Automation Solutions",
    description: "Establishing automation governance frameworks and centers of excellence.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-45 LPA"
  }
];
