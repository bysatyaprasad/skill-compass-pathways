
import { Globe, Eye, Gamepad2, Users, Zap, Code, Palette, Shield } from "lucide-react";
import { Skill } from "../../../skillsData";

export const metaverseSkills: Skill[] = [
  {
    id: "metaverse-development",
    name: "Metaverse Development",
    category: "Emerging Technology",
    description: "Building immersive virtual worlds and experiences using VR/AR technologies and blockchain.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "8-15 months",
    salary: "₹18-50 LPA"
  },
  {
    id: "virtual-world-design",
    name: "Virtual World Design",
    category: "Design & Creative",
    description: "Designing immersive 3D environments and user experiences for metaverse platforms.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Palette,
    color: "from-cyan-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "nft-marketplace-development",
    name: "NFT Marketplace Development",
    category: "Emerging Technology",
    description: "Building platforms for trading digital assets and NFTs within virtual environments.",
    status: "emerging",
    relevancePeriod: "Next 5+ years",
    demandLevel: "low",
    icon: Shield,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹16-45 LPA"
  },
  {
    id: "avatar-creation",
    name: "Avatar Creation & Animation",
    category: "Design & Creative",
    description: "Designing and animating digital avatars for metaverse and virtual reality applications.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-pink-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹12-32 LPA"
  },
  {
    id: "spatial-computing",
    name: "Spatial Computing",
    category: "Emerging Technology",
    description: "Developing applications that blend digital content with physical spaces using AR/VR technologies.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Eye,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹20-55 LPA"
  }
];
