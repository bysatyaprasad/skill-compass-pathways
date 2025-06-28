
import { Database, Zap, Globe, Settings, Monitor, Target, Users, Shield } from "lucide-react";
import { Skill } from "../../skillsData";

export const dataEngineeringSkills: Skill[] = [
  {
    id: "apache-kafka",
    name: "Apache Kafka",
    category: "Data & Analytics",
    description: "Distributed streaming platform for building real-time data pipelines and streaming applications.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "apache-airflow",
    name: "Apache Airflow",
    category: "Data & Analytics",
    description: "Platform for developing, scheduling, and monitoring workflows and data pipelines.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Settings,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "snowflake",
    name: "Snowflake Data Platform",
    category: "Data & Analytics",
    description: "Cloud-based data warehouse platform for analytics and data engineering workloads.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "databricks",
    name: "Databricks Platform",
    category: "Data & Analytics",
    description: "Unified analytics platform combining data engineering, data science, and machine learning.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "data-lake-architecture",
    name: "Data Lake Architecture",
    category: "Data & Analytics",
    description: "Designing and implementing data lakes for storing structured and unstructured data at scale.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-green-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹16-38 LPA"
  },
  {
    id: "real-time-analytics",
    name: "Real-time Data Analytics",
    category: "Data & Analytics",
    description: "Building systems for processing and analyzing data in real-time with low latency.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Monitor,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "7-10 months",
    salary: "₹20-45 LPA"
  },
  {
    id: "data-mesh",
    name: "Data Mesh Architecture",
    category: "Data & Analytics",
    description: "Decentralized data architecture treating data as a product with domain ownership.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Target,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹25-55 LPA"
  },
  {
    id: "data-governance",
    name: "Data Governance & Quality",
    category: "Data & Analytics",
    description: "Implementing policies, procedures, and tools for data quality, privacy, and compliance.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-teal-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹14-32 LPA"
  }
];
