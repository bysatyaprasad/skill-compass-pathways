
import { Brain, MessageSquare, FileText, Globe, Zap, Search, Users, Target } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const nlpSkills: Skill[] = [
  {
    id: "chatbot-development",
    name: "AI Chatbot Development",
    category: "Emerging Technology",
    description: "Build intelligent conversational AI systems for customer service and user interaction.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: MessageSquare,
    color: "from-blue-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹12-35 LPA"
  },
  {
    id: "text-summarization",
    name: "Text Summarization Systems",
    category: "Emerging Technology",
    description: "Create AI systems that automatically generate summaries from large text documents.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: FileText,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "sentiment-analysis",
    name: "Sentiment Analysis",
    category: "Emerging Technology",
    description: "Build systems to analyze emotions and opinions in text data for business insights.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "language-translation",
    name: "AI Translation Systems",
    category: "Emerging Technology",
    description: "Develop machine translation systems for real-time language conversion.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-orange-600 to-red-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "content-generation",
    name: "AI Content Generation",
    category: "Emerging Technology",
    description: "Build AI systems that automatically generate articles, code, and creative content.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "information-extraction",
    name: "Information Extraction",
    category: "Emerging Technology",
    description: "Extract structured data from unstructured text using NLP techniques.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Search,
    color: "from-teal-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "5-8 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "conversational-ai",
    name: "Conversational AI Platforms",
    category: "Emerging Technology",
    description: "Create sophisticated voice and text-based AI assistants for various applications.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-indigo-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-50 LPA"
  },
  {
    id: "named-entity-recognition",
    name: "Named Entity Recognition",
    category: "Emerging Technology",
    description: "Build systems to identify and classify named entities in text data.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Target,
    color: "from-red-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "4-7 months",
    salary: "₹12-28 LPA"
  }
];
