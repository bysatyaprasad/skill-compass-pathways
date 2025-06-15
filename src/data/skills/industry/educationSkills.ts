
import { BookOpen, GraduationCap, Users, Monitor, Brain, Target, Calendar, Trophy } from "lucide-react";
import { Skill } from "../../skillsData";

export const educationSkills: Skill[] = [
  {
    id: "learning-management-systems",
    name: "Learning Management Systems",
    category: "Education Industry",
    description: "Build comprehensive online learning platforms with course management and student tracking.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: BookOpen,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "virtual-classroom-platforms",
    name: "Virtual Classroom Platforms",
    category: "Education Industry",
    description: "Create real-time video conferencing and interactive learning environments for remote education.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Monitor,
    color: "from-green-600 to-cyan-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "adaptive-learning-systems",
    name: "Adaptive Learning Systems",
    category: "Education Industry",
    description: "Develop AI-powered systems that personalize learning paths based on student performance and preferences.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Brain,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹22-50 LPA"
  },
  {
    id: "student-information-systems",
    name: "Student Information Systems",
    category: "Education Industry",
    description: "Build comprehensive systems for managing student records, grades, and administrative tasks.",
    status: "stable",
    relevancePeriod: "Next 15+ years",
    demandLevel: "medium",
    icon: GraduationCap,
    color: "from-indigo-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "educational-content-platforms",
    name: "Educational Content Platforms",
    category: "Education Industry",
    description: "Create platforms for creating, sharing, and monetizing educational content and courses.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Target,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "exam-proctoring-systems",
    name: "Online Exam & Proctoring Systems",
    category: "Education Industry",
    description: "Develop secure online examination platforms with AI-powered proctoring and cheating detection.",
    status: "emerging",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-red-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹16-38 LPA"
  },
  {
    id: "educational-analytics",
    name: "Educational Analytics Systems",
    category: "Education Industry",
    description: "Build systems to analyze student performance data and provide insights for improving education outcomes.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Trophy,
    color: "from-yellow-600 to-orange-600",
    difficulty: "advanced",
    timeToLearn: "6-9 months",
    salary: "₹18-40 LPA"
  },
  {
    id: "school-management-systems",
    name: "School Management Systems",
    category: "Education Industry",
    description: "Create comprehensive systems for managing school operations, staff, and parent communication.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Calendar,
    color: "from-teal-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "5-8 months",
    salary: "₹10-22 LPA"
  }
];
