
import { Truck, Package, BarChart3, Globe, Zap, Target, Database, Settings } from "lucide-react";
import { Skill } from "../../skillsData";

export const supplyChainSkills: Skill[] = [
  {
    id: "supply-chain-management",
    name: "Supply Chain Management",
    category: "Business & Finance",
    description: "Managing the flow of goods and services from raw materials to final products delivered to customers.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Truck,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "logistics-optimization",
    name: "Logistics Optimization",
    category: "Business & Finance",
    description: "Using data analytics and algorithms to optimize transportation, warehousing, and distribution.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-green-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-35 LPA"
  },
  {
    id: "demand-planning",
    name: "Demand Planning",
    category: "Business & Finance",
    description: "Forecasting customer demand to optimize inventory levels and production planning.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-28 LPA"
  },
  {
    id: "warehouse-management",
    name: "Warehouse Management Systems",
    category: "Business & Finance",
    description: "Managing warehouse operations, inventory tracking, and order fulfillment processes.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Package,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "procurement-management",
    name: "Procurement Management",
    category: "Business & Finance",
    description: "Strategic sourcing, vendor management, and procurement process optimization.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Settings,
    color: "from-teal-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹9-24 LPA"
  },
  {
    id: "sap-supply-chain",
    name: "SAP Supply Chain Solutions",
    category: "Business & Finance",
    description: "Implementing and managing SAP modules for supply chain and logistics operations.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-blue-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹15-40 LPA"
  }
];
