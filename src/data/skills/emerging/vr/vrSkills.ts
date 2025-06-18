
import { Eye, Smartphone, Gamepad2, Monitor } from "lucide-react";
import { Skill } from "../../../skillsData";

export const vrSkills: Skill[] = [
  {
    id: "vr-development",
    name: "Virtual Reality Development",
    category: "Emerging Technology",
    description: "Creating immersive VR experiences and applications for various platforms.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Eye,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "ar-development",
    name: "Augmented Reality Development",
    category: "Emerging Technology",
    description: "Building AR applications that overlay digital content on the real world.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-green-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "mixed-reality",
    name: "Mixed Reality Development",
    category: "Emerging Technology",
    description: "Creating experiences that blend physical and digital worlds seamlessly.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Monitor,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "10-15 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "arcore-arkit",
    name: "ARCore/ARKit Development",
    category: "Emerging Technology",
    description: "Building mobile AR apps using Google's ARCore and Apple's ARKit frameworks.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Smartphone,
    color: "from-blue-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "webxr",
    name: "WebXR Development",
    category: "Emerging Technology",
    description: "Creating VR and AR experiences that run in web browsers.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "low",
    icon: Gamepad2,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹12-28 LPA"
  }
];
