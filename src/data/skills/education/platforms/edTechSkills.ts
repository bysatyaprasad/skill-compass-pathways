
import { Telescope } from "lucide-react";
import { Skill } from "../../../skillsData";

export const edTechSkills: Skill[] = [
  {
    id: "learning-management-systems",
    name: "Learning Management Systems (LMS)",
    category: "Education Technology",
    description: "Platforms for delivering, tracking, and managing educational content and learner progress.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Telescope,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹5-14 LPA"
  },
  {
    id: "e-learning-platforms",
    name: "E-Learning Platforms",
    category: "Education Technology",
    description: "Digital platforms that enable online education and training delivery at scale.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Telescope,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-16 LPA"
  }
];
