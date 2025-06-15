
import { Headphones } from "lucide-react";
import { Skill } from "../../../skillsData";

export const socialMediaSkills: Skill[] = [
  {
    id: "social-media-marketing",
    name: "Social Media Marketing",
    category: "Digital Marketing",
    description: "Strategic promotion of brands and content across social platforms to build audience engagement and drive business results.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Headphones,
    color: "from-pink-600 to-purple-600",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹3-12 LPA"
  },
  {
    id: "influencer-marketing",
    name: "Influencer Marketing",
    category: "Digital Marketing",
    description: "Collaborating with content creators and influencers to reach target audiences through authentic brand partnerships.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "high",
    icon: Headphones,
    color: "from-orange-500 to-pink-500",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹4-15 LPA"
  }
];
