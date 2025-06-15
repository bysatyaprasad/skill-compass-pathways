
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus, Clock } from "lucide-react";

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

  return (
    <Card 
      className={`glass-card skill-card-hover animate-scale-in group cursor-pointer`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col gap-2">
            {getStatusIcon()}
            <Clock className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        
        <CardTitle className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
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
      </CardContent>
    </Card>
  );
};
