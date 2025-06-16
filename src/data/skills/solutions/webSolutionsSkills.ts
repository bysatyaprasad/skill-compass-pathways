import { Globe, ShoppingCart, Users, Calendar, MessageSquare, FileText, CreditCard, Search } from "lucide-react";
import { Skill } from "../../skillsData";
import { ecommerceSkills } from "./ecommerce/ecommerceSkills";

export const webSolutionsSkills: Skill[] = [
  {
    id: "ecommerce-development",
    name: "E-commerce Website Development",
    category: "Web Solutions",
    description: "Build complete online stores with payment processing, inventory management, and customer accounts.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: ShoppingCart,
    color: "from-green-600 to-emerald-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "booking-system-development",
    name: "Booking & Reservation Systems",
    category: "Web Solutions",
    description: "Create appointment scheduling, hotel booking, and reservation management systems.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Calendar,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹7-20 LPA"
  },
  {
    id: "content-management-systems",
    name: "Content Management Systems",
    category: "Web Solutions",
    description: "Build custom CMS platforms for blogs, news sites, and content-heavy websites.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: FileText,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "real-time-chat-systems",
    name: "Real-time Chat Applications",
    category: "Web Solutions",
    description: "Develop live messaging platforms, customer support chat, and team communication tools.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: MessageSquare,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹10-28 LPA"
  },
  {
    id: "payment-gateway-integration",
    name: "Payment Processing Systems",
    category: "Web Solutions",
    description: "Integrate secure payment solutions, subscription billing, and financial transaction handling.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: CreditCard,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "3-5 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "search-engine-development",
    name: "Search Engine Implementation",
    category: "Web Solutions",
    description: "Build powerful search functionality, recommendation engines, and content discovery systems.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Search,
    color: "from-teal-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "social-networking-platforms",
    name: "Social Media Platforms",
    category: "Web Solutions",
    description: "Create social networking sites, community platforms, and user-generated content systems.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-pink-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹12-35 LPA"
  },
  // Include all detailed e-commerce skills
  ...ecommerceSkills
];
