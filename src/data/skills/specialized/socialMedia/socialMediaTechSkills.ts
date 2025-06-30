
import { Share2, TrendingUp, Users, BarChart3, Target, Zap } from "lucide-react";
import { Skill } from "../../../skillsData";

export const socialMediaTechSkills: Skill[] = [
  {
    id: "social-media-automation",
    name: "Social Media Automation",
    category: "Digital Marketing",
    description: "Automating social media posting, engagement, and analytics using APIs and tools.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "social-listening-tools",
    name: "Social Listening & Monitoring",
    category: "Digital Marketing",
    description: "Monitoring brand mentions, sentiment analysis, and social media intelligence gathering.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹7-20 LPA"
  },
  {
    id: "influencer-marketing-tech",
    name: "Influencer Marketing Technology",
    category: "Digital Marketing",
    description: "Platforms and tools for influencer discovery, campaign management, and ROI measurement.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Share2,
    color: "from-pink-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-22 LPA"
  }
];
