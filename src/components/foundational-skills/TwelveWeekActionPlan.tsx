
import { Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { weeklyActionPlan } from "@/data/foundationalSkillsData";

export const TwelveWeekActionPlan = () => {
  return (
    <Card className="glass-card border-2 border-green-500/30 bg-gradient-to-r from-green-500/10 to-teal-500/10 mb-12">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-white flex items-center gap-3">
          <Calendar className="h-8 w-8 text-green-400" />
          Your 12-Week Transformation Plan
        </CardTitle>
        <p className="text-gray-300 text-lg">
          Follow this week-by-week guide to build all foundational skills systematically
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {weeklyActionPlan.map((week, index) => (
            <Card key={week.week} className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-500/20 text-green-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-green-300">{week.week}</h3>
                </div>
                <p className="text-blue-300 font-medium mb-3">Focus: {week.focus}</p>
                <div className="space-y-2 mb-4">
                  {week.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{action}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3">
                  <p className="text-yellow-300 text-sm font-medium mb-1">Expected Outcome:</p>
                  <p className="text-gray-300 text-sm">{week.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
