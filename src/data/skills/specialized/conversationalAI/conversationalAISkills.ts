
import { MessageCircle, Bot, Mic, Brain, Users, Zap } from "lucide-react";
import { Skill } from "../../../skillsData";

export const conversationalAISkills: Skill[] = [
  {
    id: "chatbot-development",
    name: "Chatbot Development",
    category: "Emerging Technology",
    description: "Building intelligent conversational interfaces using NLP, ML, and modern frameworks.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Bot,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "voice-ui-development",
    name: "Voice User Interface (VUI)",
    category: "Emerging Technology",
    description: "Designing and developing voice-activated applications for Alexa, Google Assistant, etc.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Mic,
    color: "from-green-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "conversational-design",
    name: "Conversational Design",
    category: "Design & Creative",
    description: "Designing natural, engaging conversation flows for chatbots and voice assistants.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: MessageCircle,
    color: "from-purple-600 to-pink-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹8-20 LPA"
  }
];
