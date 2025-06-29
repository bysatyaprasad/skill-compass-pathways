
import { Gamepad2, Zap, Users, Trophy, Target, Monitor, Headphones, Code } from "lucide-react";
import { Skill } from "../../skillsData";

export const gameIndustrySkills: Skill[] = [
  {
    id: "unity-game-development",
    name: "Unity Game Development",
    category: "Programming",
    description: "Creating 2D and 3D games using Unity engine with C# programming for multiple platforms.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Gamepad2,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "6-12 months",
    salary: "₹8-30 LPA"
  },
  {
    id: "unreal-engine",
    name: "Unreal Engine Development",
    category: "Programming",
    description: "Advanced game development using Unreal Engine for AAA games and interactive experiences.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "8-15 months",
    salary: "₹12-40 LPA"
  },
  {
    id: "game-monetization",
    name: "Game Monetization Strategy",
    category: "Business & Finance",
    description: "Implementing in-app purchases, ads, subscription models, and freemium strategies in games.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Trophy,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-35 LPA"
  },
  {
    id: "esports-management",
    name: "Esports Management",
    category: "Business & Finance",
    description: "Managing esports teams, tournaments, sponsorships, and competitive gaming ecosystems.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "6-10 months",
    salary: "₹6-25 LPA"
  },
  {
    id: "game-analytics",
    name: "Game Analytics & Player Behavior",
    category: "Data & Analytics",
    description: "Analyzing player data, retention metrics, and game performance using specialized analytics tools.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹10-28 LPA"
  },
  {
    id: "vr-ar-game-development",
    name: "VR/AR Game Development",
    category: "Programming",
    description: "Creating immersive virtual and augmented reality gaming experiences using specialized SDKs.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Monitor,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-45 LPA"
  }
];
