
import { ShoppingCart, CreditCard, Truck, Users, BarChart3, Globe, Smartphone, Package } from "lucide-react";
import { Skill } from "../../../skillsData";

export const ecommerceSkills: Skill[] = [
  {
    id: "shopify-development",
    name: "Shopify Development",
    category: "Web Solutions",
    description: "Building custom Shopify themes, apps, and e-commerce solutions with Liquid templating.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: ShoppingCart,
    color: "from-green-600 to-emerald-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "woocommerce-development",
    name: "WooCommerce Development",
    category: "Web Solutions",
    description: "Creating WordPress-based e-commerce stores with custom plugins and themes.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Package,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹5-15 LPA"
  },
  {
    id: "magento-development",
    name: "Magento Development",
    category: "Web Solutions",
    description: "Enterprise e-commerce platform development with advanced customization capabilities.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: ShoppingCart,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "payment-integration",
    name: "Payment Gateway Integration",
    category: "Web Solutions",
    description: "Integrating various payment methods, digital wallets, and secure transaction processing.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: CreditCard,
    color: "from-yellow-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹7-18 LPA"
  },
  {
    id: "order-management",
    name: "Order Management Systems",
    category: "Web Solutions",
    description: "Building systems for order processing, fulfillment tracking, and inventory management.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Truck,
    color: "from-indigo-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "customer-loyalty-programs",
    name: "Customer Loyalty Systems",
    category: "Web Solutions",
    description: "Creating reward programs, point systems, and customer retention mechanisms.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-pink-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "ecommerce-analytics",
    name: "E-commerce Analytics",
    category: "Web Solutions",
    description: "Sales tracking, conversion optimization, and customer behavior analysis systems.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "mobile-commerce",
    name: "Mobile Commerce (M-commerce)",
    category: "Web Solutions",
    description: "Optimizing e-commerce for mobile devices and creating mobile shopping applications.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-cyan-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹7-18 LPA"
  }
];
