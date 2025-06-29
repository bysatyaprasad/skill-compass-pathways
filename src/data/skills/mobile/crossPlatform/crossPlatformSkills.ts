
import { Smartphone, Zap, Globe, Settings } from "lucide-react";
import { Skill } from "../../../skillsData";

export const crossPlatformSkills: Skill[] = [
  {
    id: "react-native",
    name: "React Native",
    category: "Mobile Development",
    description: "Cross-platform mobile app development framework using React and JavaScript.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "Mobile Development",
    description: "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹9-25 LPA"
  },
  {
    id: "xamarin",
    name: "Xamarin",
    category: "Mobile Development",
    description: "Microsoft's cross-platform app development framework using C# and .NET.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Settings,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹10-24 LPA"
  },
  {
    id: "ionic",
    name: "Ionic",
    category: "Mobile Development",
    description: "Open-source SDK for hybrid mobile app development using web technologies.",
    status: "stable",
    relevancePeriod: "Next 5+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-blue-500 to-teal-500",
    difficulty: "beginner",
    timeToLearn: "2-4 months",
    salary: "₹6-18 LPA"
  }
];
