
import { Zap, Code, Globe, Settings } from "lucide-react";
import { Skill } from "../../skillsData";

export const webAssemblySkills: Skill[] = [
  {
    id: "webassembly-wasm",
    name: "WebAssembly (WASM)",
    category: "Programming",
    description: "High-performance web applications using WebAssembly for near-native speed in browsers.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "rust-for-web",
    name: "Rust for Web Development",
    category: "Programming",
    description: "Building high-performance web applications and WebAssembly modules using Rust.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-orange-700 to-red-700",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "blazor",
    name: "Blazor WebAssembly",
    category: "Programming",
    description: "Building interactive web UIs using C# instead of JavaScript with Blazor WebAssembly.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹10-25 LPA"
  }
];
