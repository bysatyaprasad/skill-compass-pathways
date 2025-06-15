
import { SkillsGrid } from "@/components/SkillsGrid";
import { SkillsStatsBar } from "@/components/SkillsStatsBar";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Skill Explorer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover in-demand skills, explore career paths, and find the perfect learning journey 
            tailored to your goals. From foundational skills to cutting-edge technologies.
          </p>
        </div>

        {/* Stats Bar */}
        <SkillsStatsBar />

        {/* Main Skills Grid */}
        <SkillsGrid skillsPerPage={12} />

        {/* Footer Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-gray-300 mb-6">
              Each skill card shows you exactly what you need to know: difficulty level, 
              time to learn, salary expectations, and current market demand.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Foundational Skills</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Emerging Technologies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>High Demand</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
