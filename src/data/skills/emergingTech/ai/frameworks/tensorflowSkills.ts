
import { Brain } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const tensorflowSkills: Skill[] = [
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "Emerging Technology",
    description: "Open-source machine learning framework developed by Google for building and training ML models.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "pytorch",
    name: "PyTorch",
    category: "Emerging Technology",
    description: "Open-source machine learning library based on the Torch library, popular for research and production.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-red-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-32 LPA"
  }
];
