
import { Video, Mic, Camera, Music, Film, Headphones, Volume2, PlayCircle } from "lucide-react";
import { Skill } from "../../skillsData";

export const audioVideoSkills: Skill[] = [
  {
    id: "video-editing-premiere",
    name: "Adobe Premiere Pro",
    category: "Design & Creative",
    description: "Professional video editing software for creating cinematic content, documentaries, and marketing videos.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Film,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-22 LPA"
  },
  {
    id: "audio-production-protools",
    name: "Pro Tools Audio Production",
    category: "Design & Creative",
    description: "Industry-standard digital audio workstation for recording, mixing, and mastering audio content.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Volume2,
    color: "from-green-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "motion-graphics-after-effects",
    name: "After Effects Motion Graphics",
    category: "Design & Creative",
    description: "Creating animated graphics, visual effects, and motion design for videos and digital media.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: PlayCircle,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹10-28 LPA"
  },
  {
    id: "podcast-production",
    name: "Podcast Production",
    category: "Design & Creative",
    description: "End-to-end podcast creation including recording, editing, mixing, and distribution strategies.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Mic,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹5-18 LPA"
  },
  {
    id: "live-streaming-production",
    name: "Live Streaming Production",
    category: "Design & Creative",
    description: "Technical setup and management of live streaming events, webinars, and broadcast content.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "high",
    icon: Video,
    color: "from-red-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹6-20 LPA"
  },
  {
    id: "sound-design",
    name: "Sound Design",
    category: "Design & Creative",
    description: "Creating custom audio effects, ambient sounds, and audio branding for multimedia projects.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Headphones,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹8-30 LPA"
  }
];
