
import { BarChart3, Database, Monitor, Settings, Target, Globe, Users, TrendingUp } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const businessIntelligenceSkills: Skill[] = [
  {
    id: "data-warehousing-design",
    name: "Data Warehouse Design",
    category: "Data & Analytics",
    description: "Designing star schemas, data marts, and enterprise data warehouse architectures.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-blue-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "microsoft-power-platform",
    name: "Microsoft Power Platform",
    category: "Data & Analytics",
    description: "Power BI, Power Apps, Power Automate, and Power Virtual Agents for business solutions.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Settings,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "qlik-sense",
    name: "QlikView/QlikSense",
    category: "Data & Analytics",
    description: "Self-service BI, associative data modeling, and interactive dashboard development.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "looker-studio",
    name: "Looker/Google Data Studio",
    category: "Data & Analytics",
    description: "Modern BI platform with data modeling, exploration, and automated insights.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "sap-business-objects",
    name: "SAP BusinessObjects",
    category: "Data & Analytics",
    description: "Enterprise BI suite for reporting, analysis, and data visualization in large organizations.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "cognos-analytics",
    name: "IBM Cognos Analytics",
    category: "Data & Analytics",
    description: "AI-powered business intelligence platform for enterprise reporting and dashboards.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "low",
    icon: Target,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "sisense",
    name: "Sisense BI Platform",
    category: "Data & Analytics",
    description: "Simplifying complex data analysis with AI-driven insights and easy-to-use dashboards.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "low",
    icon: Monitor,
    color: "from-cyan-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-18 LPA"
  },
  {
    id: "domo-platform",
    name: "Domo Business Cloud",
    category: "Data & Analytics",
    description: "Cloud-based business intelligence platform for real-time data visualization and collaboration.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "low",
    icon: TrendingUp,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹9-20 LPA"
  }
];
