
import { BarChart3, Users, Package, Calculator, TrendingUp, Target, Briefcase, PieChart } from "lucide-react";
import { Skill } from "../../skillsData";

export const businessSolutionsSkills: Skill[] = [
  {
    id: "inventory-management-systems",
    name: "Inventory Management Systems",
    category: "Business Solutions",
    description: "Build warehouse management, stock tracking, and supply chain optimization systems.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Package,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "crm-development",
    name: "Customer Relationship Management",
    category: "Business Solutions",
    description: "Create CRM systems for sales tracking, customer management, and lead generation.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "5-7 months",
    salary: "₹9-25 LPA"
  },
  {
    id: "accounting-software",
    name: "Accounting & Finance Software",
    category: "Business Solutions",
    description: "Develop invoicing, expense tracking, and financial reporting applications.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Calculator,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹7-20 LPA"
  },
  {
    id: "business-analytics-dashboards",
    name: "Business Analytics Dashboards",
    category: "Business Solutions",
    description: "Create data visualization, KPI tracking, and business intelligence platforms.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "hr-management-systems",
    name: "HR Management Systems",
    category: "Business Solutions",
    description: "Build employee management, payroll, recruitment, and performance tracking systems.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Briefcase,
    color: "from-indigo-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "5-7 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "project-management-tools",
    name: "Project Management Tools",
    category: "Business Solutions",
    description: "Create task tracking, team collaboration, and project planning applications.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹7-18 LPA"
  },
  {
    id: "sales-automation",
    name: "Sales Automation Systems",
    category: "Business Solutions",
    description: "Build lead management, sales pipeline tracking, and automated marketing systems.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: TrendingUp,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "reporting-systems",
    name: "Business Reporting Systems",
    category: "Business Solutions",
    description: "Create automated report generation, data export, and business intelligence tools.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: PieChart,
    color: "from-teal-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-16 LPA"
  }
];
