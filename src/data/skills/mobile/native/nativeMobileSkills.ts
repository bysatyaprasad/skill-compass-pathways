
import { Smartphone } from "lucide-react";
import { Skill } from "../../../skillsData";

export const nativeMobileSkills: Skill[] = [
  {
    id: "swift",
    name: "Swift",
    category: "Mobile Development",
    description: "Apple's programming language for iOS, macOS, watchOS, and tvOS app development.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "kotlin",
    name: "Kotlin",
    category: "Mobile Development",
    description: "Modern programming language for Android development, fully interoperable with Java.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-purple-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹7-18 LPA"
  }
];
