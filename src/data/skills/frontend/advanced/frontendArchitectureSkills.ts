
import { Code, Zap, Globe, Shield } from "lucide-react";
import { Skill } from "../../../skillsData";

export const frontendArchitectureSkills: Skill[] = [
  {
    id: "micro-frontends",
    name: "Micro Frontends",
    category: "Programming",
    description: "Architectural pattern for building scalable frontend applications with independent deployable units.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "progressive-web-apps",
    name: "Progressive Web Apps",
    category: "Programming",
    description: "Building web applications that provide native app-like experiences with offline capabilities.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "web-performance",
    name: "Web Performance Optimization",
    category: "Programming",
    description: "Optimizing web applications for speed, Core Web Vitals, and user experience.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "web-accessibility",
    name: "Web Accessibility (WCAG)",
    category: "Programming",
    description: "Creating inclusive web experiences that are accessible to users with disabilities.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "jamstack",
    name: "JAMstack Development",
    category: "Programming",
    description: "Building fast, secure sites using JavaScript, APIs, and pre-built Markup.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-18 LPA"
  }
];
