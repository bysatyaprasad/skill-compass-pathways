
import { Headphones } from "lucide-react";
import { Skill } from "../../../skillsData";

export const contentMarketingSkills: Skill[] = [
  {
    id: "content-marketing",
    name: "Content Marketing",
    category: "Digital Marketing",
    description: "Creating and distributing valuable, relevant content to attract and retain a clearly defined audience.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Headphones,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹4-14 LPA"
  },
  {
    id: "copywriting",
    name: "Copywriting",
    category: "Digital Marketing",
    description: "Writing persuasive content that drives action, from advertisements to email campaigns and website copy.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Headphones,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹5-16 LPA"
  }
];
