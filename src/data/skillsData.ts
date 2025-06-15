
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
import { healthcareSkills } from "./skills/healthcareSkills";
import { educationSkills } from "./skills/educationSkills";
import { sustainabilitySkills } from "./skills/sustainabilitySkills";
import { mobileSkills } from "./skills/mobile/mobileSkills";
import { businessSkills } from "./skills/business/businessSkills";
import { qaSkills } from "./skills/qa/qaSkills";

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

// Combine all skills
export const allSkills: Skill[] = [
  ...programmingSkills,
  ...dataSkills,
  ...emergingTechSkills,
  ...designSkills,
  ...marketingSkills,
  ...healthcareSkills,
  ...educationSkills,
  ...sustainabilitySkills,
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
  "Healthcare Technology",
  "Education Technology",
  "Sustainability Technology",
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
