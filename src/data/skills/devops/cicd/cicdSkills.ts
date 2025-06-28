
import { GitBranch, Zap, CheckCircle, Server, Settings, Monitor } from "lucide-react";
import { Skill } from "../../../skillsData";

export const cicdSkills: Skill[] = [
  {
    id: "jenkins",
    name: "Jenkins",
    category: "Emerging Technology",
    description: "Open-source automation server for building CI/CD pipelines and deployment workflows.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Settings,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    category: "Emerging Technology",
    description: "Native CI/CD platform integrated with GitHub for automating workflows and deployments.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: GitBranch,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "gitlab-ci",
    name: "GitLab CI/CD",
    category: "Emerging Technology",
    description: "Integrated continuous integration and deployment platform within GitLab ecosystem.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-orange-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹11-26 LPA"
  },
  {
    id: "azure-devops",
    name: "Azure DevOps",
    category: "Emerging Technology",
    description: "Microsoft's cloud-based DevOps platform for planning, development, and deployment.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: CheckCircle,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹13-30 LPA"
  }
];
