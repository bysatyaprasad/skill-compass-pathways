
import { Database, Zap, Code, Globe } from "lucide-react";
import { Skill } from "../../../skillsData";

export const graphqlSkills: Skill[] = [
  {
    id: "graphql",
    name: "GraphQL",
    category: "Programming",
    description: "Query language and runtime for APIs that allows clients to request exactly the data they need.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-pink-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "apollo-graphql",
    name: "Apollo GraphQL",
    category: "Programming",
    description: "Comprehensive GraphQL platform for building and managing APIs with advanced caching and tooling.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "hasura",
    name: "Hasura",
    category: "Programming",
    description: "Instant GraphQL APIs for your databases with real-time subscriptions and authorization.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹10-24 LPA"
  },
  {
    id: "graphql-federation",
    name: "GraphQL Federation",
    category: "Programming",
    description: "Architecture for composing multiple GraphQL services into a single unified API gateway.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "4-6 months",
    salary: "₹14-32 LPA"
  }
];
