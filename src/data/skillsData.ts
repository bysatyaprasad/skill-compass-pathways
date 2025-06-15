
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Shield, 
  Brain, 
  BarChart3, 
  Palette, 
  Camera, 
  Headphones,
  ArrowUpRight,
  Scan,
  Telescope
} from "lucide-react";

export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  status: 'emerging' | 'stable' | 'declining';
  relevancePeriod: string;
  demandLevel: 'high' | 'medium' | 'low';
  icon: any;
  color: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeToLearn: string;
  salary: string;
  isFoundational?: boolean;
}

// Programming & Development Skills
export const programmingSkills: Skill[] = [
  {
    id: "javascript",
    name: "JavaScript",
    category: "Programming",
    description: "The essential language for web development, enabling interactive websites and modern applications across frontend and backend.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-yellow-500 to-orange-500",
    difficulty: "beginner",
    timeToLearn: "3-4 months",
    salary: "₹4-12 LPA", 
    isFoundational: true
  },
  {
    id: "python",
    name: "Python",
    category: "Programming",
    description: "Versatile programming language excellent for beginners, widely used in web development, data science, AI, and automation.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-blue-500 to-green-500",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹5-15 LPA",
    isFoundational: true
  },
  {
    id: "react",
    name: "React",
    category: "Programming",
    description: "Popular JavaScript library for building user interfaces, essential for modern frontend development with component-based architecture.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Programming",
    description: "JavaScript runtime for server-side development, enabling full-stack JavaScript applications with high performance.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-green-600 to-green-400",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹7-16 LPA"
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Programming",
    description: "Typed superset of JavaScript that improves code quality and developer experience in large applications.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-blue-600 to-indigo-500",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹8-20 LPA"
  }
];

// Data & Analytics Skills
export const dataSkills: Skill[] = [
  {
    id: "sql",
    name: "SQL",
    category: "Data & Analytics",
    description: "Standard language for managing and querying databases, essential for any role involving data analysis or backend development.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹4-12 LPA",
    isFoundational: true
  },
  {
    id: "excel",
    name: "Excel",
    category: "Data & Analytics",
    description: "Powerful spreadsheet tool for data analysis, financial modeling, and business intelligence - a must-have business skill.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-green-500 to-emerald-500",
    difficulty: "beginner",
    timeToLearn: "1-2 months",
    salary: "₹3-10 LPA",
    isFoundational: true
  },
  {
    id: "tableau",
    name: "Tableau",
    category: "Data & Analytics",
    description: "Leading data visualization platform that transforms raw data into interactive, insightful dashboards and reports.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹6-15 LPA"
  },
  {
    id: "powerbi",
    name: "Power BI",
    category: "Data & Analytics",
    description: "Microsoft's business intelligence platform for creating interactive reports and dashboards from various data sources.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-yellow-500 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹5-14 LPA"
  },
  {
    id: "r-programming",
    name: "R Programming",
    category: "Data & Analytics",
    description: "Statistical programming language excellent for data analysis, statistical modeling, and research in academia and industry.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-16 LPA"
  }
];

// Design & Creative Skills
export const designSkills: Skill[] = [
  {
    id: "figma",
    name: "Figma",
    category: "Design & Creative",
    description: "Collaborative design tool for creating user interfaces, prototypes, and design systems used by top companies worldwide.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹4-12 LPA"
  },
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
    description: "Vector graphics software for creating logos, icons, illustrations, and scalable graphics for print and digital media.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Palette,
    color: "from-orange-500 to-yellow-500",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹3-11 LPA"
  },
  {
    id: "canva",
    name: "Canva",
    category: "Design & Creative",
    description: "User-friendly design platform perfect for creating social media graphics, presentations, and marketing materials without advanced design skills.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Palette,
    color: "from-cyan-500 to-teal-500",
    difficulty: "beginner",
    timeToLearn: "1-2 months",
    salary: "₹2-8 LPA"
  }
];

// Digital Marketing Skills
export const marketingSkills: Skill[] = [
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
  },
  {
    id: "social-media-marketing",
    name: "Social Media Marketing",
    category: "Digital Marketing",
    description: "Strategic use of social platforms to build brand awareness, engage audiences, and drive business growth.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Headphones,
    color: "from-purple-500 to-indigo-500",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹3-9 LPA"
  },
  {
    id: "content-marketing",
    name: "Content Marketing",
    category: "Digital Marketing",
    description: "Creating and distributing valuable content to attract and retain customers, driving profitable customer action.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-teal-500 to-cyan-500",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹4-11 LPA"
  }
];

