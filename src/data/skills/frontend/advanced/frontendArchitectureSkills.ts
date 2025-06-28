
import { Code, Zap, Globe, Settings, Monitor, Target, Users, Shield } from "lucide-react";
import { Skill } from "../../../skillsData";

export const frontendArchitectureSkills: Skill[] = [
  {
    id: "micro-frontends",
    name: "Micro-Frontend Architecture",
    category: "Programming",
    description: "Building scalable applications with independent, deployable frontend modules.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "web-components",
    name: "Web Components",
    category: "Programming",
    description: "Creating reusable custom HTML elements with encapsulated functionality.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Settings,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "progressive-web-apps",
    name: "Progressive Web Apps (PWA)",
    category: "Programming",
    description: "Building app-like web experiences with offline functionality and push notifications.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "web-performance",
    name: "Web Performance Optimization",
    category: "Programming",
    description: "Advanced techniques for optimizing loading speed, rendering, and user experience.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "accessibility-engineering",
    name: "Web Accessibility (WCAG)",
    category: "Programming",
    description: "Building inclusive web applications that work for users with disabilities.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-teal-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "web-security",
    name: "Frontend Security",
    category: "Programming",
    description: "Implementing security best practices, CSP, XSS prevention, and secure authentication.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹16-38 LPA"
  },
  {
    id: "state-management",
    name: "Advanced State Management",
    category: "Programming",
    description: "Complex state management patterns, Redux, Zustand, and application architecture.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "real-time-web-apps",
    name: "Real-time Web Applications",
    category: "Programming",
    description: "Building applications with WebSockets, Server-Sent Events, and real-time collaboration.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Monitor,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹15-35 LPA"
  }
];
