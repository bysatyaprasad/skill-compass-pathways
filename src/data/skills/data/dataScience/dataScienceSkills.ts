
import { BarChart3, Brain, Database, Zap } from "lucide-react";
import { Skill } from "../../../skillsData";

export const dataScienceSkills: Skill[] = [
  {
    id: "python-data-science",
    name: "Python for Data Science",
    category: "Data & Analytics",
    description: "Using Python libraries like Pandas, NumPy, and Matplotlib for data analysis and visualization.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-blue-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-25 LPA"
  },
  {
    id: "r-programming",
    name: "R Programming",
    category: "Data & Analytics",
    description: "Statistical computing and graphics language for data analysis and statistical modeling.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-6 months",
    salary: "₹7-22 LPA"
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    category: "Data & Analytics",
    description: "Algorithms and statistical models that enable computers to learn and make predictions from data.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹12-35 LPA"
  },
  {
    id: "deep-learning",
    name: "Deep Learning",
    category: "Data & Analytics",
    description: "Advanced machine learning using neural networks for complex pattern recognition and AI.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-red-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-18 months",
    salary: "₹15-50 LPA"
  }
];