// Emerging Technology Skills
export const emergingTechSkills: Skill[] = [
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence",
    category: "Emerging Technology",
    description: "Cutting-edge field focusing on creating intelligent systems that can perform tasks typically requiring human intelligence.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-violet-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹10-30 LPA"
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    category: "Emerging Technology",
    description: "Subset of AI that enables systems to learn and improve from data without explicit programming, powering modern innovations.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-indigo-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-35 LPA"
  },
  {
    id: "blockchain",
    name: "Blockchain",
    category: "Emerging Technology",
    description: "Distributed ledger technology enabling secure, transparent transactions and powering cryptocurrencies and smart contracts.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Shield,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-8 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    category: "Emerging Technology",
    description: "Critical field protecting digital systems, networks, and data from cyber threats and attacks in our connected world.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Shield,
    color: "from-red-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "6-9 months",
    salary: "₹7-20 LPA"
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    category: "Emerging Technology",
    description: "Delivery of computing services over the internet, enabling scalable and flexible IT infrastructure for businesses.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-sky-500 to-blue-500",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-18 LPA"
  }
];

// Mobile Development Skills
export const mobileSkills: Skill[] = [
  {
    id: "react-native",
    name: "React Native",
    category: "Mobile Development",
    description: "Cross-platform framework for building native mobile apps using React, enabling code sharing between iOS and Android.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹7-18 LPA"
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "Mobile Development",
    description: "Google's UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-blue-500 to-indigo-500",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "ios-development",
    name: "iOS Development",
    category: "Mobile Development",
    description: "Native app development for Apple devices using Swift and Xcode, targeting the premium iOS market segment.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Smartphone,
    color: "from-gray-600 to-gray-400",
    difficulty: "intermediate",
    timeToLearn: "6-8 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "android-development",
    name: "Android Development",
    category: "Mobile Development",
    description: "Native app development for Android devices using Kotlin/Java, targeting the world's largest mobile platform.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Smartphone,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "6-8 months",
    salary: "₹6-18 LPA"
  }
];

// Business & Finance Skills
export const businessSkills: Skill[] = [
  {
    id: "financial-modeling",
    name: "Financial Modeling",
    category: "Business & Finance",
    description: "Building mathematical models to represent financial performance and make informed business decisions and valuations.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-emerald-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "project-management",
    name: "Project Management",
    category: "Business & Finance",
    description: "Leading teams and resources to deliver projects on time, within budget, and meeting quality standards across industries.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹5-15 LPA"
  },
  {
    id: "business-analysis",
    name: "Business Analysis",
    category: "Business & Finance",
    description: "Identifying business needs and determining solutions to business problems through data analysis and process improvement.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Scan,
    color: "from-purple-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹5-14 LPA"
  }
];

// Quality Assurance Skills
export const qaSkills: Skill[] = [
  {
    id: "manual-testing",
    name: "Manual Testing",
    category: "Quality Assurance",
    description: "Systematic process of manually testing software applications to identify bugs and ensure quality before release.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Scan,
    color: "from-teal-600 to-cyan-600",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹3-8 LPA"
  },
  {
    id: "automation-testing",
    name: "Automation Testing",
    category: "Quality Assurance",
    description: "Using tools and scripts to automatically execute test cases, improving efficiency and coverage in software testing.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Code,
    color: "from-indigo-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹5-12 LPA"
  }
];

// Combine all skills
export const allSkills: Skill[] = [
  ...programmingSkills,
  ...dataSkills,
  ...designSkills,
  ...marketingSkills,
  ...emergingTechSkills,
  ...mobileSkills,
  ...businessSkills,
  ...qaSkills
];

// Categories for filtering
export const skillCategories = [
  "All Skills",
  "Programming",
  "Data & Analytics", 
  "Design & Creative",
  "Digital Marketing",
  "Emerging Technology",
  "Mobile Development",
  "Business & Finance",
  "Quality Assurance"
];

// Helper functions for adding skills by category
export const getSkillsByCategory = (category: string): Skill[] => {
  if (category === "All Skills") return allSkills;
  return allSkills.filter(skill => skill.category === category);
};

export const addSkillToCategory = (skill: Skill, category: string): void => {
  // Function to add new skills to specific categories
  // This can be expanded for dynamic skill addition
  console.log(`Adding skill ${skill.name} to category ${category}`);
};
