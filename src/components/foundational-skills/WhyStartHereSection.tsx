
import { Target, Award, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyStartHereSection = () => {
  return (
    <Card className="glass-card border-2 border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 mb-12">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
          <Target className="h-8 w-8 text-yellow-400" />
          Why Start with Foundational Skills?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-3">
              <Award className="h-6 w-6 text-yellow-400" />
              <h3 className="text-xl font-semibold text-yellow-300">The 80/20 Rule</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              80% of your career success comes from mastering these 20% foundational skills. 
              They create a multiplier effect for every technical skill you learn.
            </p>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p className="text-green-300 text-sm font-medium mb-1">ROI Example:</p>
              <p className="text-gray-300 text-sm">
                1 month improving communication = 10+ years of better collaboration
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-300">Universal Value</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Unlike technical skills that become obsolete, these skills transfer across 
              industries, roles, and decades. Future-proof your career.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <p className="text-blue-300 text-sm font-medium mb-1">Career Insurance:</p>
              <p className="text-gray-300 text-sm">
                Strong foundations help you pivot successfully when industries change
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-purple-300">Immediate Impact</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              See results in weeks, not years. These skills provide immediate value 
              in your current role while building long-term success.
            </p>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <p className="text-purple-300 text-sm font-medium mb-1">Quick Wins:</p>
              <p className="text-gray-300 text-sm">
                Better emails → clearer communication → faster project completion
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
