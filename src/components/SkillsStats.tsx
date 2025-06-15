
import { TrendingUp, Users, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SkillsStatsProps {
  totalSkills: number;
  foundationalSkills: number;
  emergingSkills: number;
  categories: number;
}

export const SkillsStats = ({ totalSkills, foundationalSkills, emergingSkills, categories }: SkillsStatsProps) => {
  const stats = [
    {
      icon: Users,
      label: "Total Skills",
      value: `${totalSkills}+`,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Star,
      label: "Foundational",
      value: foundationalSkills,
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      label: "Emerging",
      value: emergingSkills,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      label: "Categories",
      value: categories,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card 
          key={stat.label}
          className="glass-card animate-scale-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardContent className="p-4 text-center">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-3`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
