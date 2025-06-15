
import { DollarSign, Crown, TrendingDown, TrendingUp, Rocket, Building, Brain, Target, Coins, CheckCircle, Zap, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { financialFreedomPathways, skillToBusinessModels, wealthBuildingStrategies, financialMilestones } from "@/data/financialFreedomData";

export const FinancialFreedomSection = () => {
  return (
    <Card className="glass-card border-2 border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10 mb-12">
      <CardHeader>
        <CardTitle className="text-4xl font-bold text-white flex items-center gap-3 mb-4">
          <DollarSign className="h-10 w-10 text-green-400" />
          Achieve Financial Freedom Through Strategic Skill Building
        </CardTitle>
        <p className="text-gray-300 text-xl leading-relaxed">
          Transform your skills into wealth-generating assets. This isn't about climbing the corporate ladder—
          it's about building ownership, equity, and passive income streams that work while you sleep.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        
        {/* Wealth Building Philosophy */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
            <Crown className="h-6 w-6" />
            The Ownership Mindset: Beyond Trading Time for Money
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Traditional Path (Limited Wealth)</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-red-300">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-sm">Sell time for money (hourly wages/salary)</span>
                </div>
                <div className="flex items-center gap-2 text-red-300">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-sm">Income stops when you stop working</span>
                </div>
                <div className="flex items-center gap-2 text-red-300">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-sm">Limited by hours in a day</span>
                </div>
                <div className="flex items-center gap-2 text-red-300">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-sm">Build someone else's wealth</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Ownership Path (Unlimited Wealth)</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-green-300">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">Create assets that generate income</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">Income continues 24/7 without your presence</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">Scalable through systems and people</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">Build your own wealth and legacy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three-Phase Wealth Building Journey */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Rocket className="h-8 w-8 text-blue-400" />
            Your 3-Phase Journey to Financial Freedom
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {financialFreedomPathways.map((phase, index) => (
              <Card key={phase.phase} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500/20 text-blue-300 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                      {index + 1}
                    </div>
                    <h4 className="text-xl font-semibold text-blue-300">{phase.phase}</h4>
                  </div>
                  <p className="text-purple-300 font-medium mb-3">{phase.focus}</p>
                  <p className="text-gray-300 text-sm mb-4">{phase.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-medium text-white mb-2">Key Actions:</h5>
                      <ul className="space-y-1">
                        {phase.keyActions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-start gap-2 text-gray-300 text-xs">
                            <CheckCircle className="h-3 w-3 text-green-400 mt-0.5 flex-shrink-0" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                      <p className="text-green-300 text-xs font-medium mb-1">Income Target:</p>
                      <p className="text-gray-300 text-xs">{phase.incomeTarget}</p>
                    </div>
                    
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3">
                      <p className="text-yellow-300 text-xs font-medium mb-1">Wealth Strategy:</p>
                      <p className="text-gray-300 text-xs">{phase.wealthBuilding}</p>
                    </div>
                    
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded p-3">
                      <p className="text-purple-300 text-xs font-medium mb-1">Time Investment:</p>
                      <p className="text-gray-300 text-xs">{phase.timeCommitment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skill-to-Business Model Mapping */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Building className="h-8 w-8 text-orange-400" />
            Transform Skills into Scalable Business Models
          </h3>
          <div className="space-y-6">
            {skillToBusinessModels.map((category, categoryIndex) => (
              <Card key={category.skillCategory} className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-300">{category.skillCategory}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                    {category.businessModels.map((model, modelIndex) => (
                      <div key={model.model} className="bg-white/5 border border-white/10 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">{model.model}</h4>
                        <p className="text-gray-300 text-sm mb-3">{model.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                          <div className="bg-blue-500/10 border border-blue-500/30 rounded p-2">
                            <p className="text-blue-300 font-medium mb-1">Examples:</p>
                            <p className="text-gray-300">{model.examples}</p>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/30 rounded p-2">
                            <p className="text-green-300 font-medium mb-1">Revenue Model:</p>
                            <p className="text-gray-300">{model.revenueModel}</p>
                          </div>
                          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-2">
                            <p className="text-yellow-300 font-medium mb-1">Startup Cost:</p>
                            <p className="text-gray-300">{model.startupCost}</p>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/30 rounded p-2">
                            <p className="text-purple-300 font-medium mb-1">Scalability:</p>
                            <p className="text-gray-300">{model.scalability}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advanced Wealth Building Strategies */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Brain className="h-8 w-8 text-purple-400" />
            Advanced Wealth Multiplication Strategies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wealthBuildingStrategies.map((strategy, index) => (
              <Card key={strategy.strategy} className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-purple-300 mb-3">{strategy.strategy}</h4>
                  <p className="text-gray-300 text-sm mb-4">{strategy.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <h5 className="text-sm font-medium text-white">Implementation Steps:</h5>
                    {strategy.implementation.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-2">
                        <Zap className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                    <p className="text-green-300 text-sm font-medium mb-1">Wealth Potential:</p>
                    <p className="text-gray-300 text-sm">{strategy.wealthPotential}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Financial Milestones */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Target className="h-8 w-8 text-green-400" />
            Income Milestones & Wealth Building Progression
          </h3>
          <div className="space-y-6">
            {financialMilestones.map((milestone, index) => (
              <Card key={milestone.milestone} className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-green-500/20 text-green-300 rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      <Coins className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-green-300">{milestone.milestone}</h4>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 ml-auto">
                      {milestone.typicalTimeframe}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-lg font-medium text-white mb-3">Key Actions to Reach This Level:</h5>
                      <ul className="space-y-2">
                        {milestone.keyActions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <h5 className="text-yellow-300 font-medium mb-2">Next Level Focus:</h5>
                      <p className="text-gray-300 text-sm">{milestone.nextLevel}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Plan */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg p-8">
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Rocket className="h-8 w-8 text-orange-400" />
            Your 30-Day Financial Freedom Action Plan
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-orange-300">Week 1: Assessment</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Audit current skills and market value</li>
                <li>• Research high-income skill combinations</li>
                <li>• Set 1-year and 5-year income goals</li>
                <li>• Calculate current expenses and financial runway</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-orange-300">Week 2: Skill Development</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Choose 1-2 skills to master first</li>
                <li>• Create learning schedule and milestones</li>
                <li>• Start building portfolio/proof of work</li>
                <li>• Join communities in your target market</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-orange-300">Week 3: Market Testing</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Offer services to 5 potential clients</li>
                <li>• Get feedback on pricing and positioning</li>
                <li>• Refine your value proposition</li>
                <li>• Start building email list/social following</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-orange-300">Week 4: Launch & Scale</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Launch first paid service/product</li>
                <li>• Set up systems for client delivery</li>
                <li>• Plan first scalable product/service</li>
                <li>• Begin wealth building investment plan</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-green-500/10 border border-green-500/30 rounded-lg">
            <h4 className="text-xl font-bold text-green-300 mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Critical Success Factors
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-white font-medium mb-1">Focus Over Perfection:</p>
                <p className="text-gray-300">Master one skill completely before adding others. Depth beats breadth in wealth building.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Value Creation First:</p>
                <p className="text-gray-300">Always solve real problems for real people. Revenue follows value creation, not the other way around.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Systems Thinking:</p>
                <p className="text-gray-300">Build processes and systems from day one. Your wealth is limited by your ability to scale beyond yourself.</p>
              </div>
            </div>
          </div>
        </div>
        
      </CardContent>
    </Card>
  );
};
