
import { Star } from "lucide-react";

export const FoundationalSkillsHeader = () => {
  return (
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
  );
};
