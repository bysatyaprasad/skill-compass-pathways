
import { Code, Zap, Database, Shield, Globe, Settings, Cpu, Terminal } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const specializedLanguages: Skill[] = [
  {
    id: "kotlin",
    name: "Kotlin",
    category: "Programming",
    description: "Modern programming language for Android development and server-side applications, interoperable with Java.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "swift",
    name: "Swift",
    category: "Programming",
    description: "Apple's programming language for iOS, macOS, watchOS, and tvOS app development.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "dart-flutter",
    name: "Dart (Flutter)",
    category: "Programming",
    description: "Google's programming language used with Flutter framework for cross-platform mobile development.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹7-20 LPA"
  },
  {
    id: "scala",
    name: "Scala",
    category: "Programming",
    description: "Functional and object-oriented programming language, popular for big data processing with Apache Spark.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "elixir",
    name: "Elixir",
    category: "Programming",
    description: "Dynamic, functional language for building scalable and maintainable real-time applications.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "low",
    icon: Zap,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "clojure",
    name: "Clojure",
    category: "Programming",
    description: "Dynamic, functional programming language that runs on the Java Virtual Machine (JVM).",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "low",
    icon: Code,
    color: "from-green-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "haskell",
    name: "Haskell",
    category: "Programming",
    description: "Pure functional programming language with strong type system, used in finance and research.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "low",
    icon: Cpu,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "solidity",
    name: "Solidity",
    category: "Programming",
    description: "Programming language for writing smart contracts on Ethereum and other blockchain platforms.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Shield,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "4-7 months",
    salary: "₹15-40 LPA"
  }
];
