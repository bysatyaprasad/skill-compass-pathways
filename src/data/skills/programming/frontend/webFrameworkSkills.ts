
import { Globe } from "lucide-react";
import { Skill } from "../../../skillsData";

export const webFrameworkSkills: Skill[] = [
  {
    id: "html",
    name: "HTML",
    category: "Programming",
    description: "Standard markup language for creating web pages and web applications.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-orange-500 to-red-500",
    difficulty: "beginner",
    timeToLearn: "1-2 months",
    salary: "₹3-10 LPA",
    isFoundational: true
  },
  {
    id: "css",
    name: "CSS",
    category: "Programming",
    description: "Style sheet language for describing the presentation of web pages.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-blue-500 to-purple-500",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹3-12 LPA",
    isFoundational: true
  },
  {
    id: "sass",
    name: "Sass/SCSS",
    category: "Programming",
    description: "CSS preprocessor that adds features like variables, nesting, and mixins to CSS.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-pink-500 to-red-500",
    difficulty: "intermediate",
    timeToLearn: "1-2 months",
    salary: "₹4-14 LPA"
  },
  {
    id: "webpack",
    name: "Webpack",
    category: "Programming",
    description: "Module bundler for modern JavaScript applications with dependency management.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-blue-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "2-4 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "vite",
    name: "Vite",
    category: "Programming",
    description: "Fast build tool for modern web projects with instant hot module replacement.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "1-3 months",
    salary: "₹6-18 LPA"
  }
];
