
import { BookOpen, GraduationCap, Users, Monitor } from "lucide-react";
import { Skill } from "../skillsData";

export const educationSkills: Skill[] = [
  {
    id: "e-learning-platforms",
    name: "E-Learning Platform Development",
    category: "Education Technology",
    description: "Build comprehensive online learning management systems and educational platforms.",
    status: "emerging",
    relevancePeriod: "Next 15+ years",
    demandLevel: "high",
    icon: BookOpen,
    color: "from-blue-600 to-purple-600",
    difficulty: "advanced",
    timeToLearn: "6-10 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "educational-app-development",
    name: "Educational App Development",
    category: "Education Technology",
    description: "Create mobile and web applications for interactive learning and skill development.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: GraduationCap,
    color: "from-green-600 to-teal-600",
    difficulty: "intermediate",
    timeToLearn: "4-7 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "virtual-reality-education",
    name: "VR/AR in Education",
    category: "Education Technology",
    description: "Immersive learning experiences using virtual and augmented reality technologies.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "medium",
    icon: Monitor,
    color: "from-purple-600 to-pink-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹15-35 LPA"
  },
  {
    id: "student-assessment-systems",
    name: "Student Assessment Systems",
    category: "Education Technology",
    description: "Digital tools for evaluating student progress and automated grading systems.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Users,
    color: "from-orange-600 to-red-600",
    difficulty: "intermediate",
    timeToLearn: "4-6 months",
    salary: "₹6-18 LPA"
  }
];
