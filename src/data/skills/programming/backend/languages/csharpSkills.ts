
import { Code } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const csharpSkills: Skill[] = [
  {
    id: "csharp",
    name: "C#",
    category: "Programming",
    description: "Modern, object-oriented programming language developed by Microsoft for building enterprise applications.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹7-20 LPA"
  },
  {
    id: "dotnet",
    name: ".NET Framework",
    category: "Programming",
    description: "Microsoft's development platform for building and running applications on Windows.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "5-7 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "aspnet-core",
    name: "ASP.NET Core",
    category: "Programming",
    description: "Cross-platform framework for building modern web applications and APIs.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹9-24 LPA"
  }
];
