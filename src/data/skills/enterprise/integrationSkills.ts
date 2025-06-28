
import { Database, Globe, Zap, Settings, Users, Shield, Target, Monitor } from "lucide-react";
import { Skill } from "../../skillsData";

export const integrationSkills: Skill[] = [
  {
    id: "sap-integration",
    name: "SAP Integration",
    category: "Business Solutions",
    description: "Integrating SAP ERP systems with other enterprise applications and cloud services.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-blue-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "salesforce-integration",
    name: "Salesforce Integration",
    category: "Business Solutions",
    description: "Connecting Salesforce CRM with external systems using APIs and middleware.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "mulesoft",
    name: "MuleSoft Integration",
    category: "Business Solutions",
    description: "Enterprise integration platform for connecting applications, data, and devices.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-8 months",
    salary: "₹18-35 LPA"
  },
  {
    id: "api-gateway",
    name: "API Gateway Management",
    category: "Business Solutions",
    description: "Managing API traffic, security, and analytics using enterprise gateway solutions.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Settings,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹15-32 LPA"
  },
  {
    id: "enterprise-service-bus",
    name: "Enterprise Service Bus (ESB)",
    category: "Business Solutions",
    description: "Implementing ESB architecture for enterprise application integration.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹16-38 LPA"
  },
  {
    id: "ipaas-platforms",
    name: "iPaaS Platforms",
    category: "Business Solutions",
    description: "Integration Platform as a Service for cloud-based application integration.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Monitor,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹14-30 LPA"
  },
  {
    id: "b2b-integration",
    name: "B2B Integration (EDI)",
    category: "Business Solutions",
    description: "Electronic Data Interchange for business-to-business communication and transactions.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-teal-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹12-25 LPA"
  },
  {
    id: "microservices-integration",
    name: "Microservices Integration",
    category: "Business Solutions",
    description: "Designing communication patterns and integration strategies for microservices architecture.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-red-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹18-40 LPA"
  }
];
