
import { Cloud, GitBranch, Zap, Shield, Settings, Monitor, Package, Workflow } from "lucide-react";
import { Skill } from "../../skillsData";

export const devopsSkills: Skill[] = [
  {
    id: "docker",
    name: "Docker",
    category: "Emerging Technology",
    description: "Containerization platform for packaging applications and their dependencies into portable containers.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Package,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "Emerging Technology",
    description: "Container orchestration platform for managing, scaling, and deploying containerized applications.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Cloud,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "jenkins",
    name: "Jenkins",
    category: "Emerging Technology",
    description: "Open-source automation server for continuous integration and continuous deployment (CI/CD).",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: GitBranch,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "terraform",
    name: "Terraform",
    category: "Emerging Technology",
    description: "Infrastructure as Code tool for building, changing, and versioning infrastructure safely and efficiently.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Settings,
    color: "from-green-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "4-7 months",
    salary: "₹12-35 LPA"
  },
  {
    id: "ansible",
    name: "Ansible",
    category: "Emerging Technology",
    description: "Configuration management and application deployment tool for automating IT infrastructure.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Workflow,
    color: "from-red-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹10-28 LPA"
  },
  {
    id: "prometheus",
    name: "Prometheus",
    category: "Emerging Technology",
    description: "Monitoring and alerting system for collecting metrics from configured targets at given intervals.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Monitor,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "grafana",
    name: "Grafana",
    category: "Emerging Technology",
    description: "Open-source analytics and monitoring solution for creating dashboards and visualizing metrics.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Monitor,
    color: "from-purple-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "gitlab-ci",
    name: "GitLab CI/CD",
    category: "Emerging Technology",
    description: "Continuous integration and deployment platform integrated with GitLab version control.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: GitBranch,
    color: "from-orange-500 to-red-500",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹8-20 LPA"
  }
];
