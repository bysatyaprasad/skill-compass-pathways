
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">Discover Your Future Skills</span>
            <TrendingUp className="h-4 w-4 text-pink-400" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-8 animate-slide-up">
          <span className="text-gradient">SkillSphere</span>
          <br />
          <span className="text-white">Your Career Compass</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Navigate the future of work with confidence. Discover emerging skills, understand market trends, 
          and build your path to success in the digital age.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 animate-glow group min-w-[200px]"
          >
            Explore Skills
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm min-w-[200px]"
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">50+</div>
            <div className="text-gray-400">Future Skills Mapped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">2024-2050</div>
            <div className="text-gray-400">Relevance Timeline</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">AI-Powered</div>
            <div className="text-gray-400">Trend Analysis</div>
          </div>
        </div>
      </div>
    </section>
  );
};
