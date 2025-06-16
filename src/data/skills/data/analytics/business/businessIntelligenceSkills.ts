
import { BarChart3, TrendingUp, Database, Brain, Target, Zap, PieChart, LineChart } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const businessIntelligenceSkills: Skill[] = [
  {
    id: "power-bi",
    name: "Microsoft Power BI",
    category: "Data & Analytics",
    description: "Create interactive dashboards and business intelligence reports using Microsoft Power BI.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-20 LPA"
  },
  {
    id: "tableau",
    name: "Tableau Analytics",
    category: "Data & Analytics",
    description: "Build advanced data visualizations and analytics dashboards using Tableau platform.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: PieChart,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹7-22 LPA"
  },
  {
    id: "looker-studio",
    name: "Google Looker Studio",
    category: "Data & Analytics",
    description: "Create data reports and dashboards using Google's business intelligence platform.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: LineChart,
    color: "from-green-600 to-teal-600",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹4-15 LPA"
  },
  {
    id: "qlik-sense",
    name: "QlikSense Development",
    category: "Data & Analytics",
    description: "Build self-service analytics and data discovery applications using QlikSense.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Brain,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "4-7 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "data-warehousing",
    name: "Data Warehousing",
    category: "Data & Analytics",
    description: "Design and implement data warehouses for business intelligence and analytics.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-teal-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹10-30 LPA"
  },
  {
    id: "etl-processes",
    name: "ETL/ELT Development",
    category: "Data & Analytics",
    description: "Build Extract, Transform, Load processes for data integration and pipeline automation.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹9-28 LPA"
  },
  {
    id: "business-metrics",
    name: "Business Metrics & KPIs",
    category: "Data & Analytics",
    description: "Define, track, and analyze key performance indicators and business metrics.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "predictive-analytics",
    name: "Predictive Business Analytics",
    category: "Data & Analytics",
    description: "Use statistical models and machine learning for business forecasting and predictions.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: TrendingUp,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹12-35 LPA"
  }
];
