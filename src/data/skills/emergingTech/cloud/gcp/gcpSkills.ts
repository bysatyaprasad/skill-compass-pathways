
import { Globe } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const gcpSkills: Skill[] = [
  {
    id: "google-cloud",
    name: "Google Cloud Platform (GCP)",
    category: "Emerging Technology",
    description: "Google's suite of cloud computing services for building and deploying applications.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-blue-500 to-green-500",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "google-cloud-functions",
    name: "Google Cloud Functions",
    category: "Emerging Technology",
    description: "Serverless execution environment for building and connecting cloud services.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-green-500 to-blue-500",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹9-20 LPA"
  },
  {
    id: "bigquery",
    name: "BigQuery",
    category: "Data & Analytics",
    description: "Google's fully managed data warehouse for analytics and machine learning.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-orange-500 to-red-500",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-25 LPA"
  }
];
