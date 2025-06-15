
import { Brain } from "lucide-react";
import { Skill } from "../../../skillsData";

export const machineLearningSkills: Skill[] = [
  {
    id: "machine-learning",
    name: "Machine Learning",
    category: "Emerging Technology",
    description: "Subset of AI that enables systems to learn and improve from data without explicit programming, powering modern innovations.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-indigo-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-35 LPA"
  },
  {
    id: "deep-learning",
    name: "Deep Learning",
    category: "Emerging Technology",
    description: "Advanced machine learning using neural networks with multiple layers for complex pattern recognition.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-purple-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-40 LPA"
  }
];
