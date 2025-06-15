
import { Database } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const mongodbSkills: Skill[] = [
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
  },
  {
    id: "cassandra",
    name: "Apache Cassandra",
    category: "Data & Analytics",
    description: "Highly scalable NoSQL database designed to handle large amounts of data across many commodity servers.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-gray-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "4-6 months",
    salary: "₹8-18 LPA"
  }
];
