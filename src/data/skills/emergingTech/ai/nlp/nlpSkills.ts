
import { MessageSquare, Brain, Mic, FileText, Languages, Zap } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const nlpSkills: Skill[] = [
  {
    id: "natural-language-processing",
    name: "Natural Language Processing",
    category: "Emerging Technology",
    description: "AI field focused on interaction between computers and human language for text analysis and generation.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: MessageSquare,
    color: "from-green-600 to-teal-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-40 LPA"
  },
  {
    id: "chatbot-development",
    name: "Conversational AI & Chatbots",
    category: "Emerging Technology",
    description: "Building intelligent chatbots and virtual assistants using NLP and machine learning.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "speech-recognition",
    name: "Speech Recognition & Processing",
    category: "Emerging Technology",
    description: "Converting spoken language into text and building voice-enabled applications.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Mic,
    color: "from-cyan-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹18-45 LPA"
  },
  {
    id: "text-analytics",
    name: "Text Analytics & Mining",
    category: "Emerging Technology",
    description: "Extracting meaningful insights from unstructured text data using statistical and ML techniques.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: FileText,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "machine-translation",
    name: "Machine Translation",
    category: "Emerging Technology",
    description: "Automated translation between languages using neural networks and deep learning.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Languages,
    color: "from-indigo-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "10-15 months",
    salary: "₹20-50 LPA"
  },
  {
    id: "sentiment-analysis",
    name: "Sentiment Analysis",
    category: "Emerging Technology",
    description: "Analyzing emotions and opinions in text data for business intelligence and social media monitoring.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "question-answering-systems",
    name: "Question Answering Systems",
    category: "Emerging Technology",
    description: "Building AI systems that can understand and answer questions in natural language.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: MessageSquare,
    color: "from-teal-600 to-green-600",
    difficulty: "advanced",
    timeToLearn: "9-12 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "language-model-training",
    name: "Language Model Training",
    category: "Emerging Technology",
    description: "Training and fine-tuning large language models for specific domains and applications.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Brain,
    color: "from-red-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "12-18 months",
    salary: "₹25-60 LPA"
  }
];
