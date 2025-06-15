
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus, Clock, Star, Zap } from "lucide-react";

interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  status: 'emerging' | 'stable' | 'declining';
  relevancePeriod: string;
  demandLevel: 'high' | 'medium' | 'low';
  icon: any;
  color: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeToLearn: string;
  salary: string;
  isFoundational?: boolean;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  const IconComponent = skill.icon;
  
  const getStatusIcon = () => {
    switch (skill.status) {
      case 'emerging':
        return <TrendingUp className="h-4 w-4 text-green-400" />;
      case 'stable':
        return <Minus className="h-4 w-4 text-blue-400" />;
      case 'declining':
        return <TrendingDown className="h-4 w-4 text-red-400" />;
    }
  };
  
  const getStatusColor = () => {
    switch (skill.status) {
      case 'emerging':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'stable':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'declining':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
    }
  };
  
  const getDemandColor = () => {
    switch (skill.demandLevel) {
      case 'high':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'low':
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getDifficultyColor = () => {
    switch (skill.difficulty) {
      case 'beginner':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'advanced':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
    }
  };

  return (
    <Card 
      className={`glass-card skill-card-hover animate-scale-in group cursor-pointer relative overflow-hidden ${
        skill.isFoundational ? 'ring-2 ring-yellow-500/50 bg-gradient-to-br from-yellow-500/5 to-orange-500/5' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {skill.isFoundational && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium border border-yellow-500/30">
            <Star className="h-3 w-3" />
            Essential
          </div>
        </div>
      )}

      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300 relative`}>
            <IconComponent className="h-6 w-6 text-white" />
            {skill.status === 'emerging' && (
              <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                <Zap className="h-2 w-2 text-white" />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            {getStatusIcon()}
            <Clock className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        
        <CardTitle className={`text-xl font-bold transition-all duration-300 ${
          skill.isFoundational ? 'text-yellow-200 group-hover:text-yellow-100' : 'text-white group-hover:text-gradient'
        }`}>
          {skill.name}
        </CardTitle>
        
        <CardDescription className="text-gray-300 line-clamp-3">
          {skill.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge className={getStatusColor()}>
            {skill.status.charAt(0).toUpperCase() + skill.status.slice(1)}
          </Badge>
          <Badge className={getDemandColor()}>
            {skill.demandLevel.charAt(0).toUpperCase() + skill.demandLevel.slice(1)} Demand
          </Badge>
          <Badge className={getDifficultyColor()}>
            {skill.difficulty.charAt(0).toUpperCase() + skill.difficulty.slice(1)}
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <div className="text-gray-400">Time to Learn</div>
            <div className="text-white bg-white/10 rounded-lg px-2 py-1 text-center">
              {skill.timeToLearn}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-gray-400">Salary Range</div>
            <div className="text-white bg-white/10 rounded-lg px-2 py-1 text-center">
              {skill.salary}
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm text-gray-400">Relevance Period</div>
          <div className="text-sm font-medium text-white bg-white/10 rounded-lg px-3 py-1">
            {skill.relevancePeriod}
          </div>
        </div>
        
        <div className="text-xs text-gray-500 uppercase tracking-wider">
          {skill.category}
        </div>
        
        {skill.isFoundational && (
          <div className="pt-2 border-t border-yellow-500/20">
            <div className="text-xs text-yellow-300 flex items-center gap-1">
              <Star className="h-3 w-3" />
              Perfect starting point for beginners
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
