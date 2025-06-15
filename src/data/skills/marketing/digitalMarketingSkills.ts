
import { Globe, ArrowUpRight } from "lucide-react";
import { Skill } from "../../skillsData";

export const digitalMarketingSkills: Skill[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    category: "Digital Marketing",
    description: "Master paid advertising on Google's platform to drive targeted traffic and conversions for businesses of all sizes.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-red-500 to-pink-500",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "seo",
    name: "SEO",
    category: "Digital Marketing",
    description: "Search Engine Optimization techniques to improve website visibility and organic traffic from search engines.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: ArrowUpRight,
    color: "from-green-500 to-blue-500",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹3-10 LPA"
  }
];
