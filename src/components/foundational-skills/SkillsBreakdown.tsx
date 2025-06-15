
import { Timer, Target, Clock, Zap, CheckCircle, BookMarked, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { foundationalSkills } from "@/data/foundationalSkillsData";

export const SkillsBreakdown = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        The Six Pillars: Deep Dive & Action Plans
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        {foundationalSkills.map((skill, index) => (
          <Card key={skill.name} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-yellow-500/20">
                  <skill.icon className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-white mb-2">{skill.name}</CardTitle>
                  <p className="text-gray-300 text-base mb-3">{skill.description}</p>
                  <div className="flex gap-2 mb-3">
                    <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                      <Timer className="h-3 w-3 mr-1" />
                      {skill.timeToMaster}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                    <p className="text-green-300 text-sm font-medium mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Why It Matters:
                    </p>
                    <p className="text-gray-300 text-sm">{skill.why}</p>
                  </div>
                  
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded p-4">
                    <p className="text-blue-300 text-sm font-medium mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Daily Practice:
                    </p>
                    <p className="text-gray-300 text-sm">{skill.dailyPractice}</p>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/30 rounded p-4">
                    <p className="text-purple-300 text-sm font-medium mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Real-World Applications:
                    </p>
                    <p className="text-gray-300 text-sm">{skill.realWorldApplication}</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded p-4">
                    <p className="text-orange-300 text-sm font-medium mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Action Steps:
                    </p>
                    <ul className="space-y-2">
                      {skill.practicalSteps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="bg-orange-400/20 text-orange-300 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                            {stepIndex + 1}
                          </div>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-teal-500/10 border border-teal-500/30 rounded p-4">
                    <p className="text-teal-300 text-sm font-medium mb-3 flex items-center gap-2">
                      <BookMarked className="h-4 w-4" />
                      Best Resources:
                    </p>
                    <ul className="space-y-2">
                      {skill.resources.map((resource, resIndex) => (
                        <li key={resIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                          <ExternalLink className="h-3 w-3 text-teal-400 mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-medium">{resource.name}</span>
                            <span className="text-teal-300 ml-2">({resource.type})</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
