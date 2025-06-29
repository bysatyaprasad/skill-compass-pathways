
import { Eye, Users, Smartphone, Globe } from "lucide-react";
import { Skill } from "../../skillsData";

export const accessibilitySkills: Skill[] = [
  {
    id: "web-accessibility",
    name: "Web Accessibility (WCAG)",
    category: "Accessibility & Inclusion",
    description: "Creating accessible web applications following WCAG guidelines for users with disabilities.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Eye,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-18 LPA",
    isFoundational: true
  },
  {
    id: "inclusive-design",
    name: "Inclusive Design",
    category: "Accessibility & Inclusion",
    description: "Designing products that are usable by people with diverse abilities and backgrounds.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-22 LPA"
  },
  {
    id: "screen-reader-optimization",
    name: "Screen Reader Optimization",
    category: "Accessibility & Inclusion",
    description: "Optimizing applications for screen readers and assistive technologies.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Smartphone,
    color: "from-teal-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹7-16 LPA"
  },
  {
    id: "internationalization",
    name: "Internationalization (i18n)",
    category: "Accessibility & Inclusion",
    description: "Preparing applications for multiple languages, cultures, and regions.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹9-20 LPA"
  }
];
