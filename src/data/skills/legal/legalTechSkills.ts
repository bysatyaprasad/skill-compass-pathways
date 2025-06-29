
import { Scale, FileText, Shield, Database, Search, Bot, Lock, Globe } from "lucide-react";
import { Skill } from "../../skillsData";

export const legalTechSkills: Skill[] = [
  {
    id: "legal-research-ai",
    name: "AI-Powered Legal Research",
    category: "Emerging Technology",
    description: "Using AI tools like Westlaw Edge, LexisNexis+, and custom AI for legal case research and analysis.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Search,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹12-35 LPA"
  },
  {
    id: "contract-automation",
    name: "Contract Automation & Management",
    category: "Business & Finance",
    description: "Implementing automated contract generation, review, and lifecycle management systems.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: FileText,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹10-30 LPA"
  },
  {
    id: "legal-compliance-tech",
    name: "Legal Compliance Technology",
    category: "Emerging Technology",
    description: "RegTech solutions for automated compliance monitoring, reporting, and risk management.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "e-discovery",
    name: "E-Discovery & Digital Forensics",
    category: "Emerging Technology",
    description: "Electronic document discovery, data preservation, and digital evidence analysis for litigation.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "legal-chatbots",
    name: "Legal Chatbots & Virtual Assistants",
    category: "Emerging Technology",
    description: "Developing AI-powered legal assistants for client intake, document preparation, and legal guidance.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Bot,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-35 LPA"
  },
  {
    id: "intellectual-property-tech",
    name: "IP Management Technology",
    category: "Business & Finance",
    description: "Patent search automation, trademark monitoring, and IP portfolio management systems.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Lock,
    color: "from-indigo-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹10-28 LPA"
  }
];
