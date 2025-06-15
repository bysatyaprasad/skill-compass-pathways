import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, Star, TrendingUp, Clock, Users, Award, Briefcase, Code, Palette, Heart, DollarSign, GraduationCap, Leaf, Scale, Flask, Wrench, Truck, MessageCircle, ArrowUpRight, Scan, Telescope } from 'lucide-react';

const skillsData = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 'Advanced', icon: Code },
      { name: 'TypeScript', level: 'Advanced', icon: Code },
      { name: 'Python', level: 'Intermediate', icon: Code },
      { name: 'Java', level: 'Basic', icon: Code },
      { name: 'C#', level: 'Basic', icon: Code },
      { name: 'Go', level: 'Basic', icon: Code },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 'Advanced', icon: Palette },
      { name: 'Next.js', level: 'Advanced', icon: ArrowUpRight },
      { name: 'HTML', level: 'Advanced', icon: Palette },
      { name: 'CSS', level: 'Advanced', icon: Palette },
      { name: 'Tailwind CSS', level: 'Advanced', icon: Palette },
      { name: 'Redux', level: 'Intermediate', icon: Palette },
      { name: 'Vue.js', level: 'Basic', icon: Palette },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 'Advanced', icon: Code },
      { name: 'Express.js', level: 'Advanced', icon: Code },
      { name: 'SQL', level: 'Intermediate', icon: Briefcase },
      { name: 'MongoDB', level: 'Intermediate', icon: Briefcase },
      { name: 'RESTful APIs', level: 'Advanced', icon: ArrowUpRight },
      { name: 'GraphQL', level: 'Intermediate', icon: ArrowUpRight },
      { name: 'Firebase', level: 'Intermediate', icon: Briefcase },
      { name: 'Serverless Functions', level: 'Intermediate', icon: Code },
    ],
  },
  {
    title: 'Cloud Technologies',
    skills: [
      { name: 'AWS', level: 'Intermediate', icon: Telescope },
      { name: 'Google Cloud Platform', level: 'Basic', icon: Telescope },
      { name: 'Docker', level: 'Intermediate', icon: Truck },
      { name: 'Kubernetes', level: 'Basic', icon: Truck },
      { name: 'CI/CD', level: 'Intermediate', icon: Truck },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: 'Intermediate', icon: Briefcase },
      { name: 'PostgreSQL', level: 'Intermediate', icon: Briefcase },
      { name: 'SQLite', level: 'Basic', icon: Briefcase },
      { name: 'NoSQL', level: 'Intermediate', icon: Briefcase },
      { name: 'Database Design', level: 'Intermediate', icon: Briefcase },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 'Advanced', icon: Code },
      { name: 'GitHub', level: 'Advanced', icon: Code },
      { name: 'VS Code', level: 'Advanced', icon: Code },
      { name: 'Webpack', level: 'Intermediate', icon: Code },
      { name: 'Babel', level: 'Intermediate', icon: Code },
      { name: 'npm', level: 'Advanced', icon: Code },
      { name: 'Yarn', level: 'Advanced', icon: Code },
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'Web Scraping', level: 'Intermediate', icon: Scan },
      { name: 'Data Analysis', level: 'Basic', icon: Scale },
      { name: 'Machine Learning', level: 'Basic', icon: Flask },
      { name: 'Problem Solving', level: 'Advanced', icon: Wrench },
      { name: 'Communication', level: 'Advanced', icon: MessageCircle },
    ],
  },
];

const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('');

  const filteredSkillsData = useMemo(() => {
    if (!searchTerm && !filterTerm) {
      return skillsData;
    }

    return skillsData.map((category) => ({
      ...category,
      skills: category.skills.filter((skill) => {
        const searchMatch = searchTerm
          ? skill.name.toLowerCase().includes(searchTerm.toLowerCase())
          : true;
        const filterMatch = filterTerm ? skill.level === filterTerm : true;
        return searchMatch && filterMatch;
      }),
    })).filter(category => category.skills.length > 0);
  }, [searchTerm, filterTerm]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Skills</h1>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
        <Input
          type="text"
          placeholder="Search skills..."
          className="flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="relative">
          <Button onClick={() => setFilterTerm(filterTerm === 'Advanced' ? '' : 'Advanced')}>
            <Filter className="mr-2 h-4 w-4" />
            {filterTerm ? `Filtering: ${filterTerm}` : 'Filter by Level'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkillsData.map((category, index) => (
          <Card key={index}>
            <CardContent className="space-y-2">
              <h2 className="text-xl font-semibold">{category.title}</h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex}>
                    {skill.name} ({skill.level})
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
