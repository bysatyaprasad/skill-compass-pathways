
import { useState, useMemo } from "react";
import { Search, Filter, TrendingUp, TrendingDown, Minus, Clock, Brain, Code, Palette, Briefcase, Globe, Zap, Target, Heart, Users, MessageCircle, Lightbulb, Shield, BookOpen, Gamepad2, Camera, Music, PenTool, Calculator, Languages, Compass, FlaskConical, Rocket, TreePine, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeToLearn: string;
  salary: string;
}

// Expanded skills data with more comprehensive coverage
const skillsData: Skill[] = [
  // ... keep existing skills from Index.tsx and add new ones
  {
    id: 'ai-ml',
    name: 'Artificial Intelligence & Machine Learning',
    category: 'Emerging Tech',
    description: 'Design and develop intelligent systems, neural networks, and automated decision-making algorithms',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    difficulty: 'advanced',
    timeToLearn: '12-18 months',
    salary: '₹15-50 LPA'
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
    color: 'from-blue-500 to-cyan-500',
    difficulty: 'advanced',
    timeToLearn: '18-24 months',
    salary: '₹25-60 LPA'
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
    color: 'from-green-500 to-teal-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹12-45 LPA'
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
    color: 'from-violet-500 to-purple-500',
    difficulty: 'intermediate',
    timeToLearn: '9-15 months',
    salary: '₹10-40 LPA'
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
    color: 'from-orange-500 to-red-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹10-40 LPA'
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
    color: 'from-red-500 to-pink-500',
    difficulty: 'intermediate',
    timeToLearn: '9-15 months',
    salary: '₹9-35 LPA'
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
    color: 'from-indigo-500 to-purple-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹8-30 LPA'
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
    color: 'from-pink-500 to-rose-500',
    difficulty: 'beginner',
    timeToLearn: '3-6 months',
    salary: '₹6-25 LPA'
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
    color: 'from-yellow-500 to-orange-500',
    difficulty: 'beginner',
    timeToLearn: '3-6 months',
    salary: '₹5-20 LPA'
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
    color: 'from-emerald-500 to-teal-500',
    difficulty: 'beginner',
    timeToLearn: '3-6 months',
    salary: '₹4-18 LPA'
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
    color: 'from-pink-500 to-red-500',
    difficulty: 'beginner',
    timeToLearn: 'Ongoing',
    salary: 'N/A'
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
    color: 'from-blue-500 to-indigo-500',
    difficulty: 'intermediate',
    timeToLearn: 'Ongoing',
    salary: 'N/A'
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
    color: 'from-cyan-500 to-blue-500',
    difficulty: 'beginner',
    timeToLearn: 'Ongoing',
    salary: 'N/A'
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
    color: 'from-yellow-500 to-amber-500',
    difficulty: 'beginner',
    timeToLearn: 'Ongoing',
    salary: 'N/A'
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
    color: 'from-teal-500 to-blue-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹7-30 LPA'
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
    color: 'from-purple-500 to-indigo-500',
    difficulty: 'advanced',
    timeToLearn: 'Ongoing',
    salary: 'Varies'
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
    color: 'from-green-500 to-emerald-500',
    difficulty: 'intermediate',
    timeToLearn: 'Varies',
    salary: '₹6-25 LPA'
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
    color: 'from-slate-500 to-gray-500',
    difficulty: 'beginner',
    timeToLearn: 'Ongoing',
    salary: 'N/A'
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
    color: 'from-emerald-500 to-green-500',
    difficulty: 'beginner',
    timeToLearn: '3-6 months',
    salary: 'N/A'
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
    color: 'from-green-600 to-emerald-600',
    difficulty: 'beginner',
    timeToLearn: 'Ongoing',
    salary: 'N/A'
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
    color: 'from-lime-500 to-green-500',
    difficulty: 'advanced',
    timeToLearn: '12-24 months',
    salary: '₹10-45 LPA'
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
    color: 'from-violet-500 to-purple-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹4-15 LPA'
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
    color: 'from-rose-500 to-pink-500',
    difficulty: 'beginner',
    timeToLearn: '3-6 months',
    salary: '₹3-12 LPA'
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
    color: 'from-blue-600 to-indigo-600',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹5-20 LPA'
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
    color: 'from-gray-500 to-gray-400',
    difficulty: 'beginner',
    timeToLearn: '1-2 weeks',
    salary: '₹1-3 LPA'
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
    color: 'from-gray-600 to-gray-500',
    difficulty: 'beginner',
    timeToLearn: '2-4 weeks',
    salary: '₹1-4 LPA'
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
    color: 'from-gray-500 to-slate-500',
    difficulty: 'beginner',
    timeToLearn: '1-2 weeks',
    salary: '₹1-3 LPA'
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

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Skills');
  const [statusFilter, setStatusFilter] = useState('all');
  const [demandFilter, setDemandFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  const filteredAndSortedSkills = useMemo(() => {
    let filtered = skillsData;
    
    // Category filter
    if (selectedCategory !== 'All Skills') {
      filtered = filtered.filter(skill => skill.category === selectedCategory);
    }
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(skill =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(skill => skill.status === statusFilter);
    }
    
    // Demand filter
    if (demandFilter !== 'all') {
      filtered = filtered.filter(skill => skill.demandLevel === demandFilter);
    }
    
    // Difficulty filter
    if (difficultyFilter !== 'all') {
      filtered = filtered.filter(skill => skill.difficulty === difficultyFilter);
    }
    
    // Sorting
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'demand':
          const demandOrder = { high: 3, medium: 2, low: 1 };
          return demandOrder[b.demandLevel] - demandOrder[a.demandLevel];
        case 'difficulty':
          const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        default:
          return 0;
      }
    });
  }, [searchTerm, selectedCategory, statusFilter, demandFilter, difficultyFilter, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-gradient">
            Skills Explorer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover, filter, and explore skills that will shape your future career
          </p>
        </div>

        {/* Advanced Filters */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Advanced Filters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search for skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>

            {/* Filter Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="emerging">Emerging</SelectItem>
                  <SelectItem value="stable">Stable</SelectItem>
                  <SelectItem value="declining">Declining</SelectItem>
                </SelectContent>
              </Select>

              <Select value={demandFilter} onValueChange={setDemandFilter}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Demand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Demand</SelectItem>
                  <SelectItem value="high">High Demand</SelectItem>
                  <SelectItem value="medium">Medium Demand</SelectItem>
                  <SelectItem value="low">Low Demand</SelectItem>
                </SelectContent>
              </Select>

              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="demand">Demand Level</SelectItem>
                  <SelectItem value="difficulty">Difficulty</SelectItem>
                </SelectContent>
              </Select>

              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All Skills');
                  setStatusFilter('all');
                  setDemandFilter('all');
                  setDifficultyFilter('all');
                  setSortBy('relevance');
                }}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Clear All
              </Button>
            </div>

            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-300">
            Showing {filteredAndSortedSkills.length} skills
            {selectedCategory !== 'All Skills' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedSkills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              index={index}
            />
          ))}
        </div>

        {filteredAndSortedSkills.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No skills found matching your criteria</div>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All Skills');
                setStatusFilter('all');
                setDemandFilter('all');
                setDifficultyFilter('all');
              }}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
