
import { Gamepad2, Cpu, Eye, Zap } from "lucide-react";
import { Skill } from "../../../skillsData";

export const gameDevSkills: Skill[] = [
  {
    id: "unity-3d",
    name: "Unity 3D",
    category: "Programming",
    description: "Cross-platform game engine for developing 2D and 3D games across multiple platforms.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Gamepad2,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹6-20 LPA"
  },
  {
    id: "unreal-engine",
    name: "Unreal Engine",
    category: "Programming",
    description: "Advanced game engine for creating high-fidelity games and interactive experiences.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Gamepad2,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "godot",
    name: "Godot Engine",
    category: "Programming",
    description: "Open-source game engine for creating 2D and 3D games with GDScript or C#.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Gamepad2,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹5-15 LPA"
  },
  {
    id: "game-physics",
    name: "Game Physics Programming",
    category: "Programming",
    description: "Implementing realistic physics simulations in games and interactive applications.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Cpu,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "game-ai",
    name: "Game AI Programming",
    category: "Programming",
    description: "Creating intelligent behaviors and decision-making systems for game characters.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Eye,
    color: "from-purple-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "shader-programming",
    name: "Shader Programming",
    category: "Programming",
    description: "Creating visual effects and rendering techniques using HLSL, GLSL, and other shader languages.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹10-28 LPA"
  }
];
