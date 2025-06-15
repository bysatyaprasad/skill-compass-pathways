
import { useState } from "react";
import { Copy, Lightbulb, Target, BookOpen, Code, Briefcase, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface AIPrompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  useCase: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  icon: any;
}

const aiPrompts: AIPrompt[] = [
  {
    id: 'roadmap-generator',
    title: 'Skill Learning Roadmap Generator',
    description: 'Generate a comprehensive learning roadmap for any skill',
    prompt: `Create a detailed 6-month learning roadmap for [SKILL NAME] with the following structure:

**Learning Path:**
- Week-by-week breakdown
- Prerequisites and fundamentals
- Core concepts and topics
- Practical projects and exercises
- Advanced topics and specializations

**Resources:**
- Recommended courses (free and paid)
- Books and documentation
- Practice platforms and tools
- Communities and forums

**Milestones:**
- Weekly and monthly goals
- Portfolio projects to build
- Skills assessments and checkpoints

**Career Integration:**
- How this skill fits into career paths
- Salary expectations and job roles
- Industry trends and future outlook

Please make it actionable and specific to my current level: [BEGINNER/INTERMEDIATE/ADVANCED]`,
    category: 'Learning',
    useCase: 'Create personalized learning paths',
    difficulty: 'beginner',
    icon: Target
  },
  {
    id: 'project-ideas',
    title: 'Skill-Based Project Ideas Generator',
    description: 'Get practical project ideas to practice and showcase skills',
    prompt: `Generate 10 hands-on project ideas for practicing [SKILL NAME] with the following details for each project:

**Project Structure:**
- Project title and brief description
- Difficulty level (Beginner/Intermediate/Advanced)
- Estimated time to complete
- Key skills you'll practice
- Tools and technologies needed

**Implementation Guide:**
- Step-by-step approach
- Learning objectives
- Challenges you might face
- Success metrics

**Portfolio Value:**
- How to present this project
- What employers look for
- GitHub readme suggestions
- Demo and presentation tips

Focus on projects that are:
- Industry-relevant and current
- Portfolio-worthy for job applications
- Progressively challenging
- Real-world applicable

My current level: [BEGINNER/INTERMEDIATE/ADVANCED]
My interests: [MENTION YOUR INTERESTS]`,
    category: 'Practice',
    useCase: 'Build practical experience',
    difficulty: 'beginner',
    icon: Code
  },
  {
    id: 'career-transition',
    title: 'Career Transition Planner',
    description: 'Plan your career transition to a new field or role',
    prompt: `Help me plan a career transition from [CURRENT ROLE/FIELD] to [TARGET ROLE/FIELD] focusing on [SKILL NAME]:

**Gap Analysis:**
- Skills I already have that transfer
- New skills I need to develop
- Experience gaps to fill
- Certifications or qualifications needed

**Transition Timeline:**
- 3-month preparation phase
- 6-month skill building phase
- 12-month implementation phase
- Key milestones and deadlines

**Strategic Approach:**
- How to leverage current experience
- Building credibility in the new field
- Networking and community building
- Portfolio and personal branding

**Job Market Insights:**
- Entry-level requirements
- Salary expectations and negotiation
- Companies and roles to target
- Interview preparation specifics

**Risk Mitigation:**
- Skills to maintain from current role
- Backup plans and alternatives
- Financial planning during transition
- Timeline flexibility options

My background: [DESCRIBE YOUR CURRENT EXPERIENCE]
My constraints: [TIME/FINANCIAL/OTHER LIMITATIONS]`,
    category: 'Career',
    useCase: 'Navigate career changes',
    difficulty: 'intermediate',
    icon: Briefcase
  },
  {
    id: 'skill-assessment',
    title: 'Skill Level Assessment',
    description: 'Evaluate your current skill level and identify improvement areas',
    prompt: `Create a comprehensive self-assessment for [SKILL NAME] to evaluate my current level:

**Knowledge Assessment:**
- Core concepts I should know at each level
- Technical terminology and definitions
- Industry best practices and standards
- Common tools and frameworks

**Practical Skills Evaluation:**
- Hands-on tasks for each difficulty level
- Problem-solving scenarios
- Real-world application questions
- Portfolio review criteria

**Assessment Framework:**
- Beginner level indicators (0-2 years)
- Intermediate level indicators (2-5 years)
- Advanced level indicators (5+ years)
- Expert level indicators (thought leadership)

**Improvement Recommendations:**
- Specific areas to focus on next
- Learning resources for weak areas
- Practice exercises and challenges
- Mentorship or coaching suggestions

**Progress Tracking:**
- How to measure improvement
- Regular assessment schedule
- Portfolio development goals
- Professional development metrics

Please make this assessment honest and constructive, helping me understand both strengths and areas for growth.`,
    category: 'Assessment',
    useCase: 'Evaluate skill proficiency',
    difficulty: 'beginner',
    icon: CheckCircle
  },
  {
    id: 'industry-trends',
    title: 'Industry Trends and Future Skills',
    description: 'Analyze industry trends and predict future skill requirements',
    prompt: `Analyze the future of [SKILL NAME] in the [INDUSTRY] industry:

**Current Market Analysis:**
- Present demand and supply
- Major players and companies using this skill
- Current salary ranges and job opportunities
- Geographic hotspots and remote work options

**Emerging Trends:**
- New technologies impacting this skill
- Evolving best practices and methodologies
- Integration with other skills and domains
- Automation and AI impact assessment

**Future Predictions (2025-2030):**
- How this skill will evolve
- New specializations emerging
- Skills that will complement it
- Potential obsolescence risks

**Strategic Recommendations:**
- How to stay ahead of the curve
- Additional skills to learn alongside
- Thought leadership opportunities
- Innovation and research directions

**Preparation Strategy:**
- Continuous learning approach
- Professional development plan
- Network building in emerging areas
- Personal branding around future trends

Focus on actionable insights that help me position myself strategically for the next 5-10 years.`,
    category: 'Trends',
    useCase: 'Future-proof your skills',
    difficulty: 'advanced',
    icon: Zap
  },
  {
    id: 'learning-plan',
    title: 'Personalized Study Plan Creator',
    description: 'Create a daily/weekly study plan tailored to your schedule',
    prompt: `Create a personalized study plan for learning [SKILL NAME]:

**My Constraints:**
- Available time per day: [X hours]
- Available days per week: [X days]
- Learning style preference: [Visual/Auditory/Kinesthetic/Reading]
- Current commitments: [Work/Study/Family]

**Study Plan Structure:**
- Daily learning schedule with time blocks
- Weekly goals and milestones
- Balance between theory and practice
- Review and reinforcement sessions

**Learning Methods:**
- Primary learning resources
- Practice exercises and projects
- Community engagement and discussions
- Progress tracking and assessment

**Motivation and Consistency:**
- Habit formation strategies
- Reward systems and milestones
- Accountability measures
- Dealing with plateaus and challenges

**Flexibility and Adaptation:**
- Plan adjustments for busy periods
- Intensive learning sessions options
- Maintenance mode for skill retention
- Advanced progression pathways

Please make this practical and sustainable for long-term success, considering my real-world constraints and commitments.`,
    category: 'Planning',
    useCase: 'Structure your learning',
    difficulty: 'beginner',
    icon: BookOpen
  }
];

