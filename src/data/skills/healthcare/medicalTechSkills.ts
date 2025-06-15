
import { Scan } from "lucide-react";
import { Skill } from "../../skillsData";

export const medicalTechSkills: Skill[] = [
  {
    id: "telemedicine",
    name: "Telemedicine",
    category: "Healthcare Technology",
    description: "Remote healthcare delivery using digital communication technologies to provide medical consultations and patient care.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Scan,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹6-15 LPA"
  },
  {
    id: "health-informatics",
    name: "Health Informatics",
    category: "Healthcare Technology",
    description: "Application of information technology and data analysis in healthcare to improve patient outcomes and system efficiency.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Scan,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹8-20 LPA"
  }
];
