
import { Camera, Video, Mic, Edit, Palette, Film, Volume2, Image } from "lucide-react";
import { Skill } from "../../skillsData";

export const contentCreationSkills: Skill[] = [
  {
    id: "video-editing-premiere",
    name: "Adobe Premiere Pro",
    category: "Design & Creative",
    description: "Professional video editing software for creating high-quality video content and films.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Video,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹4-15 LPA"
  },
  {
    id: "motion-graphics-after-effects",
    name: "Adobe After Effects",
    category: "Design & Creative",
    description: "Motion graphics and visual effects software for creating animations and cinematic effects.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Film,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹6-20 LPA"
  },
  {
    id: "photography-lightroom",
    name: "Adobe Lightroom",
    category: "Design & Creative",
    description: "Photo editing and organization software for photographers and content creators.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Camera,
    color: "from-green-600 to-blue-600",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹3-12 LPA"
  },
  {
    id: "audio-editing-audition",
    name: "Adobe Audition",
    category: "Design & Creative",
    description: "Professional audio editing software for podcasts, music, and sound design.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Volume2,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹4-14 LPA"
  },
  {
    id: "davinci-resolve",
    name: "DaVinci Resolve",
    category: "Design & Creative",
    description: "Professional video editing, color correction, and post-production software.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Edit,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "4-8 months",
    salary: "₹5-18 LPA"
  },
  {
    id: "blender-3d",
    name: "Blender 3D",
    category: "Design & Creative",
    description: "Open-source 3D creation software for modeling, animation, and rendering.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Palette,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹6-22 LPA"
  },
  {
    id: "canva-design",
    name: "Canva Pro Design",
    category: "Design & Creative",
    description: "Advanced graphic design using Canva's professional features for brand and marketing materials.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Image,
    color: "from-pink-600 to-purple-600",
    difficulty: "beginner",
    timeToLearn: "1-2 months",
    salary: "₹2-8 LPA"
  },
  {
    id: "podcasting",
    name: "Podcast Production",
    category: "Design & Creative",
    description: "Complete podcast creation from recording to publishing, including audio editing and distribution.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Mic,
    color: "from-teal-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹3-15 LPA"
  }
];
