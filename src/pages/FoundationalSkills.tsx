
import { Star, ArrowRight, BookOpen, Users, MessageCircle, Lightbulb, Heart, Calculator, Compass, Target, Clock, TrendingUp, CheckCircle, Play, ExternalLink } from "lucide-react";
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
      resources: [
        "Free courses on Khan Academy",
        "Microsoft Office tutorials",
        "Google Workspace basics",
        "Typing practice websites"
      ],
      progressSteps: [
        "Learn basic computer navigation and file management",
        "Master email communication and etiquette",
        "Practice with word processing and spreadsheets",
        "Understand internet research and digital security"
      ]
    },
    {
      name: "Advanced Communication",
      icon: MessageCircle,
      description: "Excel in verbal, written, and digital communication across diverse audiences",
      why: "Critical for collaboration, leadership, and career advancement in any field",
      action: "Practice public speaking, write regularly, and learn to adapt your communication style",
      timeToMaster: "Ongoing development",
      resources: [
        "Toastmasters International",
        "Writing workshops and courses",
        "Public speaking apps",
        "Communication skills books"
      ],
      progressSteps: [
        "Practice active listening daily",
        "Write clearly and concisely",
        "Learn presentation skills",
        "Develop cross-cultural communication awareness"
      ]
    },
    {
      name: "Critical Thinking & Problem Solving",
      icon: Lightbulb,
      description: "Analyze complex problems, evaluate solutions, and make informed decisions",
      why: "Valuable in every profession and essential for navigating life's challenges",
      action: "Question assumptions, practice logical reasoning, and learn structured problem-solving methods",
      timeToMaster: "6 months to develop, lifetime to perfect",
      resources: [
        "Logic and reasoning courses",
        "Case study analyses",
        "Philosophy and ethics books",
        "Critical thinking apps and games"
      ],
      progressSteps: [
        "Learn to identify assumptions and biases",
        "Practice breaking down complex problems",
        "Develop hypothesis testing skills",
        "Master decision-making frameworks"
      ]
    },
    {
      name: "Emotional Intelligence",
      icon: Heart,
      description: "Understand and manage emotions effectively in personal and professional settings",
      why: "Essential for teamwork, leadership, and building meaningful relationships",
      action: "Practice self-awareness, empathy, and learn conflict resolution techniques",
      timeToMaster: "3-6 months for basics, ongoing for mastery",
      resources: [
        "EQ assessment tools",
        "Mindfulness and meditation apps",
        "Psychology courses",
        "Leadership development programs"
      ],
      progressSteps: [
        "Develop self-awareness through reflection",
        "Practice empathy and perspective-taking",
        "Learn stress management techniques",
        "Master conflict resolution skills"
      ]
    },
    {
      name: "Financial Literacy & Management",
      icon: Calculator,
      description: "Understand personal finance, investments, and economic principles",
      why: "Crucial for personal financial security and making informed life decisions",
      action: "Learn budgeting, understand investment basics, and track your expenses",
      timeToMaster: "3-6 months for fundamentals",
      resources: [
        "Personal finance apps",
        "Investment education platforms",
        "Financial planning courses",
        "Economic literacy books"
      ],
      progressSteps: [
        "Create and maintain a personal budget",
        "Understand different types of investments",
        "Learn about insurance and risk management",
        "Develop long-term financial planning skills"
      ]
    },
    {
      name: "Adaptability & Resilience",
      icon: Compass,
      description: "Navigate change, bounce back from setbacks, and thrive in uncertainty",
      why: "Essential in our rapidly changing world and crucial for career longevity",
      action: "Embrace new challenges, learn from failures, and develop a growth mindset",
      timeToMaster: "Ongoing development throughout life",
      resources: [
        "Growth mindset resources",
        "Resilience training programs",
        "Change management courses",
        "Stress management workshops"
      ],
      progressSteps: [
        "Develop a growth mindset",
        "Practice embracing change and uncertainty",
        "Build coping strategies for stress",
        "Learn from failures and setbacks"
      ]
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
      timeline: "30-60 minutes daily practice"
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
      timeline: "1-2 hours daily across multiple skills"
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
      timeline: "Ongoing practice and application"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-yellow-300">The 80/20 Rule for Career Success</h3>
                <p className="text-gray-300 leading-relaxed">
                  Research shows that 80% of your career success comes from mastering these 20% foundational skills. 
                  They create a multiplier effect—making every technical skill you learn more powerful and every 
                  opportunity more accessible.
                </p>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-300 text-sm font-medium mb-1">Universal Transferability:</p>
                  <p className="text-gray-300 text-sm">
                    Unlike technical skills that may become obsolete, foundational skills remain relevant 
                    across industries, roles, and decades.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-yellow-300">Investment That Pays Forever</h3>
                <p className="text-gray-300 leading-relaxed">
                  Time invested in foundational skills compounds over your entire career. A single month spent 
                  improving communication skills will benefit you for decades, regardless of how technology 
                  or your industry evolves.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-300 text-sm font-medium mb-1">Future-Proof Investment:</p>
                  <p className="text-gray-300 text-sm">
                    These skills become more valuable as automation increases, making human-centric 
                    abilities increasingly rare and precious.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Breakdown */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            The Six Pillars of Professional Success
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {foundationalSkills.map((skill, index) => (
              <Card key={skill.name} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-yellow-500/20">
                      <skill.icon className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white mb-2">{skill.name}</CardTitle>
                      <p className="text-gray-300 text-sm mb-3">{skill.description}</p>
                      <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 mb-3">
                        Time to master: {skill.timeToMaster}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                      <p className="text-green-300 text-sm font-medium mb-1">Why It Matters:</p>
                      <p className="text-gray-300 text-sm">{skill.why}</p>
                    </div>
                    
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded p-3">
                      <p className="text-purple-300 text-sm font-medium mb-1">Getting Started:</p>
                      <p className="text-gray-300 text-sm">{skill.action}</p>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3">
                      <p className="text-blue-300 text-sm font-medium mb-2">Progress Steps:</p>
                      <ul className="space-y-1">
                        {skill.progressSteps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                            <CheckCircle className="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-orange-500/10 border border-orange-500/30 rounded p-3">
                      <p className="text-orange-300 text-sm font-medium mb-2">Learning Resources:</p>
                      <ul className="space-y-1">
                        {skill.resources.map((resource, resIndex) => (
                          <li key={resIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                            <ExternalLink className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                            {resource}
                          </li>
                        ))}
                      </ul>
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
                    <div className="space-y-2">
                      {phase.goals.map((goal, goalIndex) => (
                        <div key={goalIndex} className="flex items-start gap-2">
                          <Play className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{goal}</span>
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
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Build Your Foundation?</h2>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            These skills are your ticket to career resilience and success. Start with any one that resonates with you—
            the key is to begin today and stay consistent. Remember: small daily improvements compound into 
            extraordinary results over time.
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
        </div>
      </div>
    </div>
  );
};

export default FoundationalSkills;
