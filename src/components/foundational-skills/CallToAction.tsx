
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
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
        <Link to="/financial-freedom">
          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3">
            Achieve Financial Freedom
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
  );
};
