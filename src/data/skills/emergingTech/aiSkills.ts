
import { Brain } from "lucide-react";
import { Skill } from "../../skillsData";

export const aiSkills: Skill[] = [
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence",
    category: "Emerging Technology",
    description: "Cutting-edge field focusing on creating intelligent systems that can perform tasks typically requiring human intelligence.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-violet-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹10-30 LPA"
  },
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
  }
];
