
import { Code } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const rubySkills: Skill[] = [
  {
    id: "ruby",
    name: "Ruby",
    category: "Programming",
    description: "Dynamic, open-source programming language focused on simplicity and productivity.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-red-600 to-pink-600",
    difficulty: "beginner",
    timeToLearn: "3-5 months",
    salary: "₹6-15 LPA"
  },
  {
    id: "ruby-on-rails",
    name: "Ruby on Rails",
    category: "Programming",
    description: "Server-side web application framework written in Ruby for rapid development.",
    status: "stable",
    relevancePeriod: "Next 5+ years",
    demandLevel: "medium",
    icon: Code,
    color: "from-red-500 to-red-700",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  }
];
