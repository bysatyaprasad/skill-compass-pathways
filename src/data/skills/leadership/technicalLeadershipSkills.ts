
import { Users, Target, Brain, TrendingUp } from "lucide-react";
import { Skill } from "../../skillsData";

export const technicalLeadershipSkills: Skill[] = [
  {
    id: "technical-team-leadership",
    name: "Technical Team Leadership",
    category: "Technical Leadership",
    description: "Leading engineering teams, mentoring developers, and making technical decisions.",
    status: "stable",
    relevancePeriod: "Next 20+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹20-50 LPA"
  },
  {
    id: "technical-strategy",
    name: "Technical Strategy & Planning",
    category: "Technical Leadership",
    description: "Creating technology roadmaps, architecture decisions, and strategic planning.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-green-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "engineering-management",
    name: "Engineering Management",
    category: "Technical Leadership",
    description: "Managing engineering processes, hiring, performance reviews, and team growth.",
    status: "stable",
    relevancePeriod: "Next 20+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "10-15 months",
    salary: "₹25-60 LPA"
  },
  {
    id: "technology-evangelism",
    name: "Technology Evangelism",
    category: "Technical Leadership",
    description: "Promoting technology adoption, speaking at conferences, and building developer communities.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: TrendingUp,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹15-35 LPA"
  }
];
