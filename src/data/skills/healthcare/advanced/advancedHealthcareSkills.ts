
import { Heart, Brain, Shield, Database, Monitor, Zap, Activity, Eye } from "lucide-react";
import { Skill } from "../../../skillsData";

export const advancedHealthcareSkills: Skill[] = [
  {
    id: "medical-imaging-ai",
    name: "Medical Imaging AI",
    category: "Healthcare Technology",
    description: "Developing AI systems for medical image analysis, diagnosis, and radiology applications.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Eye,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹20-50 LPA"
  },
  {
    id: "telemedicine-platforms",
    name: "Telemedicine Platform Development",
    category: "Healthcare Technology",
    description: "Building secure, HIPAA-compliant platforms for remote healthcare delivery and consultation.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Monitor,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "ehr-systems",
    name: "Electronic Health Records (EHR)",
    category: "Healthcare Technology",
    description: "Developing and implementing electronic health record systems and health information exchanges.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "wearable-health-tech",
    name: "Wearable Health Technology",
    category: "Healthcare Technology",
    description: "Developing applications for health monitoring devices, fitness trackers, and medical wearables.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Activity,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "healthcare-blockchain",
    name: "Healthcare Blockchain",
    category: "Healthcare Technology",
    description: "Implementing blockchain solutions for secure health data sharing and pharmaceutical supply chain.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Shield,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "genomics-bioinformatics",
    name: "Genomics & Bioinformatics",
    category: "Healthcare Technology",
    description: "Analyzing genetic data, developing precision medicine solutions, and genomic research tools.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: Brain,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-15 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "mental-health-apps",
    name: "Mental Health Applications",
    category: "Healthcare Technology",
    description: "Developing digital therapeutics and mental health support applications with evidence-based interventions.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Heart,
    color: "from-pink-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "iot-medical-devices",
    name: "IoT Medical Devices",
    category: "Healthcare Technology",
    description: "Developing connected medical devices and remote patient monitoring systems.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-teal-600 to-green-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-40 LPA"
  }
];
