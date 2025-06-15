
import { useState } from "react";
import { Target, TrendingUp, Users, Briefcase, GraduationCap, DollarSign, MapPin, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CareerPath {
  id: string;
  title: string;
  description: string;
  skills: string[];
  salaryRange: string;
  experienceLevel: string;
  growth: 'high' | 'medium' | 'low';
  demand: 'high' | 'medium' | 'low';
  timeToTransition: string;
  keyCompanies: string[];
  futureOutlook: string;
}

const careerPaths: CareerPath[] = [
  {
    id: 'ai-engineer',
    title: 'AI/ML Engineer',
    description: 'Design and develop machine learning models and AI systems',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Science', 'Statistics', 'Deep Learning'],
    salaryRange: '₹15-50 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '12-18 months',
    keyCompanies: ['Google', 'Microsoft', 'Amazon', 'OpenAI', 'Meta', 'NVIDIA'],
    futureOutlook: 'Extremely promising with AI revolution driving massive demand'
  },
  {
    id: 'full-stack-dev',
    title: 'Full-Stack Developer',
    description: 'Build end-to-end web applications with frontend and backend expertise',
    skills: ['JavaScript', 'React', 'Node.js', 'Databases', 'Cloud Services', 'DevOps'],
    salaryRange: '₹8-35 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '6-12 months',
    keyCompanies: ['Flipkart', 'Swiggy', 'Zomato', 'Paytm', 'Byju\'s', 'Razorpay'],
    futureOutlook: 'Stable growth with continuous demand for digital transformation'
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Drive product strategy, development, and growth',
    skills: ['Product Strategy', 'Data Analysis', 'User Research', 'Agile', 'Communication', 'Business Acumen'],
    salaryRange: '₹12-60 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '8-15 months',
    keyCompanies: ['Google', 'Amazon', 'Meta', 'Uber', 'Ola', 'PhonePe'],
    futureOutlook: 'High growth as companies focus on product-led strategies'
  }
];

const CareerPaths = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const getGrowthColor = (growth: string) => {
    switch (growth) {
      case 'high':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'low':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-gradient">
            Career Paths
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore career opportunities and understand the skills needed for your dream job
          </p>
        </div>

        {/* Career Paths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {careerPaths.map((path, index) => (
            <Card 
              key={path.id} 
              className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedPath(path.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white text-xl mb-2">{path.title}</CardTitle>
                    <CardDescription className="text-gray-300 mb-3">
                      {path.description}
                    </CardDescription>
                  </div>
                  <Target className="h-6 w-6 text-purple-400 flex-shrink-0" />
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  <Badge className={getGrowthColor(path.growth)}>
                    {path.growth} growth
                  </Badge>
                  <Badge className={getGrowthColor(path.demand)}>
                    {path.demand} demand
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <DollarSign className="h-4 w-4" />
                  <span>{path.salaryRange}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Clock className="h-4 w-4" />
                  <span>Transition: {path.timeToTransition}</span>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {path.skills.slice(0, 4).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs border-purple-500/30 text-purple-300">
                        {skill}
                      </Badge>
                    ))}
                    {path.skills.length > 4 && (
                      <Badge variant="outline" className="text-xs border-gray-500/30 text-gray-400">
                        +{path.skills.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed View */}
        {selectedPath && (
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-white text-2xl">
                {careerPaths.find(p => p.id === selectedPath)?.title} - Detailed Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-white/10">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="companies">Companies</TabsTrigger>
                  <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="text-gray-300 space-y-4 mt-6">
                  {/* Overview content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-white font-semibold mb-3">Career Outlook</h3>
                      <p>{careerPaths.find(p => p.id === selectedPath)?.futureOutlook}</p>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-3">Experience Level</h3>
                      <p>{careerPaths.find(p => p.id === selectedPath)?.experienceLevel}</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="skills" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {careerPaths.find(p => p.id === selectedPath)?.skills.map((skill) => (
                      <Card key={skill} className="bg-white/5 border-white/10">
                        <CardContent className="p-4">
                          <h4 className="text-white font-medium">{skill}</h4>
                          <p className="text-gray-400 text-sm mt-1">Essential skill for this role</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="companies" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {careerPaths.find(p => p.id === selectedPath)?.keyCompanies.map((company) => (
                      <Card key={company} className="bg-white/5 border-white/10 text-center">
                        <CardContent className="p-4">
                          <h4 className="text-white font-medium">{company}</h4>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="roadmap" className="mt-6">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-white text-xl font-semibold mb-4">Learning Roadmap</h3>
                      <p className="text-gray-300">Coming soon - Detailed step-by-step roadmaps for each career path</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CareerPaths;