const categories = ['All', 'Learning', 'Practice', 'Career', 'Assessment', 'Trends', 'Planning'];

const AIPrompts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { toast } = useToast();

  const filteredPrompts = selectedCategory === 'All' 
    ? aiPrompts 
    : aiPrompts.filter(prompt => prompt.category === selectedCategory);

  const copyToClipboard = async (prompt: string, id: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedId(id);
      toast({
        title: "Prompt copied!",
        description: "The AI prompt has been copied to your clipboard.",
      });
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the prompt manually.",
        variant: "destructive",
      });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'advanced':
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
            AI Learning Prompts
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Ready-to-use AI prompts to create personalized learning roadmaps, get project ideas, 
            and accelerate your skill development journey
          </p>
          
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 text-left">
                <Lightbulb className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">How to use these prompts:</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Copy any prompt below and paste it into ChatGPT, Claude, or your preferred AI</li>
                    <li>• Replace the placeholders (in [BRACKETS]) with your specific skill and details</li>
                    <li>• Get personalized learning plans, project ideas, and career guidance</li>
                    <li>• Use multiple prompts for different aspects of your learning journey</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-full transition-all duration-300
                ${selectedCategory === category 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                  : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPrompts.map((prompt, index) => {
            const IconComponent = prompt.icon;
            return (
              <Card 
                key={prompt.id} 
                className="glass-card hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{prompt.title}</CardTitle>
                        <div className="flex gap-2 mt-2">
                          <Badge className={getDifficultyColor(prompt.difficulty)}>
                            {prompt.difficulty}
                          </Badge>
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                            {prompt.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardDescription className="text-gray-300 mt-3">
                    {prompt.description}
                  </CardDescription>
                  
                  <div className="text-sm text-purple-300">
                    <strong>Use case:</strong> {prompt.useCase}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="bg-slate-800/50 rounded-lg p-4 mb-4 max-h-40 overflow-y-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                      {prompt.prompt}
                    </pre>
                  </div>
                  
                  <Button
                    onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    disabled={copiedId === prompt.id}
                  >
                    {copiedId === prompt.id ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Prompt
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Resources */}
        <Card className="glass-card mt-12">
          <CardHeader>
            <CardTitle className="text-white text-center">💡 Pro Tips for Better Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="font-semibold text-white mb-2">Customize the prompts:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Replace [SKILL NAME] with your specific skill</li>
                  <li>• Add your experience level and background</li>
                  <li>• Include your time constraints and goals</li>
                  <li>• Mention your learning preferences</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Get better responses:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Be specific about your current situation</li>
                  <li>• Ask follow-up questions for clarity</li>
                  <li>• Request examples and practical steps</li>
                  <li>• Iterate and refine based on results</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIPrompts;
