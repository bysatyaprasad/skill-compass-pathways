
import { Heart, Brain, Monitor, Shield, Database, Users, Zap, Stethoscope } from "lucide-react";
import { Skill } from "../../skillsData";

export const healthcareSkills: Skill[] = [
  {
    id: "electronic-health-records",
    name: "Electronic Health Records (EHR)",
    category: "Healthcare Industry",
    description: "Implementing and managing digital patient records, HIPAA compliance, and healthcare data integration.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "telemedicine-platforms",
    name: "Telemedicine & Remote Care",
    category: "Healthcare Industry",
    description: "Building virtual consultation platforms, remote patient monitoring, and telehealth solutions.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Monitor,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "medical-imaging-analysis",
    name: "Medical Imaging & AI Diagnostics",
    category: "Healthcare Industry",
    description: "AI-powered medical image analysis, radiology systems, and diagnostic assistance tools.",
    status: "emerging",
    relevancePeriod: "Next 20+ years",
    demandLevel: "medium",
    icon: Brain,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹20-45 LPA"
  },
  {
    id: "healthcare-compliance",
    name: "Healthcare Regulatory Compliance",
    category: "Healthcare Industry",
    description: "HIPAA, FDA regulations, clinical trial compliance, and healthcare data security.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "clinical-decision-support",
    name: "Clinical Decision Support Systems",
    category: "Healthcare Industry",
    description: "AI-powered diagnostic aids, treatment recommendations, and clinical workflow optimization.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: Stethoscope,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "health-information-systems",
    name: "Health Information Systems",
    category: "Healthcare Industry",
    description: "Hospital management systems, patient portals, and healthcare data interoperability.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "wearable-health-tech",
    name: "Wearable Health Technology",
    category: "Healthcare Industry",
    description: "Fitness trackers, smartwatch health apps, and continuous health monitoring systems.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Heart,
    color: "from-pink-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "bioinformatics",
    name: "Bioinformatics & Genomics",
    category: "Healthcare Industry",
    description: "Genetic data analysis, personalized medicine, and computational biology applications.",
    status: "emerging",
    relevancePeriod: "Next 20+ years",
    demandLevel: "low",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "10-18 months",
    salary: "₹15-40 LPA"
  }
];
