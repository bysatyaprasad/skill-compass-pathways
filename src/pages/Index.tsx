import { useState } from "react";
import { Search, Sparkles, TrendingUp, TrendingDown, Clock, Brain, Code, Palette, Briefcase, Globe, Zap, Target, Heart, Users, MessageCircle, Lightbulb, Shield, BookOpen, Gamepad2, Camera, Music, PenTool, Calculator, Languages, Compass, FlaskConical, Rocket, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroSection } from "@/components/HeroSection";
import { SkillCard } from "@/components/SkillCard";
import { CategoryFilter } from "@/components/CategoryFilter";

interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  status: 'emerging' | 'stable' | 'declining';
  relevancePeriod: string;
  demandLevel: 'high' | 'medium' | 'low';
  icon: any;
  color: string;
}

const skillsData: Skill[] = [
  // Emerging Tech Skills
  {
    id: 'ai-ml',
    name: 'Artificial Intelligence & Machine Learning',
    category: 'Emerging Tech',
    description: 'Design and develop intelligent systems, neural networks, and automated decision-making algorithms',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    category: 'Emerging Tech',
    description: 'Harness quantum mechanics for revolutionary computational power and cryptography',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    category: 'Emerging Tech',
    description: 'Build decentralized applications, smart contracts, and next-gen internet infrastructure',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Globe,
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'ar-vr',
    name: 'Augmented & Virtual Reality',
    category: 'Emerging Tech',
    description: 'Create immersive digital experiences and mixed reality applications',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Gamepad2,
    color: 'from-violet-500 to-purple-500'
  },
  
  // Digital Skills
  {
    id: 'data-science',
    name: 'Data Science & Analytics',
    category: 'Digital Skills',
    description: 'Extract insights from big data, create predictive models, and drive data-driven decisions',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    category: 'Digital Skills',
    description: 'Protect digital assets, prevent cyber threats, and ensure data privacy',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Target,
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing & DevOps',
    category: 'Digital Skills',
    description: 'Design scalable cloud infrastructure and streamline software deployment',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Code,
    color: 'from-indigo-500 to-purple-500'
  },
  
  // Creative & Design
  {
    id: 'ux-ui',
    name: 'UX/UI Design',
    category: 'Creative & Design',
    description: 'Create intuitive user experiences and visually appealing digital interfaces',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Palette,
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing & Growth',
    category: 'Creative & Design',
    description: 'Drive online engagement, optimize conversion funnels, and build brand presence',
    status: 'stable',
    relevancePeriod: 'Until 2045',
    demandLevel: 'medium',
    icon: Sparkles,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'content-creation',
    name: 'Digital Content Creation',
    category: 'Creative & Design',
    description: 'Produce engaging multimedia content across various digital platforms',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Camera,
    color: 'from-emerald-500 to-teal-500'
  },
  
  // Soft Skills & Emotional Intelligence
  {
    id: 'emotional-intelligence',
    name: 'Emotional Intelligence',
    category: 'Soft Skills',
    description: 'Understand and manage emotions effectively in personal and professional settings',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Heart,
    color: 'from-pink-500 to-red-500'
  },
  {
    id: 'leadership',
    name: 'Leadership & Team Management',
    category: 'Soft Skills',
    description: 'Guide teams, make strategic decisions, and inspire others towards common goals',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Users,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'communication',
    name: 'Advanced Communication',
    category: 'Soft Skills',
    description: 'Master verbal, written, and digital communication across diverse audiences',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: MessageCircle,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'critical-thinking',
    name: 'Critical Thinking & Problem Solving',
    category: 'Soft Skills',
    description: 'Analyze complex problems, evaluate solutions, and make informed decisions',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Lightbulb,
    color: 'from-yellow-500 to-amber-500'
  },
  
  // Business Skills
  {
    id: 'project-management',
    name: 'Agile Project Management',
    category: 'Business Skills',
    description: 'Lead cross-functional teams, manage digital transformation, and deliver results',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Briefcase,
    color: 'from-teal-500 to-blue-500'
  },
  {
    id: 'entrepreneurship',
    name: 'Entrepreneurship & Innovation',
    category: 'Business Skills',
    description: 'Identify opportunities, build ventures, and drive innovative solutions',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Rocket,
    color: 'from-purple-500 to-indigo-500'
  },
  
  // Language & Communication
  {
    id: 'multilingual',
    name: 'Multilingual Communication',
    category: 'Language Skills',
    description: 'Communicate effectively across multiple languages and cultural contexts',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Languages,
    color: 'from-green-500 to-emerald-500'
  },
  
  // Life Skills & Personal Development
  {
    id: 'adaptability',
    name: 'Adaptability & Resilience',
    category: 'Life Skills',
    description: 'Navigate change, bounce back from setbacks, and thrive in uncertainty',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Compass,
    color: 'from-slate-500 to-gray-500'
  },
  {
    id: 'financial-literacy',
    name: 'Financial Literacy & Management',
    category: 'Life Skills',
    description: 'Understand personal finance, investments, and economic principles',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Calculator,
    color: 'from-emerald-500 to-green-500'
  },
  {
    id: 'sustainability',
    name: 'Sustainability & Environmental Awareness',
    category: 'Life Skills',
    description: 'Understand environmental impact and promote sustainable practices',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: TreePine,
    color: 'from-green-600 to-emerald-600'
  },
  
  // STEM Skills
  {
    id: 'biotechnology',
    name: 'Biotechnology & Genetic Engineering',
    category: 'STEM Skills',
    description: 'Apply biological systems for technological and medical advancement',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: FlaskConical,
    color: 'from-lime-500 to-green-500'
  },
  
  // Creative Arts
  {
    id: 'music-production',
    name: 'Music Production & Audio Design',
    category: 'Creative Arts',
    description: 'Create, produce, and engineer music and audio content for various media',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'medium',
    icon: Music,
    color: 'from-violet-500 to-purple-500'
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design & Visual Arts',
    category: 'Creative Arts',
    description: 'Create visual communications and artistic expressions across digital and print media',
    status: 'stable',
    relevancePeriod: 'Until 2045',
    demandLevel: 'medium',
    icon: PenTool,
    color: 'from-rose-500 to-pink-500'
  },
  
  // Academic Skills
  {
    id: 'research-methodology',
    name: 'Research & Analysis Methods',
    category: 'Academic Skills',
    description: 'Conduct systematic research, analyze data, and present findings effectively',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: BookOpen,
    color: 'from-blue-600 to-indigo-600'
  },
  
  // Declining Skills (to show contrast)
  {
    id: 'basic-data-entry',
    name: 'Basic Data Entry',
    category: 'Outdated Skills',
    description: 'Manual data input and basic spreadsheet operations',
    status: 'declining',
    relevancePeriod: '1990-2030',
    demandLevel: 'low',
    icon: Clock,
    color: 'from-gray-500 to-gray-400'
  },
  {
    id: 'manual-accounting',
    name: 'Manual Bookkeeping',
    category: 'Outdated Skills',
    description: 'Paper-based accounting and manual financial record keeping',
    status: 'declining',
    relevancePeriod: '1980-2025',
    demandLevel: 'low',
    icon: TrendingDown,
    color: 'from-gray-600 to-gray-500'
  },
  {
    id: 'typing-speed',
    name: 'Basic Typing Speed',
    category: 'Outdated Skills',
    description: 'Focus on raw typing speed without digital literacy or advanced computer skills',
    status: 'declining',
    relevancePeriod: '1990-2030',
    demandLevel: 'low',
    icon: Clock,
    color: 'from-gray-500 to-slate-500'
  }
];

