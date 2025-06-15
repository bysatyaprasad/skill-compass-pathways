
import { Globe } from "lucide-react";
import { Skill } from "../../../skillsData";

export const apiSkills: Skill[] = [
  {
    id: "graphql",
    name: "GraphQL",
    category: "Programming",
    description: "Query language and runtime for APIs that gives clients the power to ask for exactly what they need.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-pink-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-18 LPA"
  },
  {
    id: "rest-api",
    name: "REST API",
    category: "Programming",
    description: "Architectural style for designing networked applications using standard HTTP methods and principles.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹6-16 LPA"
  }
];
