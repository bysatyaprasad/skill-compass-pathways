
import { Database } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const elasticsearchSkills: Skill[] = [
  {
    id: "elasticsearch",
    name: "Elasticsearch",
    category: "Data & Analytics",
    description: "Distributed search and analytics engine for full-text search and data analysis.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-22 LPA"
  },
  {
    id: "kibana",
    name: "Kibana",
    category: "Data & Analytics",
    description: "Data visualization and exploration tool for Elasticsearch data.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹8-18 LPA"
  }
];
