
import { Wifi, Zap, Settings, Monitor, Smartphone, Home } from "lucide-react";
import { Skill } from "../../skillsData";

export const advancedIoTSkills: Skill[] = [
  {
    id: "arduino",
    name: "Arduino",
    category: "Emerging Technology",
    description: "Open-source electronics platform for building IoT prototypes and embedded systems projects.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "raspberry-pi",
    name: "Raspberry Pi",
    category: "Emerging Technology",
    description: "Single-board computer for IoT projects, home automation, and small-scale computing applications.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Monitor,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹7-20 LPA"
  },
  {
    id: "mqtt",
    name: "MQTT Protocol",
    category: "Emerging Technology",
    description: "Lightweight messaging protocol for IoT devices to communicate efficiently with minimal bandwidth.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Wifi,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "smart-home",
    name: "Smart Home Systems",
    category: "Emerging Technology",
    description: "Developing integrated home automation systems for lighting, security, and appliance control.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Home,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "industrial-iot",
    name: "Industrial IoT (IIoT)",
    category: "Emerging Technology",
    description: "Implementing IoT solutions for manufacturing, predictive maintenance, and industrial automation.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Settings,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "edge-computing",
    name: "Edge Computing",
    category: "Emerging Technology",
    description: "Processing data closer to IoT devices to reduce latency and improve real-time decision making.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹16-38 LPA"
  }
];
