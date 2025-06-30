
import { Building, MapPin, DollarSign, Users, BarChart3, Smartphone } from "lucide-react";
import { Skill } from "../../../skillsData";

export const propTechSkills: Skill[] = [
  {
    id: "property-management-systems",
    name: "Property Management Tech",
    category: "Business Solutions",
    description: "Digital solutions for property management, tenant relations, and real estate operations.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Building,
    color: "from-blue-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "real-estate-analytics",
    name: "Real Estate Analytics",
    category: "Data & Analytics",
    description: "Data analysis for property valuation, market trends, and investment decision-making.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "5-7 months",
    salary: "₹10-24 LPA"
  },
  {
    id: "virtual-property-tours",
    name: "Virtual Property Technology",
    category: "Emerging Technology",
    description: "VR/AR solutions for virtual property tours, 3D modeling, and immersive real estate experiences.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: MapPin,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "6-9 months",
    salary: "₹12-28 LPA"
  }
];
