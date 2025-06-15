
import { Star, Lightbulb, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FoundationalSkillsBannerProps {
  onFilterFoundational: () => void;
}

export const FoundationalSkillsBanner = ({ onFilterFoundational }: FoundationalSkillsBannerProps) => {
  const foundationalSkills = [
    "Advanced Communication",
    "Critical Thinking & Problem Solving", 
    "Digital Literacy",
    "Emotional Intelligence",
    "Financial Literacy & Management"
  ];

  return (
    <Card className="glass-card border-2 border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 mb-8">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-full bg-yellow-500/20">
            <Star className="h-6 w-6 text-yellow-400" />
          </div>
          <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
            Start Here: Foundational Skills
            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
              Beginner Friendly
            </Badge>
          </CardTitle>
        </div>
        <p className="text-gray-300 text-lg">
          New to skill development? These essential skills form the foundation for everything else. Master these first!
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {foundationalSkills.map((skill) => (
            <Badge 
              key={skill}
              className="bg-yellow-500/20 text-yellow-200 border-yellow-500/30 px-3 py-1"
            >
              <Lightbulb className="h-3 w-3 mr-1" />
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            onClick={onFilterFoundational}
            className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white"
          >
            View Foundational Skills
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
          <p className="text-sm text-gray-400">
            Perfect for beginners • Build confidence • Learn at your own pace
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
