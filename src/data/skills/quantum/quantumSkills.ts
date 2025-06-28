
import { Atom, Zap, Brain, Database, Shield, Globe } from "lucide-react";
import { Skill } from "../../skillsData";

export const quantumSkills: Skill[] = [
  {
    id: "quantum-computing",
    name: "Quantum Computing Fundamentals",
    category: "Emerging Technology",
    description: "Understanding quantum mechanics principles applied to computational systems.",
    status: "emerging",
    relevancePeriod: "Next 20+ years",
    demandLevel: "medium",
    icon: Atom,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "12-18 months",
    salary: "₹25-60 LPA"
  },
  {
    id: "qiskit",
    name: "Qiskit Development",
    category: "Emerging Technology",
    description: "IBM's open-source quantum computing framework for building quantum applications.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "low",
    icon: Zap,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹30-70 LPA"
  },
  {
    id: "quantum-algorithms",
    name: "Quantum Algorithm Design",
    category: "Emerging Technology",
    description: "Developing algorithms that leverage quantum computing advantages.",
    status: "emerging",
    relevancePeriod: "Next 20+ years",
    demandLevel: "low",
    icon: Brain,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "15-24 months",
    salary: "₹35-80 LPA"
  },
  {
    id: "quantum-cryptography",
    name: "Quantum Cryptography",
    category: "Emerging Technology",
    description: "Quantum-based security protocols and quantum-resistant encryption methods.",
    status: "emerging",
    relevancePeriod: "Next 25+ years",
    demandLevel: "medium",
    icon: Shield,
    color: "from-red-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "12-18 months",
    salary: "₹40-90 LPA"
  },
  {
    id: "quantum-machine-learning",
    name: "Quantum Machine Learning",
    category: "Emerging Technology",
    description: "Applying quantum computing principles to machine learning algorithms.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "low",
    icon: Brain,
    color: "from-green-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "18-24 months",
    salary: "₹45-100 LPA"
  },
  {
    id: "quantum-simulation",
    name: "Quantum Simulation",
    category: "Emerging Technology",
    description: "Using quantum computers to simulate quantum systems for scientific research.",
    status: "emerging",
    relevancePeriod: "Next 20+ years",
    demandLevel: "low",
    icon: Database,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "12-18 months",
    salary: "₹35-75 LPA"
  }
];
