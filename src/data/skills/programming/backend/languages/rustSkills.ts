
import { Code } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const rustSkills: Skill[] = [
  {
    id: "rust",
    name: "Rust",
    category: "Programming",
    description: "Systems programming language focused on safety, speed, and concurrency.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "actix-web",
    name: "Actix Web",
    category: "Programming",
    description: "Powerful, pragmatic, and extremely fast web framework for Rust.",
    status: "stable",
    relevancePeriod: "Next 5+ years",
    demandLevel: "low",
    icon: Code,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "4-6 months",
    salary: "₹18-40 LPA"
  }
];
