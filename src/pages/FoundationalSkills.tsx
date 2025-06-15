
import { FoundationalSkillsHeader } from "@/components/foundational-skills/FoundationalSkillsHeader";
import { WhyStartHereSection } from "@/components/foundational-skills/WhyStartHereSection";
import { TwelveWeekActionPlan } from "@/components/foundational-skills/TwelveWeekActionPlan";
import { SkillsBreakdown } from "@/components/foundational-skills/SkillsBreakdown";
import { StrategicLearningPlan } from "@/components/foundational-skills/StrategicLearningPlan";
import { FinancialFreedomSection } from "@/components/foundational-skills/FinancialFreedomSection";
import { CallToAction } from "@/components/foundational-skills/CallToAction";

const FoundationalSkills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FoundationalSkillsHeader />
        <WhyStartHereSection />
        <TwelveWeekActionPlan />
        <SkillsBreakdown />
        <StrategicLearningPlan />
        <FinancialFreedomSection />
        <CallToAction />
      </div>
    </div>
  );
};

export default FoundationalSkills;
