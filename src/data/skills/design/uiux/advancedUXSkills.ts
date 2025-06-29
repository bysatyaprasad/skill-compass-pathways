
import { Palette, Users, Eye, Target, Zap, Monitor, Smartphone, Settings } from "lucide-react";
import { Skill } from "../../../skillsData";

export const advancedUXSkills: Skill[] = [
  {
    id: "user-research",
    name: "User Research & Testing",
    category: "Design & Creative",
    description: "Conducting user interviews, usability testing, and behavioral analysis to inform design decisions.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "information-architecture",
    name: "Information Architecture",
    category: "Design & Creative",
    description: "Organizing and structuring content to create intuitive navigation and user flows.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Settings,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹7-20 LPA"
  },
  {
    id: "interaction-design",
    name: "Interaction Design",
    category: "Design & Creative",
    description: "Designing interactive elements and micro-interactions that enhance user experience.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "accessibility-design",
    name: "Accessibility (A11y) Design",
    category: "Design & Creative",
    description: "Creating inclusive designs that work for users with disabilities, following WCAG guidelines.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Eye,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "design-systems",
    name: "Design Systems",
    category: "Design & Creative",
    description: "Creating and maintaining comprehensive design systems for consistent user interfaces.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Palette,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "service-design",
    name: "Service Design",
    category: "Design & Creative",
    description: "Designing end-to-end service experiences across multiple touchpoints and channels.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Target,
    color: "from-teal-600 to-green-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "responsive-design",
    name: "Advanced Responsive Design",
    category: "Design & Creative",
    description: "Creating fluid, adaptive designs that work seamlessly across all devices and screen sizes.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "voice-ui-design",
    name: "Voice UI Design",
    category: "Design & Creative",
    description: "Designing conversational interfaces and voice user experiences for smart devices and applications.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Monitor,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹10-25 LPA"
  }
];
