
import { Telescope } from "lucide-react";
import { Skill } from "../../../skillsData";

export const onlineLearningSkills: Skill[] = [
  {
    id: "instructional-design",
    name: "Instructional Design",
    category: "Education Technology",
    description: "Systematic design of educational experiences and materials for effective learning outcomes.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Telescope,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "content-creation-tools",
    name: "Content Creation Tools",
    category: "Education Technology",
    description: "Software and platforms for creating engaging educational content and multimedia materials.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Telescope,
    color: "from-orange-600 to-red-600",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹3-10 LPA"
  }
];
