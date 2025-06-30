
import { Settings, Zap, BarChart3, Shield, Cog, Monitor } from "lucide-react";
import { Skill } from "../../../skillsData";

export const industry4Skills: Skill[] = [
  {
    id: "industrial-iot",
    name: "Industrial IoT (IIoT)",
    category: "Emerging Technology",
    description: "IoT solutions for manufacturing, predictive maintenance, and smart factory operations.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Settings,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "predictive-maintenance",
    name: "Predictive Maintenance Systems",
    category: "Emerging Technology",
    description: "AI-powered systems for predicting equipment failures and optimizing maintenance schedules.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Monitor,
    color: "from-blue-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹14-32 LPA"
  },
  {
    id: "digital-twin-technology",
    name: "Digital Twin Technology",
    category: "Emerging Technology",
    description: "Creating digital replicas of physical systems for simulation, monitoring, and optimization.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Cog,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹16-38 LPA"
  }
];
