
import { Users, Video, MessageSquare, Calendar } from "lucide-react";
import { Skill } from "../../skillsData";

export const remoteWorkSkills: Skill[] = [
  {
    id: "virtual-collaboration",
    name: "Virtual Team Collaboration",
    category: "Remote Work & Collaboration",
    description: "Managing and collaborating effectively in distributed remote teams.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-blue-600 to-cyan-600",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹5-14 LPA",
    isFoundational: true
  },
  {
    id: "async-communication",
    name: "Asynchronous Communication",
    category: "Remote Work & Collaboration",
    description: "Effective communication across time zones using async tools and methodologies.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: MessageSquare,
    color: "from-green-600 to-teal-600",
    difficulty: "beginner",
    timeToLearn: "1-2 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "virtual-event-management",
    name: "Virtual Event Management",
    category: "Remote Work & Collaboration",
    description: "Planning and executing webinars, virtual conferences, and online events.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Video,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "remote-project-management",
    name: "Remote Project Management",
    category: "Remote Work & Collaboration",
    description: "Managing projects and teams across distributed locations using digital tools.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Calendar,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  }
];
