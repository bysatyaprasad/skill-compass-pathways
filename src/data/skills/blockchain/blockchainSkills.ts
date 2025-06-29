
import { Zap, Shield, Code, Coins } from "lucide-react";
import { Skill } from "../../skillsData";

export const blockchainSkills: Skill[] = [
  {
    id: "solidity",
    name: "Solidity",
    category: "Emerging Technology",
    description: "Programming language for writing smart contracts on Ethereum blockchain platform.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "4-8 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "web3-development",
    name: "Web3 Development",
    category: "Emerging Technology",
    description: "Building decentralized applications (DApps) using blockchain technology and web3 libraries.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-green-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "nft-development",
    name: "NFT Development",
    category: "Emerging Technology",
    description: "Creating and managing Non-Fungible Tokens on blockchain platforms for digital assets.",
    status: "emerging",
    relevancePeriod: "Next 4+ years",
    demandLevel: "low",
    icon: Coins,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "3-6 months",
    salary: "₹12-35 LPA"
  },
  {
    id: "defi-development",
    name: "DeFi Development",
    category: "Emerging Technology",
    description: "Building decentralized finance applications and protocols on blockchain platforms.",
    status: "emerging",
    relevancePeriod: "Next 5+ years",
    demandLevel: "low",
    icon: Shield,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹20-50 LPA"
  }
];
