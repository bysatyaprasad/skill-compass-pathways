
import { Brain } from "lucide-react";
import { Skill } from "../../../skillsData";

export const onlineLearningSkills: Skill[] = [
  {
    id: "instructional-design",
    name: "Instructional Design",
    category: "Education Technology",
    description: "Creating effective educational experiences and materials using systematic design approaches and learning theories.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Brain,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "curriculum-development",
    name: "Curriculum Development",
    category: "Education Technology",
    description: "Designing and structuring educational programs and learning pathways for various subjects and skill levels.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Brain,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹5-13 LPA"
  }
];
