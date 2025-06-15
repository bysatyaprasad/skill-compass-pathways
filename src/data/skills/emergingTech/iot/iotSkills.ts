
import { Smartphone, Zap } from "lucide-react";
import { Skill } from "../../../skillsData";

export const iotSkills: Skill[] = [
  {
    id: "iot-development",
    name: "IoT Development",
    category: "Emerging Technology",
    description: "Building connected devices and systems for the Internet of Things ecosystem.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "6-8 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "arduino",
    name: "Arduino",
    category: "Emerging Technology",
    description: "Open-source electronics platform for building interactive projects and prototypes.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-cyan-600 to-green-600",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "raspberry-pi",
    name: "Raspberry Pi",
    category: "Emerging Technology",
    description: "Small single-board computer for learning programming and building IoT projects.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-red-600 to-pink-600",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹5-14 LPA"
  },
  {
    id: "embedded-systems",
    name: "Embedded Systems",
    category: "Emerging Technology",
    description: "Computer systems with dedicated functions within larger mechanical systems.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹8-22 LPA"
  }
];
