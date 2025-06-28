
import { Server, Cloud, Settings, Shield, Zap, Database } from "lucide-react";
import { Skill } from "../../../skillsData";

export const infrastructureSkills: Skill[] = [
  {
    id: "terraform",
    name: "Terraform",
    category: "Emerging Technology",
    description: "Infrastructure as Code tool for building, changing, and versioning cloud infrastructure.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Settings,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "ansible",
    name: "Ansible",
    category: "Emerging Technology",
    description: "Configuration management and application deployment automation platform.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Server,
    color: "from-red-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "chef",
    name: "Chef",
    category: "Emerging Technology",
    description: "Configuration management tool for automating infrastructure deployment and management.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-orange-600 to-yellow-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹13-28 LPA"
  },
  {
    id: "puppet",
    name: "Puppet",
    category: "Emerging Technology",
    description: "Configuration management platform for automating system administration tasks.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Shield,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹12-26 LPA"
  }
];
