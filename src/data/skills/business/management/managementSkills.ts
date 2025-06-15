
import { BarChart3 } from "lucide-react";
import { Skill } from "../../../skillsData";

export const managementSkills: Skill[] = [
  {
    id: "project-management",
    name: "Project Management",
    category: "Business & Finance",
    description: "Planning, executing, and closing projects while managing resources, timelines, and stakeholder expectations.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹5-16 LPA"
  },
  {
    id: "agile-methodologies",
    name: "Agile Methodologies",
    category: "Business & Finance",
    description: "Iterative approach to project management and software development focusing on flexibility and customer collaboration.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹6-18 LPA"
  }
];
