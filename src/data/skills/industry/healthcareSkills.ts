
import { Heart, Scan, Stethoscope, Pill, Calendar, Users, Shield, Brain } from "lucide-react";
import { Skill } from "../../skillsData";

export const healthcareSkills: Skill[] = [
  {
    id: "telemedicine-platforms",
    name: "Telemedicine Platform Development",
    category: "Healthcare Industry",
    description: "Build video consultation platforms, remote patient monitoring, and digital health services.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Heart,
    color: "from-red-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "ehr-systems",
    name: "Electronic Health Record Systems",
    category: "Healthcare Industry",
    description: "Create comprehensive patient data management systems for hospitals and clinics.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Stethoscope,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹20-45 LPA"
  },
  {
    id: "medical-imaging-analysis",
    name: "Medical Imaging Analysis",
    category: "Healthcare Industry",
    description: "Develop AI-powered systems for analyzing X-rays, MRIs, and other medical imaging data.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Scan,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "10-15 months",
    salary: "₹25-60 LPA"
  },
  {
    id: "pharmacy-management-systems",
    name: "Pharmacy Management Systems",
    category: "Healthcare Industry",
    description: "Build prescription management, inventory tracking, and drug interaction checking systems.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Pill,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "hospital-management-systems",
    name: "Hospital Management Systems",
    category: "Healthcare Industry",
    description: "Create comprehensive hospital operations management including scheduling, billing, and resource allocation.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Calendar,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "health-data-analytics",
    name: "Health Data Analytics",
    category: "Healthcare Industry",
    description: "Analyze patient data to identify trends, predict outcomes, and improve healthcare delivery.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹22-50 LPA"
  },
  {
    id: "healthcare-compliance-systems",
    name: "Healthcare Compliance Systems",
    category: "Healthcare Industry",
    description: "Build systems ensuring HIPAA compliance, data security, and regulatory adherence.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: Shield,
    color: "from-gray-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹16-35 LPA"
  },
  {
    id: "patient-engagement-platforms",
    name: "Patient Engagement Platforms",
    category: "Healthcare Industry",
    description: "Create patient portals, appointment scheduling, and health education platforms.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-cyan-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹12-30 LPA"
  }
];
