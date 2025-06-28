
import { Shield, Coins, Zap, Globe } from "lucide-react";
import { Skill } from "../../skillsData";

export const blockchainSkills: Skill[] = [
  {
    id: "solidity",
    name: "Solidity",
    category: "Emerging Technology",
    description: "Programming language for writing smart contracts on Ethereum and EVM-compatible blockchains.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹20-50 LPA"
  },
  {
    id: "web3-js",
    name: "Web3.js",
    category: "Emerging Technology",
    description: "JavaScript library for interacting with Ethereum blockchain and building decentralized applications.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "4-6 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "smart-contracts",
    name: "Smart Contract Development",
    category: "Emerging Technology",
    description: "Creating self-executing contracts with terms directly written into code on blockchain platforms.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-green-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹25-60 LPA"
  },
  {
    id: "nft-development",
    name: "NFT Development",
    category: "Emerging Technology",
    description: "Creating and deploying Non-Fungible Tokens for digital assets and collectibles.",
    status: "emerging",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Coins,
    color: "from-pink-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "defi-development",
    name: "DeFi Protocol Development",
    category: "Emerging Technology",
    description: "Building decentralized finance applications like lending protocols, DEXs, and yield farming.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Coins,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "10-15 months",
    salary: "₹30-70 LPA"
  },
  {
    id: "hyperledger",
    name: "Hyperledger Fabric",
    category: "Emerging Technology",
    description: "Enterprise blockchain framework for building private and permissioned blockchain networks.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Shield,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹18-40 LPA"
  }
];
