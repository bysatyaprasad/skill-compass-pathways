
import { Database, Shield, FileText, Users, Target, Settings } from "lucide-react";
import { Skill } from "../../../skillsData";

export const dataGovernanceSkills: Skill[] = [
  {
    id: "data-governance",
    name: "Data Governance",
    category: "Data & Analytics",
    description: "Framework for managing data availability, usability, integrity, and security across organizations.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "data-lineage",
    name: "Data Lineage & Cataloging",
    category: "Data & Analytics",
    description: "Tracking data flow from source to destination and maintaining comprehensive data catalogs.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: FileText,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "data-quality-management",
    name: "Data Quality Management",
    category: "Data & Analytics",
    description: "Ensuring accuracy, completeness, consistency, and reliability of data across systems.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹9-22 LPA"
  },
  {
    id: "master-data-management",
    name: "Master Data Management (MDM)",
    category: "Data & Analytics",
    description: "Creating single source of truth for critical business data across enterprise systems.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-indigo-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹14-32 LPA"
  }
];
