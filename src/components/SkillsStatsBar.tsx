
import { useMemo } from "react";
import { allSkills } from "@/data/skillsData";
import { TrendingUp, TrendingDown, Minus, Star } from "lucide-react";

export const SkillsStatsBar = () => {
  const stats = useMemo(() => {
    const total = allSkills.length;
    const foundational = allSkills.filter(s => s.isFoundational).length;
    const emerging = allSkills.filter(s => s.status === 'emerging').length;
    const highDemand = allSkills.filter(s => s.demandLevel === 'high').length;
    const beginner = allSkills.filter(s => s.difficulty === 'beginner').length;
    
    return {
      total,
      foundational,
      emerging,
      highDemand,
      beginner
    };
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
        <div className="text-2xl font-bold text-white">{stats.total}</div>
        <div className="text-sm text-gray-300">Total Skills</div>
      </div>
      
      <div className="bg-yellow-500/10 backdrop-blur-sm rounded-2xl p-4 border border-yellow-500/20">
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-yellow-400" />
          <div className="text-2xl font-bold text-yellow-200">{stats.foundational}</div>
        </div>
        <div className="text-sm text-yellow-300">Foundational</div>
      </div>
      
      <div className="bg-green-500/10 backdrop-blur-sm rounded-2xl p-4 border border-green-500/20">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-green-400" />
          <div className="text-2xl font-bold text-green-200">{stats.emerging}</div>
        </div>
        <div className="text-sm text-green-300">Emerging</div>
      </div>
      
      <div className="bg-purple-500/10 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
        <div className="text-2xl font-bold text-purple-200">{stats.highDemand}</div>
        <div className="text-sm text-purple-300">High Demand</div>
      </div>
      
      <div className="bg-blue-500/10 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/20">
        <div className="text-2xl font-bold text-blue-200">{stats.beginner}</div>
        <div className="text-sm text-blue-300">Beginner Friendly</div>
      </div>
    </div>
  );
};
