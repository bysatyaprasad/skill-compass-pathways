
import { Camera, Video, Mic, Edit, Palette } from "lucide-react";
import { Skill } from "../../skillsData";

export const contentCreationSkills: Skill[] = [
  {
    id: "video-editing",
    name: "Video Editing & Production",
    category: "Design & Creative",
    description: "Creating and editing videos for marketing, education, and entertainment purposes.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Video,
    color: "from-red-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹4-15 LPA"
  },
  {
    id: "podcast-production",
    name: "Podcast Production",
    category: "Design & Creative",
    description: "Audio recording, editing, and podcast distribution across platforms.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Mic,
    color: "from-purple-600 to-blue-600",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹3-12 LPA"
  },
  {
    id: "live-streaming",
    name: "Live Streaming Technology",
    category: "Design & Creative",
    description: "Setting up and managing live streaming for events, gaming, and content creation.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Camera,
    color: "from-green-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹4-14 LPA"
  },
  {
    id: "motion-graphics",
    name: "Motion Graphics Design",
    category: "Design & Creative",
    description: "Creating animated graphics for videos, presentations, and digital media.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Edit,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "3d-modeling",
    name: "3D Modeling & Animation",
    category: "Design & Creative",
    description: "Creating 3D models and animations for games, films, and architectural visualization.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Palette,
    color: "from-purple-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹8-25 LPA"
  }
];
