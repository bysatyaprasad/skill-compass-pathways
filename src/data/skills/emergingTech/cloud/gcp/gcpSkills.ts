
import { Cloud, Database, Zap, Settings } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const gcpSkills: Skill[] = [
  {
    id: "gcp-compute-engine",
    name: "Google Compute Engine",
    category: "Emerging Technology",
    description: "Scalable virtual machine instances running on Google's global infrastructure.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Cloud,
    color: "from-red-600 to-yellow-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "gcp-cloud-functions",
    name: "Google Cloud Functions",
    category: "Emerging Technology",
    description: "Serverless execution environment for building and connecting cloud services.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹9-22 LPA"
  },
  {
    id: "bigquery",
    name: "Google BigQuery",
    category: "Emerging Technology",
    description: "Fully managed, serverless data warehouse for analytics at scale.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹12-28 LPA"
  }
];
