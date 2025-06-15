
import { Globe, Cloud, Smartphone, Shield, Zap, Users, BarChart3, Cog } from "lucide-react";
import { Skill } from "../../skillsData";

export const digitalTransformationSkills: Skill[] = [
  {
    id: "legacy-system-modernization",
    name: "Legacy System Modernization",
    category: "Digital Transformation",
    description: "Transform outdated business systems into modern, cloud-based, and scalable solutions.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Cog,
    color: "from-gray-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹20-45 LPA"
  },
  {
    id: "digital-workplace-solutions",
    name: "Digital Workplace Implementation",
    category: "Digital Transformation",
    description: "Create remote work platforms, collaboration tools, and digital employee experiences.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "cloud-migration-services",
    name: "Cloud Migration Services",
    category: "Digital Transformation",
    description: "Migrate businesses from on-premise to cloud infrastructure with minimal downtime.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Cloud,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "digital-security-implementation",
    name: "Digital Security Implementation",
    category: "Digital Transformation",
    description: "Implement comprehensive cybersecurity solutions for businesses going digital.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹22-50 LPA"
  },
  {
    id: "omnichannel-customer-experience",
    name: "Omnichannel Customer Experience",
    category: "Digital Transformation",
    description: "Create seamless customer experiences across web, mobile, social, and physical channels.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-green-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "iot-integration-solutions",
    name: "IoT Integration Solutions",
    category: "Digital Transformation",
    description: "Connect physical devices and equipment to digital systems for smart business operations.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-38 LPA"
  },
  {
    id: "data-driven-decision-systems",
    name: "Data-Driven Decision Systems",
    category: "Digital Transformation",
    description: "Implement analytics and AI to help businesses make data-driven strategic decisions.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "9-15 months",
    salary: "₹25-55 LPA"
  },
  {
    id: "mobile-first-transformation",
    name: "Mobile-First Business Transformation",
    category: "Digital Transformation",
    description: "Transform businesses to be mobile-first with responsive apps and mobile-optimized processes.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-pink-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹12-30 LPA"
  }
];
