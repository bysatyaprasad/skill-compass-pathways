
import { Brain, Cpu } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const tensorflowSkills: Skill[] = [
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "Emerging Technology",
    description: "Open-source machine learning framework for building and deploying ML models at scale.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "pytorch",
    name: "PyTorch",
    category: "Emerging Technology",
    description: "Open-source machine learning library for research and production with dynamic computation graphs.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Cpu,
    color: "from-red-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-42 LPA"
  },
  {
    id: "keras",
    name: "Keras",
    category: "Emerging Technology",
    description: "High-level neural networks API for fast prototyping and experimentation in deep learning.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Brain,
    color: "from-red-500 to-orange-500",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹12-28 LPA"
  }
];
