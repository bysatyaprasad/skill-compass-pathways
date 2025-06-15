
import { Database } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const cassandraSkills: Skill[] = [
  {
    id: "cassandra",
    name: "Apache Cassandra",
    category: "Data & Analytics",
    description: "Distributed NoSQL database for handling large amounts of data across servers.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-teal-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-8 months",
    salary: "₹12-28 LPA"
  }
];
