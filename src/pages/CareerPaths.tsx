
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
    keyCompanies: ['Flipkart', 'Swiggy', 'Zomato', 'Paytm', 'Byjus', 'Razorpay'],
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
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Extract insights from data to drive business decisions',
    skills: ['Python', 'R', 'SQL', 'Statistics', 'Machine Learning', 'Data Visualization'],
    salaryRange: '₹10-45 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '8-14 months',
    keyCompanies: ['Netflix', 'Airbnb', 'LinkedIn', 'Walmart Labs', 'JPMorgan', 'Goldman Sachs'],
    futureOutlook: 'Strong demand as data becomes core business asset'
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Bridge development and operations for efficient software delivery',
    skills: ['Docker', 'Kubernetes', 'AWS/Azure', 'CI/CD', 'Linux', 'Terraform'],
    salaryRange: '₹12-40 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '10-16 months',
    keyCompanies: ['Amazon', 'Microsoft', 'Red Hat', 'Atlassian', 'GitLab', 'HashiCorp'],
    futureOutlook: 'Critical role in cloud-first infrastructure strategies'
  },
  {
    id: 'cybersecurity-specialist',
    title: 'Cybersecurity Specialist',
    description: 'Protect organizations from cyber threats and security breaches',
    skills: ['Network Security', 'Ethical Hacking', 'Risk Assessment', 'Compliance', 'Incident Response', 'SIEM'],
    salaryRange: '₹8-35 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '12-18 months',
    keyCompanies: ['Palo Alto Networks', 'CrowdStrike', 'Fortinet', 'IBM Security', 'Accenture', 'Deloitte'],
    futureOutlook: 'Exponential growth due to increasing cyber threats'
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Solutions Architect',
    description: 'Design and implement scalable cloud infrastructure solutions',
    skills: ['AWS/Azure/GCP', 'System Design', 'Microservices', 'Security', 'Cost Optimization', 'Migration'],
    salaryRange: '₹18-55 LPA',
    experienceLevel: 'Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '18-24 months',
    keyCompanies: ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud', 'Oracle', 'VMware'],
    futureOutlook: 'Essential as enterprises migrate to cloud-first strategies'
  },
  {
    id: 'ux-designer',
    title: 'UX/UI Designer',
    description: 'Create intuitive and engaging user experiences for digital products',
    skills: ['Design Thinking', 'Figma', 'User Research', 'Prototyping', 'Usability Testing', 'Visual Design'],
    salaryRange: '₹6-30 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '6-10 months',
    keyCompanies: ['Adobe', 'Airbnb', 'Spotify', 'Zomato', 'Phonepe', 'Flipkart'],
    futureOutlook: 'Growing importance as user experience becomes competitive advantage'
  },
  {
    id: 'blockchain-developer',
    title: 'Blockchain Developer',
    description: 'Build decentralized applications and smart contracts',
    skills: ['Solidity', 'Web3', 'Smart Contracts', 'Ethereum', 'DeFi', 'Cryptography'],
    salaryRange: '₹10-45 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'medium',
    timeToTransition: '12-18 months',
    keyCompanies: ['Coinbase', 'Binance', 'Polygon', 'WazirX', 'CoinDCX', 'Zebpay'],
    futureOutlook: 'High potential as Web3 and DeFi ecosystems mature'
  },
  {
    id: 'mobile-developer',
    title: 'Mobile App Developer',
    description: 'Create native and cross-platform mobile applications',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Mobile UI/UX', 'App Store Optimization'],
    salaryRange: '₹7-32 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '8-12 months',
    keyCompanies: ['Google', 'Apple', 'Uber', 'Instagram', 'WhatsApp', 'Swiggy'],
    futureOutlook: 'Steady demand as mobile-first approach continues'
  },
  {
    id: 'digital-marketing-manager',
    title: 'Digital Marketing Manager',
    description: 'Drive online marketing strategies and customer acquisition',
    skills: ['SEO/SEM', 'Social Media Marketing', 'Content Strategy', 'Analytics', 'Paid Advertising', 'Marketing Automation'],
    salaryRange: '₹5-25 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '4-8 months',
    keyCompanies: ['Google', 'Meta', 'Amazon', 'HubSpot', 'Salesforce', 'Adobe'],
    futureOutlook: 'Essential as businesses prioritize digital presence'
  },
  {
    id: 'sales-engineer',
    title: 'Technical Sales Engineer',
    description: 'Bridge technical products with customer needs and sales',
    skills: ['Technical Communication', 'Solution Architecture', 'CRM', 'Presentation', 'Negotiation', 'Product Knowledge'],
    salaryRange: '₹8-40 LPA',
    experienceLevel: 'Intermediate',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '6-10 months',
    keyCompanies: ['Salesforce', 'Oracle', 'Microsoft', 'IBM', 'SAP', 'Cisco'],
    futureOutlook: 'Growing need for technical expertise in B2B sales'
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    description: 'Analyze business processes and recommend technology solutions',
    skills: ['Requirements Analysis', 'Process Mapping', 'SQL', 'Data Analysis', 'Stakeholder Management', 'Documentation'],
    salaryRange: '₹6-28 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '4-8 months',
    keyCompanies: ['Accenture', 'TCS', 'Infosys', 'Capgemini', 'Deloitte', 'EY'],
    futureOutlook: 'Stable demand for digital transformation initiatives'
  },
  {
    id: 'qa-engineer',
    title: 'QA/Test Engineer',
    description: 'Ensure software quality through testing and automation',
    skills: ['Test Automation', 'Selenium', 'API Testing', 'Performance Testing', 'Bug Tracking', 'Test Planning'],
    salaryRange: '₹4-22 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '4-8 months',
    keyCompanies: ['Microsoft', 'Google', 'Amazon', 'Cognizant', 'Wipro', 'HCL'],
    futureOutlook: 'Consistent demand as software quality becomes critical'
  },
  {
    id: 'content-creator',
    title: 'Digital Content Creator',
    description: 'Create engaging content across digital platforms',
    skills: ['Content Writing', 'Video Editing', 'Social Media', 'SEO', 'Analytics', 'Brand Building'],
    salaryRange: '₹3-20 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '3-6 months',
    keyCompanies: ['YouTube', 'Instagram', 'LinkedIn', 'Medium', 'Substack', 'Patreon'],
    futureOutlook: 'Explosive growth in creator economy and personal branding'
  },
  {
    id: 'fintech-analyst',
    title: 'FinTech Analyst',
    description: 'Analyze financial technology trends and investment opportunities',
    skills: ['Financial Analysis', 'Python/R', 'SQL', 'Risk Management', 'Regulatory Knowledge', 'Market Research'],
    salaryRange: '₹8-35 LPA',
    experienceLevel: 'Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '8-12 months',
    keyCompanies: ['JPMorgan Chase', 'Goldman Sachs', 'Paytm', 'Razorpay', 'CRED', 'Zerodha'],
    futureOutlook: 'High growth as financial services digitize rapidly'
  },
  {
    id: 'game-developer',
    title: 'Game Developer',
    description: 'Create interactive gaming experiences across platforms',
    skills: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Game Design', '3D Modeling'],
    salaryRange: '₹5-30 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'high',
    demand: 'medium',
    timeToTransition: '10-15 months',
    keyCompanies: ['Ubisoft', 'EA Games', 'Rockstar', 'Dream11', 'MPL', 'Nazara'],
    futureOutlook: 'Growing rapidly with mobile gaming and esports boom'
  },
  {
    id: 'robotics-engineer',
    title: 'Robotics Engineer',
    description: 'Design and develop robotic systems and automation solutions',
    skills: ['ROS', 'Python', 'C++', 'Computer Vision', 'Control Systems', 'Mechanical Design'],
    salaryRange: '₹8-40 LPA',
    experienceLevel: 'Advanced',
    growth: 'high',
    demand: 'medium',
    timeToTransition: '15-24 months',
    keyCompanies: ['Boston Dynamics', 'Tesla', 'ABB', 'KUKA', 'Fanuc', 'Tata Motors'],
    futureOutlook: 'Emerging field with automation driving industrial transformation'
  },
  {
    id: 'sustainability-consultant',
    title: 'Sustainability Consultant',
    description: 'Help organizations implement sustainable and eco-friendly practices',
    skills: ['Environmental Analysis', 'Sustainability Reporting', 'ESG', 'Carbon Footprint', 'Renewable Energy', 'Policy'],
    salaryRange: '₹6-30 LPA',
    experienceLevel: 'Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '8-12 months',
    keyCompanies: ['McKinsey', 'Deloitte', 'Accenture', 'EY', 'KPMG', 'Tata Consultancy'],
    futureOutlook: 'Critical growth area as ESG becomes business imperative'
  },
  {
    id: 'technical-writer',
    title: 'Technical Writer',
    description: 'Create clear documentation and content for technical products',
    skills: ['Technical Writing', 'API Documentation', 'Content Strategy', 'User Guides', 'Information Architecture', 'Tools Knowledge'],
    salaryRange: '₹4-20 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'medium',
    demand: 'medium',
    timeToTransition: '3-6 months',
    keyCompanies: ['Google', 'Microsoft', 'Amazon', 'Atlassian', 'MongoDB', 'Stripe'],
    futureOutlook: 'Steady demand as complex products need clear documentation'
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
            Explore {careerPaths.length} career opportunities and understand the skills needed for your dream job
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
