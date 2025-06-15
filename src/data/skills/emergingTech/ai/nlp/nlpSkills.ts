
import { Brain } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const nlpSkills: Skill[] = [
  {
    id: "natural-language-processing",
    name: "Natural Language Processing",
    category: "Emerging Technology",
    description: "AI field focused on enabling computers to understand, interpret, and generate human language.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-teal-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "transformers",
    name: "Transformers",
    category: "Emerging Technology",
    description: "Neural network architecture that has revolutionized natural language processing and AI.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-purple-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "10-15 months",
    salary: "₹18-45 LPA"
  }
];
