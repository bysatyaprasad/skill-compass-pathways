
import { Users, TrendingUp, Target, Briefcase, Brain, PieChart, Settings, Lightbulb } from "lucide-react";
import { Skill } from "../../../skillsData";

export const consultingSkills: Skill[] = [
  {
    id: "business-consulting",
    name: "Business Consulting",
    category: "Business & Finance",
    description: "Providing strategic advice to organizations to improve performance, solve problems, and achieve business goals.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Briefcase,
    color: "from-blue-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹12-45 LPA"
  },
  {
    id: "management-consulting",
    name: "Management Consulting",
    category: "Business & Finance",
    description: "Advising senior management on strategic decisions, organizational structure, and operational efficiency.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "8-15 months",
    salary: "₹15-60 LPA"
  },
  {
    id: "strategy-consulting",
    name: "Strategy Consulting",
    category: "Business & Finance",
    description: "Helping organizations develop long-term strategic plans and competitive positioning strategies.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-green-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-70 LPA"
  },
  {
    id: "change-management",
    name: "Change Management",
    category: "Business & Finance",
    description: "Leading organizational transformation initiatives and managing the human side of change.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Settings,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹10-35 LPA"
  },
  {
    id: "process-optimization",
    name: "Process Optimization",
    category: "Business & Finance",
    description: "Analyzing and improving business processes to increase efficiency and reduce costs.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: TrendingUp,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹8-28 LPA"
  },
  {
    id: "lean-six-sigma",
    name: "Lean Six Sigma",
    category: "Business & Finance",
    description: "Quality management methodology combining lean manufacturing and Six Sigma for process improvement.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: PieChart,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹12-40 LPA"
  }
];
