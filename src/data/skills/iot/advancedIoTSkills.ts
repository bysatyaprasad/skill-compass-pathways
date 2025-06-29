
import { Zap, Settings, Wifi, Cpu } from "lucide-react";
import { Skill } from "../../skillsData";

export const advancedIoTSkills: Skill[] = [
  {
    id: "arduino-programming",
    name: "Arduino Programming",
    category: "Emerging Technology",
    description: "Programming microcontrollers for IoT devices and embedded systems using Arduino platform.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Cpu,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "raspberry-pi",
    name: "Raspberry Pi Development",
    category: "Emerging Technology",
    description: "Single-board computer programming for IoT projects and embedded applications.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Settings,
    color: "from-red-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹7-20 LPA"
  },
  {
    id: "mqtt-protocol",
    name: "MQTT Protocol",
    category: "Emerging Technology",
    description: "Lightweight messaging protocol for IoT device communication and data transmission.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "low",
    icon: Wifi,
    color: "from-blue-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "edge-computing",
    name: "Edge Computing",
    category: "Emerging Technology",
    description: "Distributed computing paradigm bringing computation closer to data sources and IoT devices.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "4-8 months",
    salary: "₹15-35 LPA"
  }
];
