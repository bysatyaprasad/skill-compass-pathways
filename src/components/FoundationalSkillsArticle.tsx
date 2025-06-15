
import { Star, ArrowRight, BookOpen, Users, MessageCircle, Lightbulb, Heart, Calculator, Compass, Target, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const FoundationalSkillsArticle = () => {
  const foundationalSkills = [
    {
      name: "Digital Literacy & Computer Skills",
      icon: BookOpen,
      description: "Master essential computer operations, internet navigation, and digital communication tools",
      why: "Essential for any modern career",
      action: "Start with basic computer operations, learn email etiquette, and practice using office software"
    },
    {
      name: "Advanced Communication",
      icon: MessageCircle,
      description: "Excel in verbal, written, and digital communication across diverse audiences",
      why: "Critical for collaboration and leadership",
      action: "Practice public speaking, write regularly, and learn to adapt your communication style"
    },
    {
      name: "Critical Thinking & Problem Solving",
      icon: Lightbulb,
      description: "Analyze complex problems, evaluate solutions, and make informed decisions",
      why: "Valuable in every profession and daily life",
      action: "Question assumptions, practice logical reasoning, and learn structured problem-solving methods"
    },
    {
      name: "Emotional Intelligence",
      icon: Heart,
      description: "Understand and manage emotions effectively in personal and professional settings",
      why: "Essential for teamwork and leadership",
      action: "Practice self-awareness, empathy, and learn conflict resolution techniques"
    },
    {
      name: "Financial Literacy & Management",
      icon: Calculator,
      description: "Understand personal finance, investments, and economic principles",
      why: "Crucial for personal financial security",
      action: "Learn budgeting, understand investment basics, and track your expenses"
    },
    {
      name: "Adaptability & Resilience",
      icon: Compass,
      description: "Navigate change, bounce back from setbacks, and thrive in uncertainty",
      why: "Essential in our rapidly changing world",
      action: "Embrace new challenges, learn from failures, and develop a growth mindset"
    }
  ];

  return (
    <Card className="glass-card border-2 border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 mb-8">
      <CardHeader className="pb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-full bg-yellow-500/20">
            <Star className="h-8 w-8 text-yellow-400" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold text-white mb-2">
              The Foundation of Success: Essential Skills for Every Career
            </CardTitle>
            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
              Start Here - Beginner Friendly
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-8">
        {/* Introduction */}
        <div className="prose prose-invert max-w-none">
          <div className="text-gray-200 leading-relaxed space-y-4">
            <p className="text-lg">
              Whether you're just starting your career journey or looking to future-proof your professional life, 
              foundational skills are your most valuable investment. These aren't just "nice-to-have" abilities—they're 
              the bedrock upon which all successful careers are built.
            </p>
            
            <p>
              <strong className="text-yellow-300">Why start with foundational skills?</strong> Because they're universally 
              transferable. Unlike technical skills that may become obsolete, these core competencies remain relevant 
              across industries, roles, and decades. They amplify every other skill you'll learn.
            </p>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-6">
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-blue-300 font-semibold mb-2">The 80/20 Rule for Skills</h4>
                  <p className="text-gray-300">
                    80% of your career success will come from mastering these 20% foundational skills. 
                    They create a multiplier effect for everything else you learn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Breakdown */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Users className="h-6 w-6 text-yellow-400" />
            The Six Pillars of Professional Success
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {foundationalSkills.map((skill, index) => (
              <Card key={skill.name} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-yellow-500/20">
                      <skill.icon className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{skill.name}</h4>
                      <p className="text-gray-300 text-sm mb-3">{skill.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                      <p className="text-green-300 text-sm font-medium mb-1">Why It Matters:</p>
                      <p className="text-gray-300 text-sm">{skill.why}</p>
                    </div>
                    
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded p-3">
                      <p className="text-purple-300 text-sm font-medium mb-1">Action Steps:</p>
                      <p className="text-gray-300 text-sm">{skill.action}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategic Advice Section */}
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-purple-400" />
            Your Strategic Development Plan
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-300">Phase 1: Foundation (Months 1-3)</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                  Start with Digital Literacy and Communication
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                  Practice daily for 30-60 minutes
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                  Focus on one skill at a time for deep learning
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-300">Phase 2: Integration (Months 4-6)</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                  Add Critical Thinking and Emotional Intelligence
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                  Apply skills in real projects and situations
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                  Seek feedback and continuous improvement
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-3">Ready to Build Your Foundation?</h3>
          <p className="text-gray-300 mb-4">
            These skills are your ticket to career resilience and success. Start with any one that resonates with you—
            the key is to begin today and stay consistent.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white">
              Explore All Skills Below
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
