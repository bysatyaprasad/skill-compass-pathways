
import { Globe, Shield } from "lucide-react";
import { Skill } from "../../skillsData";

export const devopsSkills: Skill[] = [
  {
    id: "docker",
    name: "Docker",
    category: "Emerging Technology",
    description: "Containerization platform for packaging applications and their dependencies.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "Emerging Technology",
    description: "Container orchestration platform for automating deployment and scaling.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-blue-500 to-purple-500",
    difficulty: "advanced",
    timeToLearn: "6-8 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "jenkins",
    name: "Jenkins",
    category: "Emerging Technology",
    description: "Automation server for building, testing, and deploying applications.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-gray-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹7-18 LPA"
  },
  {
    id: "terraform",
    name: "Terraform",
    category: "Emerging Technology",
    description: "Infrastructure as Code tool for building and managing cloud infrastructure.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-purple-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "ansible",
    name: "Ansible",
    category: "Emerging Technology",
    description: "Automation tool for configuration management and application deployment.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-red-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "gitlab-ci",
    name: "GitLab CI/CD",
    category: "Emerging Technology",
    description: "Continuous integration and deployment platform integrated with GitLab.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹7-16 LPA"
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    category: "Emerging Technology",
    description: "Workflow automation and CI/CD platform integrated with GitHub repositories.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-gray-800 to-gray-600",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹6-15 LPA"
  }
];
