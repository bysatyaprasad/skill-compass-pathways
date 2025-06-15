
import { Zap, Bot, Workflow, Clock, FileText, Mail, Calendar, Settings } from "lucide-react";
import { Skill } from "../../skillsData";

export const automationSolutionsSkills: Skill[] = [
  {
    id: "business-process-automation",
    name: "Business Process Automation",
    category: "Automation Solutions",
    description: "Automate repetitive business tasks, workflows, and document processing to increase efficiency.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Workflow,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "chatbot-development",
    name: "Chatbot & Virtual Assistant Development",
    category: "Automation Solutions",
    description: "Create intelligent chatbots for customer service, lead generation, and automated support.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Bot,
    color: "from-green-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "email-marketing-automation",
    name: "Email Marketing Automation",
    category: "Automation Solutions",
    description: "Build automated email campaigns, drip sequences, and personalized marketing systems.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Mail,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "data-scraping-automation",
    name: "Data Scraping & Collection",
    category: "Automation Solutions",
    description: "Automate data collection from websites, APIs, and external sources for business intelligence.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: FileText,
    color: "from-purple-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "social-media-automation",
    name: "Social Media Automation",
    category: "Automation Solutions",
    description: "Create automated posting, engagement tracking, and social media management systems.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Calendar,
    color: "from-pink-600 to-purple-600",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹6-15 LPA"
  },
  {
    id: "testing-automation",
    name: "Software Testing Automation",
    category: "Automation Solutions",
    description: "Build automated testing frameworks to ensure software quality and reduce manual testing effort.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Settings,
    color: "from-teal-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "deployment-automation",
    name: "Deployment & Infrastructure Automation",
    category: "Automation Solutions",
    description: "Automate software deployment, server management, and infrastructure provisioning.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "report-automation",
    name: "Report Generation Automation",
    category: "Automation Solutions",
    description: "Create systems that automatically generate, format, and distribute business reports.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Clock,
    color: "from-indigo-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹7-18 LPA"
  }
];
