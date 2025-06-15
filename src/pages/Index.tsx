
import { HeroSection } from "@/components/HeroSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Target, Lightbulb, ArrowRight, Sparkles, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Discover Your Path to Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive platform designed to guide you through the evolving landscape of skills and careers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card hover:scale-105 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Skills Explorer</CardTitle>
                <CardDescription className="text-gray-300">
                  Discover 500+ skills with advanced filtering, detailed insights, and future relevance analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/skills">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Explore Skills <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover:scale-105 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">AI Learning Prompts</CardTitle>
                <CardDescription className="text-gray-300">
                  Get personalized learning roadmaps, project ideas, and study plans using AI prompts
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/ai-prompts">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    Get AI Prompts <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover:scale-105 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="p-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Career Paths</CardTitle>
                <CardDescription className="text-gray-300">
                  Navigate career transitions with detailed insights on roles, skills, and growth opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/career-paths">
                  <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                    Explore Careers <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="glass-card border-purple-500/30 text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gradient">500+</CardTitle>
                <CardDescription className="text-gray-300">Skills & Growing</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="glass-card border-blue-500/30 text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gradient">12</CardTitle>
                <CardDescription className="text-gray-300">Skill Categories</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="glass-card border-pink-500/30 text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gradient">AI-Powered</CardTitle>
                <CardDescription className="text-gray-300">Learning Prompts</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="glass-card border-green-500/30 text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gradient">Until 2050+</CardTitle>
                <CardDescription className="text-gray-300">Future-Ready Skills</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
