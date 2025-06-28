
import { Zap, Target, Users, Globe, Brain, Settings, TrendingUp, Monitor } from "lucide-react";
import { Skill } from "../../skillsData";

export const digitalTransformationSkills: Skill[] = [
  {
    id: "digital-strategy",
    name: "Digital Strategy Consulting",
    category: "Digital Transformation",
    description: "Developing comprehensive digital transformation strategies for organizations.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹20-50 LPA"
  },
  {
    id: "change-management",
    name: "Digital Change Management",
    category: "Digital Transformation",
    description: "Managing organizational change during digital transformation initiatives.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "6-9 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "innovation-management",
    name: "Innovation Management",
    category: "Digital Transformation",
    description: "Leading innovation processes and managing innovation portfolios in organizations.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: Brain,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "digital-workplace",
    name: "Digital Workplace Design",
    category: "Digital Transformation",
    description: "Creating digital work environments that enhance productivity and collaboration.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "customer-experience-design",
    name: "Digital Customer Experience",
    category: "Digital Transformation",
    description: "Designing and optimizing digital customer journeys and touchpoints.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹14-32 LPA"
  },
  {
    id: "agile-transformation",
    name: "Agile Transformation",
    category: "Digital Transformation",
    description: "Leading organizational transformation to agile methodologies and practices.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹16-38 LPA"
  },
  {
    id: "digital-twin",
    name: "Digital Twin Development",
    category: "Digital Transformation",
    description: "Creating digital representations of physical systems for simulation and optimization.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: Monitor,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹22-50 LPA"
  },
  {
    id: "business-model-innovation",
    name: "Business Model Innovation",
    category: "Digital Transformation",
    description: "Reimagining business models for the digital age with new value propositions.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: TrendingUp,
    color: "from-teal-600 to-green-600",
    difficulty: "advanced",
    timeToLearn: "8-15 months",
    salary: "₹25-60 LPA"
  }
];