const categories = [
  'All Skills',
  'Emerging Tech',
  'Digital Skills',
  'Creative & Design',
  'Soft Skills',
  'Business Skills',
  'Language Skills',
  'Life Skills',
  'STEM Skills',
  'Creative Arts',
  'Academic Skills',
  'Outdated Skills'
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Skills');
  const [filteredSkills, setFilteredSkills] = useState(skillsData);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterSkills(term, selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterSkills(searchTerm, category);
  };

  const filterSkills = (term: string, category: string) => {
    let filtered = skillsData;
    
    if (category !== 'All Skills') {
      filtered = filtered.filter(skill => skill.category === category);
    }
    
    if (term) {
      filtered = filtered.filter(skill =>
        skill.name.toLowerCase().includes(term.toLowerCase()) ||
        skill.description.toLowerCase().includes(term.toLowerCase())
      );
    }
    
    setFilteredSkills(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      
      {/* Search and Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search for skills..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-purple-500"
              />
            </div>
            
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                index={index}
              />
            ))}
          </div>
          
          {filteredSkills.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">No skills found matching your criteria</div>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All Skills');
                  setFilteredSkills(skillsData);
                }}
                variant="outline"
                className="mt-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card border-purple-500/30 text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gradient">
                  {skillsData.filter(s => s.status === 'emerging').length}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Emerging Skills for Future
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="glass-card border-blue-500/30 text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gradient">
                  {skillsData.filter(s => s.demandLevel === 'high').length}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  High-Demand Skills
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="glass-card border-pink-500/30 text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gradient">
                  Until 2050+
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Skills Relevant Beyond 2050
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
