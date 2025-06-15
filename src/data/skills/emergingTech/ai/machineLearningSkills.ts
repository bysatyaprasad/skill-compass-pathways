
import { aiFrameworkSkills } from "./frameworks/aiFrameworkSkills";
import { nlpSkills } from "./nlp/nlpSkills";
import { Brain } from "lucide-react";
import { Skill } from "../../../skillsData";

export const machineLearningSkills: Skill[] = [
  {
    id: "machine-learning",
    name: "Machine Learning",
    category: "Emerging Technology",
    description: "Branch of AI that enables computers to learn and improve from data without being explicitly programmed.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹12-35 LPA"
  },
  ...aiFrameworkSkills,
  ...nlpSkills
];
