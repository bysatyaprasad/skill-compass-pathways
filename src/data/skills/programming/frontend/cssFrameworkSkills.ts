
import { Palette } from "lucide-react";
import { Skill } from "../../../skillsData";

export const cssFrameworkSkills: Skill[] = [
  {
    id: "tailwind-css",
    name: "Tailwind CSS",
    category: "Programming",
    description: "Utility-first CSS framework for rapidly building custom user interfaces.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Palette,
    color: "from-cyan-500 to-blue-500",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹5-16 LPA"
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "Programming",
    description: "Popular CSS framework for developing responsive and mobile-first websites.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Palette,
    color: "from-purple-500 to-indigo-500",
    difficulty: "beginner",
    timeToLearn: "1-2 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "material-ui",
    name: "Material-UI / MUI",
    category: "Programming",
    description: "React components implementing Google's Material Design principles.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Palette,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "styled-components",
    name: "Styled Components",
    category: "Programming",
    description: "CSS-in-JS library for styling React components with tagged template literals.",
    status: "stable",
    relevancePeriod: "Next 5+ years",
    demandLevel: "medium",
    icon: Palette,
    color: "from-pink-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹6-16 LPA"
  }
];
