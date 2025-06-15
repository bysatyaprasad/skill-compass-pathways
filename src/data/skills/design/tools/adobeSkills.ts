
import { Camera, Palette } from "lucide-react";
import { Skill } from "../../../skillsData";

export const adobeSkills: Skill[] = [
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    category: "Design & Creative",
    description: "Industry-standard image editing and digital art software essential for graphic design, photography, and digital marketing.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Camera,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹3-10 LPA"
  },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    category: "Design & Creative",
    description: "Vector graphics editor used for creating logos, illustrations, and scalable graphics.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Palette,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹4-12 LPA"
  },
  {
    id: "after-effects",
    name: "Adobe After Effects",
    category: "Design & Creative",
    description: "Motion graphics and visual effects software for creating animations and video effects.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Camera,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹5-15 LPA"
  }
];
