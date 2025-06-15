
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

// Import skills from granular files
import { programmingSkills } from "./skills/programmingSkills";
import { dataSkills } from "./skills/dataSkills";
import { emergingTechSkills } from "./skills/emergingTechSkills";
import { designSkills } from "./skills/designSkills";
import { marketingSkills } from "./skills/marketingSkills";

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
  }
];

// Quality Assurance Skills
export const qaSkills: Skill[] = [
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
  ...emergingTechSkills,
  ...designSkills,
  ...marketingSkills,
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

// Helper functions
export const getSkillsByCategory = (category: string): Skill[] => {
  if (category === "All Skills") return allSkills;
  return allSkills.filter(skill => skill.category === category);
};

export const addSkillToCategory = (skill: Skill, category: string): void => {
  console.log(`Adding skill ${skill.name} to category ${category}`);
};
