
import { Globe, Zap, Settings, Database, Shield, Monitor, Link, Workflow } from "lucide-react";
import { Skill } from "../../skillsData";

export const integrationSkills: Skill[] = [
  {
    id: "api-gateway",
    name: "API Gateway Management",
    category: "Emerging Technology",
    description: "Managing and securing API traffic with gateways like Kong, AWS API Gateway, and Azure API Management.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "webhooks",
    name: "Webhooks & Event-Driven Architecture",
    category: "Programming",
    description: "Implementing real-time event-driven communication between systems using webhooks and pub/sub patterns.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "graphql",
    name: "GraphQL",
    category: "Programming",
    description: "Modern API query language and runtime for building flexible and efficient APIs.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-pink-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "microservices",
    name: "Microservices Architecture",
    category: "Programming",
    description: "Designing and implementing distributed systems using microservices patterns and best practices.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Settings,
    color: "from-green-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "service-mesh",
    name: "Service Mesh (Istio/Linkerd)",
    category: "Emerging Technology",
    description: "Managing service-to-service communication in microservices with service mesh technologies.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Link,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "4-7 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "enterprise-service-bus",
    name: "Enterprise Service Bus (ESB)",
    category: "Business Solutions",
    description: "Implementing enterprise integration patterns using ESB technologies like MuleSoft and IBM Integration Bus.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Workflow,
    color: "from-orange-600 to-yellow-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹14-32 LPA"
  }
];
