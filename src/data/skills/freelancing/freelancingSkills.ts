
import { Briefcase, DollarSign, Users, Globe, Target, Clock, Star, TrendingUp } from "lucide-react";
import { Skill } from "../../skillsData";

export const freelancingSkills: Skill[] = [
  {
    id: "freelance-project-management",
    name: "Freelance Project Management",
    category: "Business & Finance",
    description: "Managing multiple client projects, timelines, and deliverables as an independent contractor.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Briefcase,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹5-25 LPA"
  },
  {
    id: "client-acquisition",
    name: "Client Acquisition & Networking",
    category: "Business & Finance",
    description: "Building a client base through networking, referrals, and professional relationship management.",
    status: "stable",
    relevancePeriod: "Next 20+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹6-30 LPA"
  },
  {
    id: "freelance-pricing-strategy",
    name: "Pricing Strategy & Negotiation",
    category: "Business & Finance",
    description: "Setting competitive rates, negotiating contracts, and value-based pricing for freelance services.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: DollarSign,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹8-35 LPA"
  },
  {
    id: "remote-collaboration-tools",
    name: "Remote Collaboration Mastery",
    category: "Business & Finance",
    description: "Expert use of remote work tools like Slack, Zoom, Asana, and collaborative platforms.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-purple-600 to-pink-600",
    difficulty: "beginner",
    timeToLearn: "1-3 months",
    salary: "₹4-18 LPA"
  },
  {
    id: "personal-branding",
    name: "Personal Branding & Marketing",
    category: "Digital Marketing",
    description: "Building a strong personal brand through social media, content creation, and thought leadership.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Star,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹6-25 LPA"
  },
  {
    id: "time-tracking-productivity",
    name: "Time Tracking & Productivity",
    category: "Business & Finance",
    description: "Advanced time management, productivity systems, and billing accuracy for freelancers.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Clock,
    color: "from-indigo-600 to-purple-600",
    difficulty: "beginner",
    timeToLearn: "1-2 months",
    salary: "₹3-15 LPA"
  }
];
