
import { Scan } from "lucide-react";
import { Skill } from "../../../skillsData";

export const medicalTechSkills: Skill[] = [
  {
    id: "electronic-health-records",
    name: "Electronic Health Records (EHR)",
    category: "Healthcare Technology",
    description: "Digital systems for managing patient health information and medical records across healthcare providers.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Scan,
    color: "from-blue-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "telemedicine",
    name: "Telemedicine",
    category: "Healthcare Technology",
    description: "Remote healthcare delivery through digital communication technologies and platforms.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Scan,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹7-18 LPA"
  },
  {
    id: "medical-imaging",
    name: "Medical Imaging Technology",
    category: "Healthcare Technology",
    description: "Advanced imaging technologies for medical diagnosis and treatment planning.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Scan,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹10-25 LPA"
  }
];
