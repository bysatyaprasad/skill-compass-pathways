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
  Telescope,
  Wrench,
  Building,
  Bot,
  Atom,
  Cloud,
  Zap,
  Settings,
  Target
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
import { solutionsSkills } from "./skills/solutionsSkills";
import { industrySkills } from "./skills/industrySkills";
import { automationSkills } from "./skills/automationSkills";
import { quantumSkills } from "./skills/quantumSkills";
import { cloudArchitectureSkills } from "./skills/cloudArchitectureSkills";
import { specializedAISkills } from "./skills/specializedAISkills";
import { integrationSkills } from "./skills/integrationSkills";
import { dataEngineeringSkills } from "./skills/dataEngineeringSkills";
import { innovationSkills } from "./skills/innovationSkills";
import { devopsAdvancedSkills } from "./skills/devops/devopsAdvancedSkills";
import { architectureSkills } from "./skills/architecture/architectureSkills";
import { bigDataAdvancedSkills } from "./skills/data/bigData/bigDataAdvancedSkills";
import { productSkills } from "./skills/product/productSkills";
import { securityAdvancedSkills } from "./skills/security/securityAdvancedSkills";
import { salesSkills } from "./skills/salesSkills";
import { gamingSkills } from "./skills/gamingSkills";
import { legalSkills } from "./skills/legalSkills";
import { retailSkills } from "./skills/retailSkills";
import { freelancingSkills } from "./skills/freelancingSkills";
import { communicationSkills } from "./skills/communicationSkills";
import { consultingSkills } from "./skills/consultingSkills";
import { advancedAnalyticsSkills } from "./skills/advancedAnalyticsSkills";
import { lowCodeSkills } from "./skills/lowCodeSkills";
import { operationsSkills } from "./skills/operationsSkills";
import { metaverseSkills } from "./skills/metaverseSkills";
import { graphqlSkills } from "./skills/graphqlSkills";
import { edgeComputingSkills } from "./skills/edgeComputingSkills";
import { fintechAdvancedSkills } from "./skills/fintechAdvancedSkills";
import { contentCreationAdvancedSkills } from "./skills/contentCreationAdvancedSkills";
import { accessibilitySkills } from "./skills/accessibilitySkills";
import { performanceOptimizationSkills } from "./skills/performanceOptimizationSkills";
import { remoteWorkSkills } from "./skills/remoteWorkSkills";
import { greenTechAdvancedSkills } from "./skills/greenTechAdvancedSkills";
import { technicalLeadershipSkills } from "./skills/technicalLeadershipSkills";
import { cybersecurityAdvancedSkills } from "./skills/cybersecurityAdvancedSkills";
import { dataGovernanceSkills } from "./skills/dataGovernanceSkills";
import { apiManagementSkills } from "./skills/apiManagementSkills";
import { webAssemblySkills } from "./skills/webAssemblySkills";
import { conversationalAISkills } from "./skills/conversationalAISkills";
import { propTechSkills } from "./skills/propTechSkills";
import { socialMediaTechSkills } from "./skills/socialMediaTechSkills";
import { industry4Skills } from "./skills/industry4Skills";

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
  ...qaSkills,
  ...solutionsSkills,
  ...industrySkills,
  ...automationSkills,
  ...quantumSkills,
  ...cloudArchitectureSkills,
  ...specializedAISkills,
  ...integrationSkills,
  ...dataEngineeringSkills,
  ...innovationSkills,
  ...devopsAdvancedSkills,
  ...architectureSkills,
  ...bigDataAdvancedSkills,
  ...productSkills,
  ...securityAdvancedSkills,
  ...salesSkills,
  ...gamingSkills,
  ...legalSkills,
  ...retailSkills,
  ...freelancingSkills,
  ...communicationSkills,
  ...consultingSkills,
  ...advancedAnalyticsSkills,
  ...lowCodeSkills,
  ...operationsSkills,
  ...metaverseSkills,
  ...graphqlSkills,
  ...edgeComputingSkills,
  ...fintechAdvancedSkills,
  ...contentCreationAdvancedSkills,
  ...accessibilitySkills,
  ...performanceOptimizationSkills,
  ...remoteWorkSkills,
  ...greenTechAdvancedSkills,
  ...technicalLeadershipSkills,
  ...cybersecurityAdvancedSkills,
  ...dataGovernanceSkills,
  ...apiManagementSkills,
  ...webAssemblySkills,
  ...conversationalAISkills,
  ...propTechSkills,
  ...socialMediaTechSkills,
  ...industry4Skills
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
  "Quality Assurance",
  "Web Solutions",
  "Business Solutions",
  "Mobile Solutions",
  "Data Analytics Solutions",
  "Automation Solutions",
  "Digital Transformation",
  "Finance Industry",
  "Healthcare Industry",
  "Education Industry",
  "Finance Technology",
  "Content Creation",
  "Accessibility & Inclusion",
  "Performance & Optimization",
  "Remote Work & Collaboration",
  "Green Technology",
  "Technical Leadership",
  "Cybersecurity & Privacy",
  "Modern Web Technologies",
  "Conversational AI & Automation",
  "Property Technology",
  "Industrial Automation"
];

// Helper functions
export const getSkillsByCategory = (category: string): Skill[] => {
  if (category === "All Skills") return allSkills;
  return allSkills.filter(skill => skill.category === category);
};

export const addSkillToCategory = (skill: Skill, category: string): void => {
  console.log(`Adding skill ${skill.name} to category ${category}`);
};
