import { Star, ArrowRight, BookOpen, Users, MessageCircle, Lightbulb, Heart, Calculator, Compass, Target, Clock, TrendingUp, CheckCircle, Play, ExternalLink, Zap, Award, Timer, Calendar, BookMarked, Smartphone, Headphones, FileText, Video, Globe, DollarSign, Brain, Building, Rocket, PieChart, Users2, Handshake, TrendingDown, AlertTriangle, Crown, Coins } from "lucide-react";
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

  const financialFreedomPathways = [
    {
      phase: "Foundation Builder (Years 1-2)",
      focus: "Master High-Value Skills + Build Financial Literacy",
      description: "Develop marketable skills while learning money management fundamentals",
      keyActions: [
        "Master 2-3 complementary high-income skills (digital marketing + copywriting + analytics)",
        "Build emergency fund of 6 months expenses",
        "Start freelancing to test market demand for your skills",
        "Learn basic investment principles and start with index funds",
        "Create multiple income streams (main job + side projects + investments)"
      ],
      incomeTarget: "$50K-$80K annually across all streams",
      wealthBuilding: "Save 20-30% of income, invest in low-cost index funds",
      timeCommitment: "2-3 hours daily skill development + 1 hour financial education"
    },
    {
      phase: "Value Creator (Years 3-5)",
      focus: "Scale Services + Launch Products + Strategic Investments",
      description: "Transition from selling time to creating scalable value",
      keyActions: [
        "Launch digital products (courses, templates, software tools)",
        "Build audience of 10K+ followers in your expertise area",
        "Start consulting/coaching at premium rates ($150-$500/hour)",
        "Invest in real estate or growth stocks with higher allocation",
        "Form strategic partnerships and joint ventures"
      ],
      incomeTarget: "$100K-$200K annually with 40%+ from scalable sources",
      wealthBuilding: "Diversify: 40% growth investments, 30% real estate, 20% index funds, 10% alternative investments",
      timeCommitment: "Focus on leverage - systems and people doing work for you"
    },
    {
      phase: "Wealth Multiplier (Years 5+)",
      focus: "Ownership + Equity + Passive Income Dominance",
      description: "Transition to ownership and equity-based wealth building",
      keyActions: [
        "Start/acquire businesses in your area of expertise",
        "Negotiate equity stakes in companies you consult for",
        "Create intellectual property portfolios (patents, trademarks, copyrights)",
        "Angel invest in startups within your knowledge domain",
        "Build passive income streams exceeding living expenses"
      ],
      incomeTarget: "$500K+ annually with 70%+ from assets/equity",
      wealthBuilding: "Focus on cash-flowing assets and equity appreciation",
      timeCommitment: "Strategic oversight - your systems and investments work for you"
    }
  ];

  const skillToBusinessModels = [
    {
      skillCategory: "Digital & Tech Skills",
      businessModels: [
        {
          model: "SaaS Product",
          description: "Build software tools solving specific problems",
          examples: "Project management tools, automation software, niche calculators",
          revenueModel: "Monthly subscriptions $29-$299/month per user",
          startupCost: "$5K-$50K",
          timeToProfit: "12-24 months",
          scalability: "Extremely high - software scales infinitely"
        },
        {
          model: "Digital Agency",
          description: "Provide specialized services to businesses",
          examples: "SEO agency, web development, digital marketing",
          revenueModel: "Retainer fees $2K-$20K/month per client",
          startupCost: "$2K-$10K",
          timeToProfit: "3-6 months",
          scalability: "High with team building and systematization"
        },
        {
          model: "Online Education",
          description: "Teach your skills through courses and coaching",
          examples: "Coding bootcamps, design masterclasses, marketing courses",
          revenueModel: "Course sales $297-$2997 + coaching $200-$500/hour",
          startupCost: "$1K-$5K",
          timeToProfit: "6-12 months",
          scalability: "Very high - create once, sell repeatedly"
        }
      ]
    },
    {
      skillCategory: "Creative & Content Skills",
      businessModels: [
        {
          model: "Content Media Empire",
          description: "Build audience and monetize through multiple channels",
          examples: "YouTube channels, newsletters, podcasts, social media",
          revenueModel: "Sponsorships, affiliate marketing, product sales",
          startupCost: "$500-$5K",
          timeToProfit: "12-18 months",
          scalability: "Very high with content systems and team"
        },
        {
          model: "Creative Services Business",
          description: "High-end creative services for premium clients",
          examples: "Brand design, video production, content strategy",
          revenueModel: "Project fees $5K-$100K+ per client",
          startupCost: "$2K-$15K",
          timeToProfit: "3-9 months",
          scalability: "Medium to high with team and processes"
        }
      ]
    },
    {
      skillCategory: "Business & Finance Skills",
      businessModels: [
        {
          model: "Consulting & Advisory",
          description: "Strategic consulting for businesses in your expertise",
          examples: "Management consulting, financial advisory, business strategy",
          revenueModel: "Hourly $200-$1000+ or project $10K-$500K+",
          startupCost: "$1K-$5K",
          timeToProfit: "1-3 months",
          scalability: "Medium - limited by your time unless you build a firm"
        },
        {
          model: "Investment & Acquisition",
          description: "Buy, improve, and scale existing businesses",
          examples: "Local service businesses, e-commerce stores, rental properties",
          revenueModel: "Cash flow + equity appreciation",
          startupCost: "$50K-$500K+",
          timeToProfit: "6-24 months",
          scalability: "Extremely high with proper systems"
        }
      ]
    }
  ];

  const wealthBuildingStrategies = [
    {
      strategy: "The Skill Stack Approach",
      description: "Combine 3-4 complementary skills to create unique value propositions",
      implementation: [
        "Identify skills that multiply each other's value",
        "Example: Data Analysis + Marketing + Psychology = Conversion Optimization Expert",
        "Example: Design + Code + Business = Product Development Consultant",
        "Position yourself as the only person who can solve specific problems"
      ],
      wealthPotential: "10x higher income than single-skill specialists"
    },
    {
      strategy: "The Platform Strategy",
      description: "Build platforms that connect buyers and sellers in your expertise area",
      implementation: [
        "Create marketplaces for services in your industry",
        "Build communities around shared interests/problems",
        "Take percentage of transactions flowing through your platform",
        "Example: Create a platform connecting freelance designers with small businesses"
      ],
      wealthPotential: "Unlimited - platforms scale exponentially"
    },
    {
      strategy: "The IP Portfolio Method",
      description: "Create intellectual property that generates ongoing royalties",
      implementation: [
        "Develop proprietary methodologies and frameworks",
        "Create courses, books, and training materials",
        "License your methods to other businesses",
        "Build software tools that embody your expertise"
      ],
      wealthPotential: "Passive income that grows over time"
    },
    {
      strategy: "The Equity Acceleration Plan",
      description: "Focus on equity stakes and ownership rather than just income",
      implementation: [
        "Negotiate equity in companies you help grow",
        "Start businesses with scalable models",
        "Invest in assets that appreciate (real estate, stocks, businesses)",
        "Create businesses you can eventually sell for multiples of annual revenue"
      ],
      wealthPotential: "Millionaire potential through equity appreciation"
    }
  ];

  const financialMilestones = [
    {
      milestone: "$10K Monthly Income",
      description: "First major milestone - covering all living expenses",
      typicalTimeframe: "6-18 months with focused effort",
      keyActions: [
        "Master one high-value skill completely",
        "Build portfolio of 5-10 successful projects",
        "Establish 3-5 regular clients or income streams",
        "Optimize for profit margins, not just revenue"
      ],
      nextLevel: "Focus on scaling and systematizing your income sources"
    },
    {
      milestone: "$25K Monthly Income",
      description: "Comfortable lifestyle + serious wealth building capacity",
      typicalTimeframe: "18-36 months from starting point",
      keyActions: [
        "Launch scalable products or services",
        "Build team to handle routine tasks",
        "Diversify income across 5+ streams",
        "Start serious investing in appreciating assets"
      ],
      nextLevel: "Transition focus from income to wealth building"
    },
    {
      milestone: "$100K Monthly Income",
      description: "High-income territory - focus shifts to wealth preservation",
      typicalTimeframe: "3-7 years with consistent scaling",
      keyActions: [
        "Own businesses or equity stakes generating passive income",
        "Have investment portfolio worth $1M+",
        "Multiple income streams requiring minimal daily involvement",
        "Tax optimization and wealth protection strategies"
      ],
      nextLevel: "Focus on impact, legacy, and enjoying financial freedom"
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

        {/* NEW: Financial Freedom Through Skills Section */}
        <Card className="glass-card border-2 border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10 mb-12">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-white flex items-center gap-3 mb-4">
              <DollarSign className="h-10 w-10 text-green-400" />
              Achieve Financial Freedom Through Strategic Skill Building
            </CardTitle>
            <p className="text-gray-300 text-xl leading-relaxed">
              Transform your skills into wealth-generating assets. This isn't about climbing the corporate ladder—
              it's about building ownership, equity, and passive income streams that work while you sleep.
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            
            {/* Wealth Building Philosophy */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
                <Crown className="h-6 w-6" />
                The Ownership Mindset: Beyond Trading Time for Money
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Traditional Path (Limited Wealth)</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-red-300">
                      <TrendingDown className="h-4 w-4" />
                      <span className="text-sm">Sell time for money (hourly wages/salary)</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-300">
                      <TrendingDown className="h-4 w-4" />
                      <span className="text-sm">Income stops when you stop working</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-300">
                      <TrendingDown className="h-4 w-4" />
                      <span className="text-sm">Limited by hours in a day</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-300">
                      <TrendingDown className="h-4 w-4" />
                      <span className="text-sm">Build someone else's wealth</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Ownership Path (Unlimited Wealth)</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-green-300">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm">Create assets that generate income</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-300">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm">Income continues 24/7 without your presence</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-300">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm">Scalable through systems and people</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-300">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm">Build your own wealth and legacy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Three-Phase Wealth Building Journey */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Rocket className="h-8 w-8 text-blue-400" />
                Your 3-Phase Journey to Financial Freedom
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {financialFreedomPathways.map((phase, index) => (
                  <Card key={phase.phase} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-500/20 text-blue-300 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                          {index + 1}
                        </div>
                        <h4 className="text-xl font-semibold text-blue-300">{phase.phase}</h4>
                      </div>
                      <p className="text-purple-300 font-medium mb-3">{phase.focus}</p>
                      <p className="text-gray-300 text-sm mb-4">{phase.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm font-medium text-white mb-2">Key Actions:</h5>
                          <ul className="space-y-1">
                            {phase.keyActions.map((action, actionIndex) => (
                              <li key={actionIndex} className="flex items-start gap-2 text-gray-300 text-xs">
                                <CheckCircle className="h-3 w-3 text-green-400 mt-0.5 flex-shrink-0" />
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                          <p className="text-green-300 text-xs font-medium mb-1">Income Target:</p>
                          <p className="text-gray-300 text-xs">{phase.incomeTarget}</p>
                        </div>
                        
                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3">
                          <p className="text-yellow-300 text-xs font-medium mb-1">Wealth Strategy:</p>
                          <p className="text-gray-300 text-xs">{phase.wealthBuilding}</p>
                        </div>
                        
                        <div className="bg-purple-500/10 border border-purple-500/30 rounded p-3">
                          <p className="text-purple-300 text-xs font-medium mb-1">Time Investment:</p>
                          <p className="text-gray-300 text-xs">{phase.timeCommitment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Skill-to-Business Model Mapping */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Building className="h-8 w-8 text-orange-400" />
                Transform Skills into Scalable Business Models
              </h3>
              <div className="space-y-6">
                {skillToBusinessModels.map((category, categoryIndex) => (
                  <Card key={category.skillCategory} className="bg-white/5 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-xl text-orange-300">{category.skillCategory}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                        {category.businessModels.map((model, modelIndex) => (
                          <div key={model.model} className="bg-white/5 border border-white/10 rounded-lg p-4">
                            <h4 className="text-lg font-semibold text-white mb-2">{model.model}</h4>
                            <p className="text-gray-300 text-sm mb-3">{model.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                              <div className="bg-blue-500/10 border border-blue-500/30 rounded p-2">
                                <p className="text-blue-300 font-medium mb-1">Examples:</p>
                                <p className="text-gray-300">{model.examples}</p>
                              </div>
                              <div className="bg-green-500/10 border border-green-500/30 rounded p-2">
                                <p className="text-green-300 font-medium mb-1">Revenue Model:</p>
                                <p className="text-gray-300">{model.revenueModel}</p>
                              </div>
                              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-2">
                                <p className="text-yellow-300 font-medium mb-1">Startup Cost:</p>
                                <p className="text-gray-300">{model.startupCost}</p>
                              </div>
                              <div className="bg-purple-500/10 border border-purple-500/30 rounded p-2">
                                <p className="text-purple-300 font-medium mb-1">Scalability:</p>
                                <p className="text-gray-300">{model.scalability}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Advanced Wealth Building Strategies */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Brain className="h-8 w-8 text-purple-400" />
                Advanced Wealth Multiplication Strategies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {wealthBuildingStrategies.map((strategy, index) => (
                  <Card key={strategy.strategy} className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-purple-300 mb-3">{strategy.strategy}</h4>
                      <p className="text-gray-300 text-sm mb-4">{strategy.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <h5 className="text-sm font-medium text-white">Implementation Steps:</h5>
                        {strategy.implementation.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start gap-2">
                            <Zap className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                        <p className="text-green-300 text-sm font-medium mb-1">Wealth Potential:</p>
                        <p className="text-gray-300 text-sm">{strategy.wealthPotential}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Financial Milestones */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="h-8 w-8 text-green-400" />
                Income Milestones & Wealth Building Progression
              </h3>
              <div className="space-y-6">
                {financialMilestones.map((milestone, index) => (
                  <Card key={milestone.milestone} className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-green-500/20 text-green-300 rounded-full w-12 h-12 flex items-center justify-center font-bold">
                          <Coins className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-semibold text-green-300">{milestone.milestone}</h4>
                          <p className="text-gray-300">{milestone.description}</p>
                        </div>
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 ml-auto">
                          {milestone.typicalTimeframe}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-lg font-medium text-white mb-3">Key Actions to Reach This Level:</h5>
                          <ul className="space-y-2">
                            {milestone.keyActions.map((action, actionIndex) => (
                              <li key={actionIndex} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                          <h5 className="text-yellow-300 font-medium mb-2">Next Level Focus:</h5>
                          <p className="text-gray-300 text-sm">{milestone.nextLevel}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Action Plan */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Rocket className="h-8 w-8 text-orange-400" />
                Your 30-Day Financial Freedom Action Plan
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-orange-300">Week 1: Assessment</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Audit current skills and market value</li>
                    <li>• Research high-income skill combinations</li>
                    <li>• Set 1-year and 5-year income goals</li>
                    <li>• Calculate current expenses and financial runway</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-orange-300">Week 2: Skill Development</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Choose 1-2 skills to master first</li>
                    <li>• Create learning schedule and milestones</li>
                    <li>• Start building portfolio/proof of work</li>
                    <li>• Join communities in your target market</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-orange-300">Week 3: Market Testing</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Offer services to 5 potential clients</li>
                    <li>• Get feedback on pricing and positioning</li>
                    <li>• Refine your value proposition</li>
                    <li>• Start building email list/social following</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-orange-300">Week 4: Launch & Scale</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Launch first paid service/product</li>
                    <li>• Set up systems for client delivery</li>
                    <li>• Plan first scalable product/service</li>
                    <li>• Begin wealth building investment plan</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-500/10 border border-green-500/30 rounded-lg">
                <h4 className="text-xl font-bold text-green-300 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Critical Success Factors
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-white font-medium mb-1">Focus Over Perfection:</p>
                    <p className="text-gray-300">Master one skill completely before adding others. Depth beats breadth in wealth building.</p>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Value Creation First:</p>
                    <p className="text-gray-300">Always solve real problems for real people. Revenue follows value creation, not the other way around.</p>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Systems Thinking:</p>
                    <p className="text-gray-300">Build processes and systems from day one. Your wealth is limited by your ability to scale beyond yourself.</p>
                  </div>
                </div>
              </div>
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
