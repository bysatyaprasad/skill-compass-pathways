
import { Database } from "lucide-react";
import { Skill } from "../../../skillsData";

export const nosqlSkills: Skill[] = [
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Data & Analytics",
    description: "Popular NoSQL document database that provides flexibility and scalability for modern applications.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-green-600 to-green-400",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹6-16 LPA"
  }
];
