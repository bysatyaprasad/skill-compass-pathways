
import { Target, Users, Calendar, BarChart3, CheckCircle, Briefcase } from "lucide-react";
import { Skill } from "../../skillsData";

export const projectManagementSkills: Skill[] = [
  {
    id: "pmp",
    name: "PMP Certification",
    category: "Business & Finance",
    description: "Project Management Professional certification for leading and directing project teams effectively.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-blue-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "scrum-master",
    name: "Scrum Master",
    category: "Business & Finance",
    description: "Agile framework facilitator ensuring team productivity and removing impediments in software development.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "product-owner",
    name: "Product Owner",
    category: "Business & Finance",
    description: "Managing product backlog, defining user stories, and representing stakeholder interests in development.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Briefcase,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "business-analyst",
    name: "Business Analysis",
    category: "Business & Finance",
    description: "Analyzing business processes, gathering requirements, and bridging IT and business stakeholders.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "kanban",
    name: "Kanban Methodology",
    category: "Business & Finance",
    description: "Visual workflow management method for optimizing the flow of work through development processes.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: CheckCircle,
    color: "from-yellow-600 to-orange-600",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹5-15 LPA"
  },
  {
    id: "risk-management",
    name: "Project Risk Management",
    category: "Business & Finance",
    description: "Identifying, assessing, and mitigating risks in project execution and business operations.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: Target,
    color: "from-red-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-22 LPA"
  }
];
