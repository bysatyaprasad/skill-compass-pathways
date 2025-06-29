
import { Camera, Video, Mic, Edit3, BookOpen } from "lucide-react";
import { Skill } from "../../skillsData";

export const contentCreationAdvancedSkills: Skill[] = [
  {
    id: "video-editing-advanced",
    name: "Advanced Video Editing",
    category: "Content Creation",
    description: "Professional video editing with After Effects, Premiere Pro, and DaVinci Resolve.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Video,
    color: "from-red-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "motion-graphics",
    name: "Motion Graphics",
    category: "Content Creation",
    description: "Animated graphics and visual effects for digital media and advertising.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Camera,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "5-7 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "podcast-production",
    name: "Podcast Production",
    category: "Content Creation",
    description: "Audio recording, editing, and podcast distribution across multiple platforms.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Mic,
    color: "from-green-600 to-teal-600",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "technical-writing",
    name: "Technical Writing",
    category: "Content Creation",
    description: "Creating documentation, API guides, and technical content for software products.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: BookOpen,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-16 LPA",
    isFoundational: true
  },
  {
    id: "copywriting-conversion",
    name: "Conversion Copywriting",
    category: "Content Creation",
    description: "Persuasive writing for marketing campaigns, sales pages, and email marketing.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Edit3,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹5-15 LPA"
  }
];
