
import { Star, ArrowRight, BookOpen, Users, MessageCircle, Lightbulb, Heart, Calculator, Compass, Target, Clock, TrendingUp, CheckCircle, Play, ExternalLink, Zap, Award, Timer, Calendar, BookMarked, Smartphone, Headphones, FileText, Video, Globe, DollarSign, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const FoundationalSkills = () => {
  const foundationalSkills = [
    {
      name: "Digital Literacy & Computer Skills",
      icon: BookOpen,
      description: "Master essential computer operations, internet navigation, and digital communication tools",
      why: "Essential for any modern career - every job now requires basic digital competency",
      action: "Start with basic computer operations, learn email etiquette, and practice using office software",
      timeToMaster: "2-4 weeks",
      practicalSteps: [
        "Set up professional email accounts on Gmail/Outlook",
        "Learn keyboard shortcuts (Ctrl+C, Ctrl+V, Alt+Tab)",
        "Practice file organization and cloud storage (Google Drive/Dropbox)",
        "Master basic Excel/Google Sheets formulas (SUM, AVERAGE)",
        "Learn to troubleshoot common computer issues"
      ],
      dailyPractice: "30 minutes of typing practice + 1 new software feature daily",
      resources: [
        { name: "TypingClub", type: "Free Practice", url: "typingclub.com" },
        { name: "Google Digital Garage", type: "Free Course", url: "grow.google" },
        { name: "Microsoft Learn", type: "Official Training", url: "learn.microsoft.com" },
        { name: "Khan Academy Computer Programming", type: "Interactive", url: "khanacademy.org" }
      ],
      realWorldApplication: "Create a digital portfolio, automate personal budgets, manage digital documents professionally"
    },
    {
      name: "Advanced Communication",
      icon: MessageCircle,
      description: "Excel in verbal, written, and digital communication across diverse audiences",
      why: "Critical for collaboration, leadership, and career advancement in any field",
      action: "Practice public speaking, write regularly, and learn to adapt your communication style",
      timeToMaster: "Ongoing development",
      practicalSteps: [
        "Record yourself speaking for 2 minutes daily",
        "Write one professional email template per week",
        "Practice active listening with family/friends",
        "Join local Toastmasters or debate club",
        "Learn to give constructive feedback"
      ],
      dailyPractice: "Read 15 minutes + write 200 words + practice one conversation skill",
      resources: [
        { name: "Toastmasters International", type: "In-person Practice", url: "toastmasters.org" },
        { name: "Coursera Communication Courses", type: "University Level", url: "coursera.org" },
        { name: "Grammarly", type: "Writing Assistant", url: "grammarly.com" },
        { name: "TED Talks on Communication", type: "Inspiration", url: "ted.com" }
      ],
      realWorldApplication: "Lead team meetings, write compelling proposals, negotiate salaries, resolve conflicts"
    },
    {
      name: "Critical Thinking & Problem Solving",
      icon: Lightbulb,
      description: "Analyze complex problems, evaluate solutions, and make informed decisions",
      why: "Valuable in every profession and essential for navigating life's challenges",
      action: "Question assumptions, practice logical reasoning, and learn structured problem-solving methods",
      timeToMaster: "6 months to develop, lifetime to perfect",
      practicalSteps: [
        "Use the '5 Whys' technique for daily problems",
        "Practice SWOT analysis on personal decisions",
        "Challenge one assumption you hold each week",
        "Learn to identify logical fallacies in arguments",
        "Solve puzzles and brain teasers regularly"
      ],
      dailyPractice: "Solve 1 logic puzzle + question 3 assumptions + analyze 1 news article",
      resources: [
        { name: "Brilliant.org", type: "Interactive Puzzles", url: "brilliant.org" },
        { name: "Critical Thinking Course (edX)", type: "University Level", url: "edx.org" },
        { name: "Lumosity", type: "Brain Training", url: "lumosity.com" },
        { name: "Philosophy Basics", type: "Books/Podcasts", url: "various" }
      ],
      realWorldApplication: "Make better investment decisions, solve workplace conflicts, evaluate job opportunities"
    },
    {
      name: "Emotional Intelligence",
      icon: Heart,
      description: "Understand and manage emotions effectively in personal and professional settings",
      why: "Essential for teamwork, leadership, and building meaningful relationships",
      action: "Practice self-awareness, empathy, and learn conflict resolution techniques",
      timeToMaster: "3-6 months for basics, ongoing for mastery",
      practicalSteps: [
        "Keep a daily emotion journal for 2 weeks",
        "Practice naming emotions specifically (not just 'good/bad')",
        "Learn to pause before reacting in stressful situations",
        "Practice perspective-taking in disagreements",
        "Develop empathy by asking 'How might they feel?'"
      ],
      dailyPractice: "5-minute mindfulness + reflect on 1 interaction + practice gratitude",
      resources: [
        { name: "Headspace", type: "Meditation App", url: "headspace.com" },
        { name: "EQ 2.0 Book", type: "Assessment + Training", url: "bookstores" },
        { name: "Mindfulness Apps", type: "Daily Practice", url: "various" },
        { name: "Psychology Today", type: "Articles/Insights", url: "psychologytoday.com" }
      ],
      realWorldApplication: "Handle difficult customers, lead diverse teams, maintain work-life balance, build networks"
    },
    {
      name: "Financial Literacy & Management",
      icon: Calculator,
      description: "Understand personal finance, investments, and economic principles",
      why: "Crucial for personal financial security and making informed life decisions",
      action: "Learn budgeting, understand investment basics, and track your expenses",
      timeToMaster: "3-6 months for fundamentals",
      practicalSteps: [
        "Track every expense for one month using an app",
        "Create a 50/30/20 budget (needs/wants/savings)",
        "Learn compound interest with real calculations",
        "Research and open a high-yield savings account",
        "Understand the difference between good and bad debt"
      ],
      dailyPractice: "Check account balances + log expenses + read 1 financial article",
      resources: [
        { name: "Mint/YNAB", type: "Budgeting Apps", url: "mint.com" },
        { name: "Khan Academy Finance", type: "Free Education", url: "khanacademy.org" },
        { name: "The Simple Path to Wealth", type: "Book", url: "bookstores" },
        { name: "Investopedia", type: "Financial Dictionary", url: "investopedia.com" }
      ],
      realWorldApplication: "Buy a house, plan retirement, start a business, negotiate salaries, avoid debt traps"
    },
    {
      name: "Adaptability & Resilience",
      icon: Compass,
      description: "Navigate change, bounce back from setbacks, and thrive in uncertainty",
      why: "Essential in our rapidly changing world and crucial for career longevity",
      action: "Embrace new challenges, learn from failures, and develop a growth mindset",
      timeToMaster: "Ongoing development throughout life",
      practicalSteps: [
        "Try one new thing outside your comfort zone weekly",
        "Reframe failures as learning opportunities",
        "Build a support network for tough times",
        "Practice stress management techniques",
        "Develop multiple income streams or skills"
      ],
      dailyPractice: "Reflect on lessons learned + practice stress relief + embrace one small change",
      resources: [
        { name: "Mindset by Carol Dweck", type: "Foundational Book", url: "bookstores" },
        { name: "Resilience Training Apps", type: "Skill Building", url: "various" },
        { name: "Change Management Courses", type: "Professional Development", url: "coursera.org" },
        { name: "Stoicism Resources", type: "Philosophy/Practice", url: "various" }
      ],
      realWorldApplication: "Career transitions, economic downturns, technology changes, personal setbacks"
    }
  ];

  const weeklyActionPlan = [
    {
      week: "Week 1-2: Assessment & Foundation",
      focus: "Digital Literacy",
      actions: [
        "Take typing speed test and improve to 40+ WPM",
        "Set up professional email and LinkedIn profile",
        "Learn 10 essential keyboard shortcuts",
        "Organize computer files and set up cloud storage"
      ],
      outcome: "Baseline digital competency established"
    },
    {
      week: "Week 3-4: Communication Kickstart",
      focus: "Communication Skills",
      actions: [
        "Record daily 2-minute speeches on various topics",
        "Write one professional email daily",
        "Practice active listening in all conversations",
        "Join one online discussion group in your field"
      ],
      outcome: "Confidence in basic professional communication"
    },
    {
      week: "Week 5-8: Thinking & Analysis",
      focus: "Critical Thinking",
      actions: [
        "Apply '5 Whys' to solve one problem daily",
        "Analyze news articles for bias and logic",
        "Practice decision-making frameworks",
        "Solve logic puzzles and brain teasers"
      ],
      outcome: "Structured approach to problem-solving"
    },
    {
      week: "Week 9-12: Emotional & Financial Intelligence",
      focus: "EQ & Financial Literacy",
      actions: [
        "Track emotions and responses daily",
        "Create and follow a personal budget",
        "Learn investment basics and open accounts",
        "Practice empathy and conflict resolution"
      ],
      outcome: "Personal and financial self-awareness"
    }
  ];

  const learningPhases = [
    {
      phase: "Foundation Phase (Months 1-3)",
      focus: "Digital Literacy + Communication",
      goals: [
        "Master basic computer skills and digital tools",
        "Develop clear written and verbal communication",
        "Build confidence in digital environments",
        "Establish daily learning habits"
      ],
      timeline: "30-60 minutes daily practice",
      milestones: [
        "Type 50+ WPM accurately",
        "Write professional emails confidently",
        "Give 5-minute presentations without notes",
        "Navigate software and troubleshoot issues"
      ]
    },
    {
      phase: "Development Phase (Months 4-6)",
      focus: "Critical Thinking + Emotional Intelligence",
      goals: [
        "Learn structured problem-solving approaches",
        "Develop self-awareness and empathy",
        "Practice decision-making frameworks",
        "Build stress management skills"
      ],
      timeline: "1-2 hours daily across multiple skills",
      milestones: [
        "Solve complex problems systematically",
        "Manage emotions under pressure",
        "Lead difficult conversations",
        "Make data-driven decisions"
      ]
    },
    {
      phase: "Integration Phase (Months 7-12)",
      focus: "Financial Literacy + Adaptability",
      goals: [
        "Master personal finance fundamentals",
        "Develop long-term financial planning",
        "Build resilience and adaptability",
        "Apply all skills in real-world scenarios"
      ],
      timeline: "Ongoing practice and application",
      milestones: [
        "Maintain emergency fund and investments",
        "Navigate major life changes confidently",
        "Mentor others in foundational skills",
        "Continuously adapt and learn"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-6 py-2 mb-6">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-300">Foundation of Success</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-gradient">
            Essential Skills for Every Career
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master these foundational skills to future-proof your career and amplify every other skill you'll learn. 
            These aren't just nice-to-have abilities—they're the bedrock of professional success.
          </p>
        </div>

        {/* Why Start Here Section */}
        <Card className="glass-card border-2 border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="h-8 w-8 text-yellow-400" />
              Why Start with Foundational Skills?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="h-6 w-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-yellow-300">The 80/20 Rule</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  80% of your career success comes from mastering these 20% foundational skills. 
                  They create a multiplier effect for every technical skill you learn.
                </p>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-300 text-sm font-medium mb-1">ROI Example:</p>
                  <p className="text-gray-300 text-sm">
                    1 month improving communication = 10+ years of better collaboration
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-300">Universal Value</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Unlike technical skills that become obsolete, these skills transfer across 
                  industries, roles, and decades. Future-proof your career.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-300 text-sm font-medium mb-1">Career Insurance:</p>
                  <p className="text-gray-300 text-sm">
                    Strong foundations help you pivot successfully when industries change
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-purple-300">Immediate Impact</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  See results in weeks, not years. These skills provide immediate value 
                  in your current role while building long-term success.
                </p>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <p className="text-purple-300 text-sm font-medium mb-1">Quick Wins:</p>
                  <p className="text-gray-300 text-sm">
                    Better emails → clearer communication → faster project completion
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 12-Week Action Plan */}
        <Card className="glass-card border-2 border-green-500/30 bg-gradient-to-r from-green-500/10 to-teal-500/10 mb-12">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-white flex items-center gap-3">
              <Calendar className="h-8 w-8 text-green-400" />
              Your 12-Week Transformation Plan
            </CardTitle>
            <p className="text-gray-300 text-lg">
              Follow this week-by-week guide to build all foundational skills systematically
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {weeklyActionPlan.map((week, index) => (
                <Card key={week.week} className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-green-500/20 text-green-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-green-300">{week.week}</h3>
                    </div>
                    <p className="text-blue-300 font-medium mb-3">Focus: {week.focus}</p>
                    <div className="space-y-2 mb-4">
                      {week.actions.map((action, actionIndex) => (
                        <div key={actionIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{action}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3">
                      <p className="text-yellow-300 text-sm font-medium mb-1">Expected Outcome:</p>
                      <p className="text-gray-300 text-sm">{week.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Skills Breakdown */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            The Six Pillars: Deep Dive & Action Plans
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {foundationalSkills.map((skill, index) => (
              <Card key={skill.name} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-yellow-500/20">
                      <skill.icon className="h-8 w-8 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white mb-2">{skill.name}</CardTitle>
                      <p className="text-gray-300 text-base mb-3">{skill.description}</p>
                      <div className="flex gap-2 mb-3">
                        <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                          <Timer className="h-3 w-3 mr-1" />
                          {skill.timeToMaster}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                      <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                        <p className="text-green-300 text-sm font-medium mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4" />
                          Why It Matters:
                        </p>
                        <p className="text-gray-300 text-sm">{skill.why}</p>
                      </div>
                      
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded p-4">
                        <p className="text-blue-300 text-sm font-medium mb-2 flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Daily Practice:
                        </p>
                        <p className="text-gray-300 text-sm">{skill.dailyPractice}</p>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/30 rounded p-4">
                        <p className="text-purple-300 text-sm font-medium mb-2 flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          Real-World Applications:
                        </p>
                        <p className="text-gray-300 text-sm">{skill.realWorldApplication}</p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      <div className="bg-orange-500/10 border border-orange-500/30 rounded p-4">
                        <p className="text-orange-300 text-sm font-medium mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Action Steps:
                        </p>
                        <ul className="space-y-2">
                          {skill.practicalSteps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                              <div className="bg-orange-400/20 text-orange-300 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                                {stepIndex + 1}
                              </div>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-teal-500/10 border border-teal-500/30 rounded p-4">
                        <p className="text-teal-300 text-sm font-medium mb-3 flex items-center gap-2">
                          <BookMarked className="h-4 w-4" />
                          Best Resources:
                        </p>
                        <ul className="space-y-2">
                          {skill.resources.map((resource, resIndex) => (
                            <li key={resIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                              <ExternalLink className="h-3 w-3 text-teal-400 mt-1 flex-shrink-0" />
                              <div>
                                <span className="font-medium">{resource.name}</span>
                                <span className="text-teal-300 ml-2">({resource.type})</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategic Learning Plan */}
        <Card className="glass-card border-2 border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-blue-500/10 mb-12">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-purple-400" />
              Your Strategic 12-Month Development Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {learningPhases.map((phase, index) => (
                <Card key={phase.phase} className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">{phase.phase}</h3>
                    <p className="text-blue-300 font-medium mb-3">Focus: {phase.focus}</p>
                    <p className="text-gray-400 text-sm mb-4">{phase.timeline}</p>
                    
                    <div className="space-y-3 mb-4">
                      <h4 className="text-sm font-medium text-white">Goals:</h4>
                      {phase.goals.map((goal, goalIndex) => (
                        <div key={goalIndex} className="flex items-start gap-2">
                          <Play className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{goal}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Key Milestones:</h4>
                      {phase.milestones.map((milestone, milestoneIndex) => (
                        <div key={milestoneIndex} className="flex items-start gap-2">
                          <Award className="h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Career Foundation?</h2>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            These skills are your ticket to career resilience and success. Start with Week 1 of the 12-week plan—
            small daily improvements compound into extraordinary results over time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/skills">
              <Button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-3">
                Explore All Skills
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link to="/ai-prompts">
              <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3">
                Get AI Learning Prompts
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-yellow-500/20">
            <p className="text-yellow-300 font-medium mb-2">Pro Tip:</p>
            <p className="text-gray-400 text-sm">
              Focus on just ONE skill for the first month. Mastery comes from depth, not breadth. 
              Once you've built the habit, gradually add the others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationalSkills;
