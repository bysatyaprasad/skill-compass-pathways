
import { Database, BarChart3, Zap, Shield } from "lucide-react";
import { Skill } from "../../../skillsData";

export const advancedDatabaseSkills: Skill[] = [
  {
    id: "database-administration",
    name: "Database Administration",
    category: "Data & Analytics",
    description: "Managing database performance, security, backup, and recovery operations.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-blue-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "data-warehousing",
    name: "Data Warehousing",
    category: "Data & Analytics",
    description: "Designing and implementing large-scale data storage and retrieval systems.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "etl-development",
    name: "ETL Development",
    category: "Data & Analytics",
    description: "Extract, Transform, and Load processes for data integration and migration.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-green-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "database-security",
    name: "Database Security",
    category: "Data & Analytics",
    description: "Implementing security measures to protect database systems and sensitive data.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "big-data-databases",
    name: "Big Data Databases",
    category: "Data & Analytics",
    description: "Working with Hadoop, Spark, and other big data storage and processing systems.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-40 LPA"
  }
];
