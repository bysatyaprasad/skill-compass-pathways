
import { Code } from "lucide-react";
import { Skill } from "../../../skillsData";

export const serverSkills: Skill[] = [
  {
    id: "nodejs",
    name: "Node.js",
    category: "Programming",
    description: "JavaScript runtime for server-side development, enabling full-stack JavaScript applications with high performance.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-green-600 to-green-400",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹7-16 LPA"
  },
  {
    id: "express",
    name: "Express.js",
    category: "Programming",
    description: "Fast, unopinionated web framework for Node.js, perfect for building APIs and web applications.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-gray-700 to-gray-500",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹6-15 LPA"
  }
];
