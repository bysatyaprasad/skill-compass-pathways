
import { Globe, Zap, Settings, Monitor, Lock, Code } from "lucide-react";
import { Skill } from "../../skillsData";

export const apiManagementSkills: Skill[] = [
  {
    id: "api-design-architecture",
    name: "API Design & Architecture",
    category: "Programming",
    description: "Designing scalable, maintainable APIs using REST, GraphQL, and modern architectural patterns.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "api-testing-automation",
    name: "API Testing & Automation",
    category: "Quality Assurance",
    description: "Automated testing of APIs including functional, performance, and security testing.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "api-monitoring-observability",
    name: "API Monitoring & Observability",
    category: "Emerging Technology",
    description: "Real-time monitoring, logging, and performance analysis of API ecosystems.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Monitor,
    color: "from-purple-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹10-24 LPA"
  },
  {
    id: "api-security",
    name: "API Security",
    category: "Cybersecurity & Privacy",
    description: "Securing APIs with OAuth, JWT, rate limiting, and advanced threat protection.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Lock,
    color: "from-red-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹12-30 LPA"
  }
];
