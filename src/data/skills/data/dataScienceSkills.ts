
import { BarChart3, Brain, TrendingUp, Target, Database, Zap } from "lucide-react";
import { Skill } from "../../skillsData";

export const dataScienceSkills: Skill[] = [
  {
    id: "pandas",
    name: "Pandas",
    category: "Data & Analytics",
    description: "Python library for data manipulation and analysis, providing data structures for working with structured data.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-blue-600 to-green-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "numpy",
    name: "NumPy",
    category: "Data & Analytics",
    description: "Fundamental Python package for scientific computing with powerful N-dimensional array objects.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: BarChart3,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "2-3 months",
    salary: "₹7-18 LPA"
  },
  {
    id: "scikit-learn",
    name: "Scikit-Learn",
    category: "Data & Analytics",
    description: "Machine learning library for Python with simple and efficient tools for data mining and analysis.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-25 LPA"
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
    color: "from-green-600 to-teal-600",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹6-15 LPA"
  },
  {
    id: "seaborn",
    name: "Seaborn",
    category: "Data & Analytics",
    description: "Statistical data visualization library based on matplotlib for creating attractive statistical graphics.",
    status: "stable",
    relevancePeriod: "Next 6+ years",
    demandLevel: "medium",
    icon: BarChart3,
    color: "from-cyan-600 to-blue-600",
    difficulty: "beginner",
    timeToLearn: "1-2 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "jupyter",
    name: "Jupyter Notebooks",
    category: "Data & Analytics",
    description: "Interactive computing environment for creating and sharing documents with code, equations, and visualizations.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-yellow-600 to-orange-600",
    difficulty: "beginner",
    timeToLearn: "1-2 months",
    salary: "₹5-15 LPA"
  },
  {
    id: "r-programming",
    name: "R Programming",
    category: "Data & Analytics",
    description: "Programming language and environment for statistical computing and graphics analysis.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: TrendingUp,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "apache-spark",
    name: "Apache Spark",
    category: "Data & Analytics",
    description: "Unified analytics engine for big data processing with built-in modules for streaming, SQL, and machine learning.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹15-35 LPA"
  }
];
