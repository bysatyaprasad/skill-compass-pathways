
import { MessageCircle, Mic2, Users, Globe, FileText, Video, Presentation, Target } from "lucide-react";
import { Skill } from "../../skillsData";

export const communicationSkills: Skill[] = [
  {
    id: "public-speaking",
    name: "Public Speaking & Presentations",
    category: "Business & Finance",
    description: "Professional presentation skills, public speaking confidence, and audience engagement techniques.",
    status: "stable",
    relevancePeriod: "Next 20+ years",
    demandLevel: "high",
    icon: Mic2,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹6-25 LPA"
  },
  {
    id: "technical-writing",
    name: "Technical Writing",
    category: "Business & Finance",
    description: "Creating clear documentation, user manuals, API docs, and technical communication materials.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: FileText,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹5-20 LPA"
  },
  {
    id: "cross-cultural-communication",
    name: "Cross-Cultural Communication",
    category: "Business & Finance",
    description: "Effective communication across cultures, international business etiquette, and global team collaboration.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "6-12 months",
    salary: "₹8-28 LPA"
  },
  {
    id: "crisis-communication",
    name: "Crisis Communication Management",
    category: "Business & Finance",
    description: "Managing public relations during crises, reputation management, and emergency communication strategies.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Target,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-35 LPA"
  },
  {
    id: "video-communication",
    name: "Video Communication & Production",
    category: "Design & Creative",
    description: "Creating engaging video content for business communication, training, and marketing purposes.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Video,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹6-24 LPA"
  },
  {
    id: "stakeholder-communication",
    name: "Stakeholder Communication",
    category: "Business & Finance",
    description: "Managing communication with investors, clients, partners, and internal stakeholders effectively.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-indigo-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹8-30 LPA"
  }
];
