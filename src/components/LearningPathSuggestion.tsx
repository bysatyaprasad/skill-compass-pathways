
import { BookOpen, ArrowRight, Clock, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface LearningPath {
  title: string;
  description: string;
  skills: string[];
  duration: string;
  difficulty: string;
  color: string;
}

const learningPaths: LearningPath[] = [
  {
    title: "Digital Foundation Track",
    description: "Start your digital journey with essential skills everyone needs",
    skills: ["Digital Literacy", "Communication", "Critical Thinking"],
    duration: "2-3 months",
    difficulty: "Beginner",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Future-Ready Professional",
    description: "Skills that will keep you relevant in the AI-driven future",
    skills: ["AI & ML", "Data Science", "Emotional Intelligence"],
    duration: "6-9 months", 
    difficulty: "Intermediate",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Creative Digital Innovator",
    description: "Blend creativity with technology for modern careers",
    skills: ["UX/UI Design", "Content Creation", "Digital Marketing"],
    duration: "4-6 months",
    difficulty: "Beginner",
    color: "from-green-500 to-teal-500"
  }
];

export const LearningPathSuggestion = () => {
  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Suggested Learning Paths</h3>
        <p className="text-gray-300">Structured skill combinations for faster progress</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {learningPaths.map((path, index) => (
          <Card 
            key={path.title}
            className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-3">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${path.color} flex items-center justify-center mb-3`}>
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-white">{path.title}</CardTitle>
              <p className="text-gray-300 text-sm">{path.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">{path.duration}</span>
                <Badge className={`ml-auto ${path.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                  {path.difficulty}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-gray-400">Key Skills:</div>
                <div className="flex flex-wrap gap-1">
                  {path.skills.map((skill) => (
                    <Badge key={skill} className="text-xs bg-white/10 text-white border-white/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                Start Path <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
