
import { Target, Users, BarChart3, Lightbulb, Zap, Settings, TrendingUp, Map } from "lucide-react";
import { Skill } from "../../../skillsData";

export const productManagementSkills: Skill[] = [
  {
    id: "product-strategy",
    name: "Product Strategy",
    category: "Business & Finance",
    description: "Developing long-term product vision, roadmaps, and go-to-market strategies.",
    status: "stable",
    relevancePeriod: "Next 20+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "8-15 months",
    salary: "₹20-60 LPA"
  },
  {
    id: "user-research",
    name: "User Research & Analytics",
    category: "Business & Finance",
    description: "Conducting user interviews, surveys, and analyzing user behavior data.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-teal-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "product-analytics",
    name: "Product Analytics",
    category: "Business & Finance",
    description: "Using data to understand product performance, user engagement, and feature usage.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "product-design-thinking",
    name: "Design Thinking",
    category: "Business & Finance",
    description: "Human-centered approach to innovation and problem-solving in product development.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: Lightbulb,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "agile-product-management",
    name: "Agile Product Management",
    category: "Business & Finance",
    description: "Managing products using agile methodologies, sprints, and iterative development.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹14-32 LPA"
  },
  {
    id: "product-roadmapping",
    name: "Product Roadmapping",
    category: "Business & Finance",
    description: "Creating and managing strategic product roadmaps and feature prioritization.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Map,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹16-38 LPA"
  }
];
