
import { Brain, Zap, Eye, Cpu } from "lucide-react";
import { Skill } from "../../../skillsData";

export const aiGeneralSkills: Skill[] = [
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence",
    category: "Emerging Technology",
    description: "Broad field of computer science focused on creating intelligent machines that can perform human-like tasks.",
    status: "emerging",
    relevancePeriod: "Next 20+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "12-18 months",
    salary: "₹20-50 LPA"
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    category: "Emerging Technology",
    description: "AI field that enables computers to interpret and understand visual information from images and videos.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Eye,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "deep-learning",
    name: "Deep Learning",
    category: "Emerging Technology",
    description: "Subset of machine learning using neural networks with multiple layers to model complex patterns.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Cpu,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "10-15 months",
    salary: "₹22-55 LPA"
  },
  {
    id: "reinforcement-learning",
    name: "Reinforcement Learning",
    category: "Emerging Technology",
    description: "Machine learning approach where agents learn to make decisions through trial and error interactions.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-green-600 to-emerald-600",
    difficulty: "advanced",
    timeToLearn: "12-18 months",
    salary: "₹25-60 LPA"
  }
];
