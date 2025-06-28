
import { Brain, Eye, Mic, FileText, Camera, Zap, Target, Users } from "lucide-react";
import { Skill } from "../../skillsData";

export const specializedAISkills: Skill[] = [
  {
    id: "computer-vision-opencv",
    name: "Computer Vision (OpenCV)",
    category: "Emerging Technology",
    description: "Advanced image and video processing using OpenCV for object detection and recognition.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Eye,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "speech-recognition",
    name: "Speech Recognition & Synthesis",
    category: "Emerging Technology",
    description: "Building voice-enabled applications with speech-to-text and text-to-speech capabilities.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Mic,
    color: "from-green-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "generative-ai",
    name: "Generative AI Development",
    category: "Emerging Technology",
    description: "Creating AI models that generate content including text, images, and code using GPT, DALL-E, etc.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹25-60 LPA"
  },
  {
    id: "mlops-engineering",
    name: "MLOps Engineering",
    category: "Emerging Technology",
    description: "Operationalizing machine learning models with CI/CD, monitoring, and deployment pipelines.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹20-45 LPA"
  },
  {
    id: "reinforcement-learning",
    name: "Reinforcement Learning",
    category: "Emerging Technology",
    description: "Training AI agents to make decisions through trial and error in dynamic environments.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: Target,
    color: "from-red-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "10-15 months",
    salary: "₹30-70 LPA"
  },
  {
    id: "edge-ai",
    name: "Edge AI Development",
    category: "Emerging Technology",
    description: "Deploying AI models on edge devices and mobile platforms for real-time inference.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Camera,
    color: "from-teal-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹22-50 LPA"
  },
  {
    id: "ai-ethics",
    name: "AI Ethics & Governance",
    category: "Emerging Technology",
    description: "Ensuring responsible AI development with bias detection, fairness, and ethical guidelines.",
    status: "emerging",
    relevancePeriod: "Next 20+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "prompt-engineering",
    name: "Prompt Engineering",
    category: "Emerging Technology",
    description: "Optimizing prompts for large language models to achieve desired outputs and behaviors.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: FileText,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹12-30 LPA"
  }
];
