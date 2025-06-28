
import { Heart, Shield, Brain, Activity, Stethoscope, Pill } from "lucide-react";
import { Skill } from "../../skillsData";

export const advancedHealthcareSkills: Skill[] = [
  {
    id: "telemedicine",
    name: "Telemedicine Platforms",
    category: "Healthcare Technology",
    description: "Building remote healthcare consultation platforms with video calling and patient management systems.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Heart,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "ehr-systems",
    name: "Electronic Health Records",
    category: "Healthcare Technology",
    description: "Developing secure patient data management systems compliant with healthcare regulations.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-green-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "medical-imaging",
    name: "Medical Imaging Software",
    category: "Healthcare Technology",
    description: "Creating software for processing and analyzing medical images like X-rays, MRIs, and CT scans.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Brain,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "10-15 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "health-monitoring",
    name: "Health Monitoring IoT",
    category: "Healthcare Technology",
    description: "Developing wearable devices and IoT solutions for continuous patient health monitoring.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Activity,
    color: "from-red-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹16-38 LPA"
  },
  {
    id: "clinical-decision-support",
    name: "Clinical Decision Support Systems",
    category: "Healthcare Technology",
    description: "AI-powered systems to assist healthcare providers in making informed treatment decisions.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Stethoscope,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "12-18 months",
    salary: "₹22-50 LPA"
  },
  {
    id: "pharmacy-management",
    name: "Pharmacy Management Systems",
    category: "Healthcare Technology",
    description: "Building comprehensive pharmacy inventory, prescription, and patient management systems.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Pill,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹10-25 LPA"
  }
];
