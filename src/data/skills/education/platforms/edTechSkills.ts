
import { Telescope } from "lucide-react";
import { Skill } from "../../../skillsData";

export const edTechSkills: Skill[] = [
  {
    id: "learning-management-systems",
    name: "Learning Management Systems",
    category: "Education Technology",
    description: "Development and management of digital platforms for educational content delivery and student progress tracking.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Telescope,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹5-14 LPA"
  },
  {
    id: "educational-apps",
    name: "Educational Apps",
    category: "Education Technology",
    description: "Mobile and web applications designed for learning, skill development, and educational engagement.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Telescope,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-15 LPA"
  }
];
