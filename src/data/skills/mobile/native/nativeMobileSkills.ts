
import { Smartphone, Code, Settings, Zap } from "lucide-react";
import { Skill } from "../../../skillsData";

export const nativeMobileSkills: Skill[] = [
  {
    id: "ios-swift",
    name: "iOS Development (Swift)",
    category: "Mobile Development",
    description: "Native iOS app development using Swift programming language and Xcode IDE.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "android-kotlin",
    name: "Android Development (Kotlin)",
    category: "Mobile Development",
    description: "Native Android app development using Kotlin programming language and Android Studio.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹7-22 LPA"
  },
  {
    id: "swiftui",
    name: "SwiftUI",
    category: "Mobile Development",
    description: "Modern declarative UI framework for building iOS, macOS, watchOS, and tvOS applications.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹10-28 LPA"
  },
  {
    id: "jetpack-compose",
    name: "Jetpack Compose",
    category: "Mobile Development",
    description: "Modern toolkit for building native UI in Android applications using declarative programming.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Settings,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹12-30 LPA"
  }
];
