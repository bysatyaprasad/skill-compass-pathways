
import { Code, Cpu } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const cppSkills: Skill[] = [
  {
    id: "cpp",
    name: "C++",
    category: "Programming",
    description: "High-performance programming language for system programming, game development, and embedded systems.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "qt-framework",
    name: "Qt Framework",
    category: "Programming",
    description: "Cross-platform application framework for developing GUI applications in C++.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-green-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "4-6 months",
    salary: "₹10-28 LPA"
  },
  {
    id: "opencv",
    name: "OpenCV",
    category: "Programming",
    description: "Open-source computer vision and machine learning software library for C++.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Cpu,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-35 LPA"
  }
];
