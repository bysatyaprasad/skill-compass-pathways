
import { Shield, Lock, Eye, Bug, Zap, Search, Database, Globe } from "lucide-react";
import { Skill } from "../../../skillsData";

export const specializedSecuritySkills: Skill[] = [
  {
    id: "zero-trust-security",
    name: "Zero Trust Security",
    category: "Emerging Technology",
    description: "Security model that requires verification for every user and device accessing systems.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹20-50 LPA"
  },
  {
    id: "devsecops",
    name: "DevSecOps",
    category: "Emerging Technology",
    description: "Integrating security practices into DevOps workflows and CI/CD pipelines.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Lock,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹22-55 LPA"
  },
  {
    id: "container-security",
    name: "Container Security",
    category: "Emerging Technology",
    description: "Securing containerized applications, Docker images, and Kubernetes clusters.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹18-42 LPA"
  },
  {
    id: "threat-hunting",
    name: "Threat Hunting",
    category: "Emerging Technology",
    description: "Proactively searching for cyber threats and advanced persistent threats in networks.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Search,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "9-15 months",
    salary: "₹25-60 LPA"
  },
  {
    id: "red-team-operations",
    name: "Red Team Operations",
    category: "Emerging Technology",
    description: "Simulating real-world attacks to test organization's security defenses.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Bug,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "12-18 months",
    salary: "₹30-70 LPA"
  },
  {
    id: "blue-team-defense",
    name: "Blue Team Defense",
    category: "Emerging Technology",
    description: "Defending against cyberattacks through monitoring, detection, and response.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: Eye,
    color: "from-blue-600 to-indigo-600",
    difficulty: "advanced",
    timeToLearn: "10-15 months",
    salary: "₹22-50 LPA"
  }
];
