
import { TrendingUp, Play, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { learningPhases } from "@/data/foundationalSkillsData";

export const StrategicLearningPlan = () => {
  return (
    <Card className="glass-card border-2 border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-blue-500/10 mb-12">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-white flex items-center gap-3">
          <TrendingUp className="h-8 w-8 text-purple-400" />
          Your Strategic 12-Month Development Plan
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningPhases.map((phase, index) => (
            <Card key={phase.phase} className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-3">{phase.phase}</h3>
                <p className="text-blue-300 font-medium mb-3">Focus: {phase.focus}</p>
                <p className="text-gray-400 text-sm mb-4">{phase.timeline}</p>
                
                <div className="space-y-3 mb-4">
                  <h4 className="text-sm font-medium text-white">Goals:</h4>
                  {phase.goals.map((goal, goalIndex) => (
                    <div key={goalIndex} className="flex items-start gap-2">
                      <Play className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{goal}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-white">Key Milestones:</h4>
                  {phase.milestones.map((milestone, milestoneIndex) => (
                    <div key={milestoneIndex} className="flex items-start gap-2">
                      <Award className="h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{milestone}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
