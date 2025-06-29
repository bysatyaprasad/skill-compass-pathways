
import { TrendingUp, Users, Target, BarChart3, Phone, Mail, MessageSquare, DollarSign } from "lucide-react";
import { Skill } from "../../skillsData";

export const salesTechSkills: Skill[] = [
  {
    id: "crm-salesforce",
    name: "Salesforce CRM",
    category: "Business & Finance",
    description: "World's leading customer relationship management platform for sales, marketing, and customer service.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹8-28 LPA"
  },
  {
    id: "sales-automation",
    name: "Sales Automation Tools",
    category: "Business & Finance",
    description: "Implementing and managing automated sales processes using HubSpot, Pipedrive, and similar platforms.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹6-22 LPA"
  },
  {
    id: "lead-generation-tools",
    name: "Lead Generation & Prospecting",
    category: "Business & Finance",
    description: "Using tools like LinkedIn Sales Navigator, ZoomInfo, and Apollo for B2B lead generation.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: TrendingUp,
    color: "from-purple-600 to-pink-600",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹4-16 LPA"
  },
  {
    id: "sales-analytics",
    name: "Sales Analytics & Forecasting",
    category: "Business & Finance",
    description: "Analyzing sales data, creating forecasts, and building dashboards for sales performance optimization.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "email-marketing-automation",
    name: "Email Marketing Automation",
    category: "Business & Finance",
    description: "Creating automated email sequences, drip campaigns, and lead nurturing workflows.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Mail,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹5-18 LPA"
  },
  {
    id: "conversational-ai-sales",
    name: "Conversational AI for Sales",
    category: "Business & Finance",
    description: "Implementing chatbots, voice assistants, and AI-powered sales tools for customer engagement.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: MessageSquare,
    color: "from-teal-600 to-green-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-35 LPA"
  }
];
