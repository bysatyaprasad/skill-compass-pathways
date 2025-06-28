
import { Database, BarChart3, Zap, Cloud, Settings, Monitor } from "lucide-react";
import { Skill } from "../../../skillsData";

export const bigDataSkills: Skill[] = [
  {
    id: "apache-spark",
    name: "Apache Spark",
    category: "Data & Analytics",
    description: "Large-scale data processing engine for big data analytics and machine learning.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "apache-hadoop",
    name: "Apache Hadoop",
    category: "Data & Analytics",
    description: "Distributed storage and processing framework for handling large datasets.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-blue-600 to-green-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "apache-kafka",
    name: "Apache Kafka",
    category: "Data & Analytics",
    description: "Distributed streaming platform for building real-time data pipelines and applications.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Settings,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹20-50 LPA"
  },
  {
    id: "apache-airflow",
    name: "Apache Airflow",
    category: "Data & Analytics",
    description: "Platform for developing, scheduling, and monitoring batch-oriented workflows.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Monitor,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹16-38 LPA"
  },
  {
    id: "snowflake",
    name: "Snowflake",
    category: "Data & Analytics",
    description: "Cloud-based data warehouse platform for analytics and data sharing.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Cloud,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹18-42 LPA"
  },
  {
    id: "databricks",
    name: "Databricks",
    category: "Data & Analytics",
    description: "Unified analytics platform for big data processing and machine learning.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹20-48 LPA"
  }
];
