
import { BookOpen, Users, Monitor, Brain, Globe, Target, Zap, Gamepad2 } from "lucide-react";
import { Skill } from "../../skillsData";

export const educationSkills: Skill[] = [
  {
    id: "learning-management-systems",
    name: "Learning Management Systems (LMS)",
    category: "Education Industry",
    description: "Building platforms for course delivery, student tracking, and educational content management.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: BookOpen,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "adaptive-learning",
    name: "Adaptive Learning Systems",
    category: "Education Industry",
    description: "AI-powered personalized learning paths that adapt to individual student needs and progress.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Brain,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "virtual-classrooms",
    name: "Virtual Classroom Platforms",
    category: "Education Industry",
    description: "Real-time video conferencing, interactive whiteboards, and collaborative learning environments.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Monitor,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "educational-gamification",
    name: "Educational Gamification",
    category: "Education Industry",
    description: "Creating engaging learning experiences through game mechanics, badges, and interactive content.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Gamepad2,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "student-information-systems",
    name: "Student Information Systems",
    category: "Education Industry",
    description: "Managing student records, grades, attendance, and administrative educational workflows.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Users,
    color: "from-indigo-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹7-18 LPA"
  },
  {
    id: "educational-content-authoring",
    name: "Educational Content Authoring Tools",
    category: "Education Industry",
    description: "Creating interactive educational content, assessments, and multimedia learning materials.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Target,
    color: "from-cyan-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹6-16 LPA"
  },
  {
    id: "mooc-platforms",
    name: "MOOC & Online Course Platforms",
    category: "Education Industry",
    description: "Massive open online course platforms with scalable content delivery and certification systems.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-teal-600 to-green-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "educational-analytics",
    name: "Educational Data Analytics",
    category: "Education Industry",
    description: "Learning analytics, student performance prediction, and educational outcome measurement.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-28 LPA"
  }
];
