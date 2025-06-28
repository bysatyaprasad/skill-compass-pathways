
import { Palette, Users, Eye, Smartphone, Monitor, Lightbulb } from "lucide-react";
import { Skill } from "../../skillsData";

export const uxuiSkills: Skill[] = [
  {
    id: "figma",
    name: "Figma",
    category: "Design & Creative",
    description: "Collaborative design tool for creating user interfaces, prototypes, and design systems.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Palette,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "adobe-xd",
    name: "Adobe XD",
    category: "Design & Creative",
    description: "Vector-based user experience design tool for web and mobile app prototyping and wireframing.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Palette,
    color: "from-pink-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹5-16 LPA"
  },
  {
    id: "user-research",
    name: "User Research",
    category: "Design & Creative",
    description: "Conducting user interviews, surveys, and usability testing to understand user needs and behavior.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "interaction-design",
    name: "Interaction Design",
    category: "Design & Creative",
    description: "Designing interactive elements and user flows to create engaging and intuitive user experiences.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Eye,
    color: "from-green-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "responsive-design",
    name: "Responsive Design",
    category: "Design & Creative",
    description: "Creating designs that work seamlessly across different devices and screen sizes.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "design-systems",
    name: "Design Systems",
    category: "Design & Creative",
    description: "Creating consistent, reusable design components and guidelines for scalable product design.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Monitor,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-8 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "usability-testing",
    name: "Usability Testing",
    category: "Design & Creative",
    description: "Evaluating user interfaces by testing them with real users to identify usability issues.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Eye,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹7-20 LPA"
  },
  {
    id: "prototyping",
    name: "Prototyping",
    category: "Design & Creative",
    description: "Creating interactive mockups and prototypes to test and validate design concepts before development.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Lightbulb,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹6-18 LPA"
  }
];
