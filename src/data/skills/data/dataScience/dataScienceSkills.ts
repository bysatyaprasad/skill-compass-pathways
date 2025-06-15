
import { BarChart3, Brain } from "lucide-react";
import { Skill } from "../../../skillsData";

export const dataScienceSkills: Skill[] = [
  {
    id: "data-science",
    name: "Data Science",
    category: "Data & Analytics",
    description: "Interdisciplinary field using scientific methods to extract insights from data.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "6-12 months",
    salary: "₹8-25 LPA",
    isFoundational: true
  },
  {
    id: "pandas",
    name: "Pandas",
    category: "Data & Analytics",
    description: "Python library for data manipulation and analysis with data structures.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-blue-500 to-green-500",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹7-18 LPA"
  },
  {
    id: "numpy",
    name: "NumPy",
    category: "Data & Analytics",
    description: "Fundamental package for scientific computing with Python arrays and matrices.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "matplotlib",
    name: "Matplotlib",
    category: "Data & Analytics",
    description: "Python plotting library for creating static, animated, and interactive visualizations.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-green-600 to-blue-600",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹5-14 LPA"
  },
  {
    id: "seaborn",
    name: "Seaborn",
    category: "Data & Analytics",
    description: "Python data visualization library based on matplotlib for statistical graphics.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-teal-600 to-blue-600",
    difficulty: "beginner",
    timeToLearn: "1-2 months",
    salary: "₹5-15 LPA"
  },
  {
    id: "scikit-learn",
    name: "Scikit-learn",
    category: "Data & Analytics",
    description: "Machine learning library for Python with simple and efficient data mining tools.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "jupyter",
    name: "Jupyter Notebooks",
    category: "Data & Analytics",
    description: "Interactive computing environment for creating and sharing documents with code and data.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-orange-500 to-yellow-500",
    difficulty: "beginner",
    timeToLearn: "1-2 months",
    salary: "₹5-12 LPA"
  }
];
