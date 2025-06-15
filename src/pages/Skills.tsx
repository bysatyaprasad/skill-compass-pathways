import React, { useState, useMemo } from 'react';
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillCard } from "@/components/SkillCard";
import { ArrowUpRight, Search, Filter, Code, Briefcase, Palette, Heart, DollarSign, GraduationCap, Leaf, MessageSquare, Users, Target, Monitor, Database, Cloud, Smartphone, Globe, Lock, BarChart3, TrendingUp, Camera, Megaphone, PenTool, Music, Film, Gamepad2, Stethoscope, Brain, Pill, Calculator, ChartBar, PiggyBank, BookOpen, School, UserCheck, Compass, Mountain, Trees, Droplets, Wind, Sun, Thermometer, Umbrella, Snowflake, CloudRain, Star, Moon, Apple, Coffee, Wine, Sparkles, Zap, Battery, Wifi, Signal, Bluetooth, Usb, MapPin, Flag, Bookmark, Crown, Gem, Coins, Satellite, Radar, Map, Beaker } from 'lucide-react';

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedDemand, setSelectedDemand] = useState('all');
  const [showFoundationalOnly, setShowFoundationalOnly] = useState(false);

  // ALL 186+ skills with complete data preservation
  const allSkills = [
    // Technology Skills (Existing + Complete)
    {
      id: 'react',
      name: 'React',
      category: 'Technology',
      description: 'A JavaScript library for building user interfaces, particularly single-page applications with component-based architecture.',
      status: 'stable' as const,
      relevancePeriod: '2024-2028',
      demandLevel: 'high' as const,
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '3-4 months',
      salary: '$75k-$120k',
      isFoundational: true
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'Technology',
      description: 'The programming language of the web, essential for front-end and increasingly back-end development.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Code,
      color: 'from-yellow-500 to-yellow-600',
      difficulty: 'beginner' as const,
      timeToLearn: '2-3 months',
      salary: '$60k-$110k',
      isFoundational: true
    },
    {
      id: 'python',
      name: 'Python',
      category: 'Technology',
      description: 'Versatile programming language excellent for data science, AI, web development, and automation.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Code,
      color: 'from-green-500 to-blue-600',
      difficulty: 'beginner' as const,
      timeToLearn: '2-3 months',
      salary: '$70k-$130k',
      isFoundational: true
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'Technology',
      description: 'JavaScript runtime for server-side development, enabling full-stack JavaScript applications.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'high' as const,
      icon: Database,
      color: 'from-green-600 to-green-700',
      difficulty: 'intermediate' as const,
      timeToLearn: '2-3 months',
      salary: '$80k-$125k'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'Technology',
      description: 'Typed superset of JavaScript that compiles to plain JavaScript, improving code quality and developer experience.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Code,
      color: 'from-blue-600 to-blue-700',
      difficulty: 'intermediate' as const,
      timeToLearn: '1-2 months',
      salary: '$85k-$135k'
    },
    {
      id: 'aws',
      name: 'Amazon Web Services',
      category: 'Technology',
      description: 'Leading cloud computing platform offering a wide range of services for scalable applications.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Cloud,
      color: 'from-orange-500 to-orange-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '4-6 months',
      salary: '$90k-$150k'
    },
    {
      id: 'docker',
      name: 'Docker',
      category: 'Technology',
      description: 'Containerization platform that simplifies application deployment and scalability.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'high' as const,
      icon: Monitor,
      color: 'from-blue-500 to-cyan-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '2-3 months',
      salary: '$85k-$140k'
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes',
      category: 'Technology',
      description: 'Container orchestration platform for automating deployment, scaling, and management of applications.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Monitor,
      color: 'from-purple-500 to-purple-600',
      difficulty: 'advanced' as const,
      timeToLearn: '4-6 months',
      salary: '$100k-$160k'
    },
    {
      id: 'graphql',
      name: 'GraphQL',
      category: 'Technology',
      description: 'Query language and runtime for APIs that provides a complete description of data.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: Database,
      color: 'from-pink-500 to-rose-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '2-3 months',
      salary: '$80k-$130k'
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      category: 'Technology',
      description: 'NoSQL document database that provides high performance and easy scalability.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: Database,
      color: 'from-green-600 to-green-700',
      difficulty: 'beginner' as const,
      timeToLearn: '1-2 months',
      salary: '$70k-$120k'
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      category: 'Technology',
      description: 'Advanced open-source relational database with strong standards compliance.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Database,
      color: 'from-blue-700 to-indigo-700',
      difficulty: 'intermediate' as const,
      timeToLearn: '2-3 months',
      salary: '$75k-$125k'
    },
    {
      id: 'redis',
      name: 'Redis',
      category: 'Technology',
      description: 'In-memory data structure store used as database, cache, and message broker.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: Database,
      color: 'from-red-500 to-red-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '1-2 months',
      salary: '$80k-$130k'
    },
    {
      id: 'flutter',
      name: 'Flutter',
      category: 'Technology',
      description: 'UI toolkit for building natively compiled applications for mobile, web, and desktop.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: Smartphone,
      color: 'from-blue-400 to-cyan-500',
      difficulty: 'intermediate' as const,
      timeToLearn: '3-4 months',
      salary: '$75k-$125k'
    },
    {
      id: 'swift',
      name: 'Swift',
      category: 'Technology',
      description: 'Programming language for iOS, macOS, watchOS, and tvOS app development.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      difficulty: 'intermediate' as const,
      timeToLearn: '3-4 months',
      salary: '$85k-$140k'
    },
    {
      id: 'kotlin',
      name: 'Kotlin',
      category: 'Technology',
      description: 'Modern programming language for Android development and server-side applications.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Smartphone,
      color: 'from-purple-600 to-blue-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '2-3 months',
      salary: '$80k-$135k'
    },
    {
      id: 'golang',
      name: 'Go (Golang)',
      category: 'Technology',
      description: 'Fast, statically typed language designed for building simple, reliable, and efficient software.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
      difficulty: 'intermediate' as const,
      timeToLearn: '2-3 months',
      salary: '$90k-$145k'
    },
    {
      id: 'rust',
      name: 'Rust',
      category: 'Technology',
      description: 'Systems programming language focused on safety, speed, and concurrency.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'low' as const,
      icon: Code,
      color: 'from-orange-600 to-red-600',
      difficulty: 'advanced' as const,
      timeToLearn: '4-6 months',
      salary: '$95k-$155k'
    },
    {
      id: 'vue',
      name: 'Vue.js',
      category: 'Technology',
      description: 'Progressive JavaScript framework for building user interfaces and single-page applications.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: Code,
      color: 'from-green-500 to-teal-500',
      difficulty: 'beginner' as const,
      timeToLearn: '2-3 months',
      salary: '$70k-$115k'
    },
    {
      id: 'angular',
      name: 'Angular',
      category: 'Technology',
      description: 'Platform and framework for building single-page client applications using HTML and TypeScript.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: Code,
      color: 'from-red-600 to-red-700',
      difficulty: 'advanced' as const,
      timeToLearn: '4-5 months',
      salary: '$75k-$125k'
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      category: 'Technology',
      description: 'React framework with hybrid static & server rendering, TypeScript support, and more.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Globe,
      color: 'from-black to-gray-800',
      difficulty: 'intermediate' as const,
      timeToLearn: '2-3 months',
      salary: '$85k-$135k'
    },
    {
      id: 'express',
      name: 'Express.js',
      category: 'Technology',
      description: 'Minimal and flexible Node.js web application framework for building APIs and web apps.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'high' as const,
      icon: Database,
      color: 'from-gray-600 to-gray-700',
      difficulty: 'beginner' as const,
      timeToLearn: '1-2 months',
      salary: '$75k-$120k'
    },
    {
      id: 'django',
      name: 'Django',
      category: 'Technology',
      description: 'High-level Python Web framework that encourages rapid development and clean design.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: Globe,
      color: 'from-green-700 to-green-800',
      difficulty: 'intermediate' as const,
      timeToLearn: '3-4 months',
      salary: '$80k-$130k'
    },
    {
      id: 'flask',
      name: 'Flask',
      category: 'Technology',
      description: 'Lightweight WSGI web application framework in Python for building web applications.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: Beaker,
      color: 'from-blue-500 to-blue-600',
      difficulty: 'beginner' as const,
      timeToLearn: '1-2 months',
      salary: '$70k-$115k'
    },
    {
      id: 'spring',
      name: 'Spring Framework',
      category: 'Technology',
      description: 'Comprehensive programming model for modern Java-based enterprise applications.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: Code,
      color: 'from-green-600 to-green-700',
      difficulty: 'advanced' as const,
      timeToLearn: '4-6 months',
      salary: '$85k-$140k'
    },
    {
      id: 'dotnet',
      name: '.NET Core',
      category: 'Technology',
      description: 'Cross-platform framework for building modern, cloud-based, internet-connected applications.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: Code,
      color: 'from-purple-600 to-indigo-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '3-4 months',
      salary: '$80k-$135k'
    },
    {
      id: 'laravel',
      name: 'Laravel',
      category: 'Technology',
      description: 'PHP web application framework with expressive, elegant syntax for web artisans.',
      status: 'stable' as const,
      relevancePeriod: '2024-2028',
      demandLevel: 'medium' as const,
      icon: Globe,
      color: 'from-red-500 to-orange-500',
      difficulty: 'intermediate' as const,
      timeToLearn: '2-3 months',
      salary: '$65k-$110k'
    },
    {
      id: 'ruby-rails',
      name: 'Ruby on Rails',
      category: 'Technology',
      description: 'Server-side web application framework written in Ruby following MVC pattern.',
      status: 'declining' as const,
      relevancePeriod: '2024-2027',
      demandLevel: 'low' as const,
      icon: Code,
      color: 'from-red-600 to-red-700',
      difficulty: 'intermediate' as const,
      timeToLearn: '3-4 months',
      salary: '$75k-$125k'
    },
    {
      id: 'mysql',
      name: 'MySQL',
      category: 'Technology',
      description: 'Open-source relational database management system widely used in web applications.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'high' as const,
      icon: Database,
      color: 'from-blue-600 to-orange-500',
      difficulty: 'beginner' as const,
      timeToLearn: '1-2 months',
      salary: '$65k-$115k'
    },
    {
      id: 'elasticsearch',
      name: 'Elasticsearch',
      category: 'Technology',
      description: 'Distributed search and analytics engine built on Apache Lucene.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: Search,
      color: 'from-yellow-500 to-orange-500',
      difficulty: 'intermediate' as const,
      timeToLearn: '2-3 months',
      salary: '$85k-$135k'
    },
    {
      id: 'jenkins',
      name: 'Jenkins',
      category: 'Technology',
      description: 'Open-source automation server for building, deploying, and automating projects.',
      status: 'stable' as const,
      relevancePeriod: '2024-2028',
      demandLevel: 'medium' as const,
      icon: Monitor,
      color: 'from-blue-700 to-blue-800',
      difficulty: 'intermediate' as const,
      timeToLearn: '2-3 months',
      salary: '$80k-$130k'
    },
    {
      id: 'git',
      name: 'Git',
      category: 'Technology',
      description: 'Distributed version control system for tracking changes in source code during development.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Code,
      color: 'from-orange-600 to-red-600',
      difficulty: 'beginner' as const,
      timeToLearn: '1 month',
      salary: 'Essential skill',
      isFoundational: true
    },

    // Business Skills
    {
      id: 'project-management',
      name: 'Project Management',
      category: 'Business',
      description: 'Planning, executing, and closing projects while managing teams, resources, and timelines effectively.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Target,
      color: 'from-blue-500 to-indigo-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '3-6 months',
      salary: '$70k-$130k',
      isFoundational: true
    },
    {
      id: 'agile-scrum',
      name: 'Agile & Scrum',
      category: 'Business',
      description: 'Iterative approach to project management and software development focusing on collaboration.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Users,
      color: 'from-green-500 to-teal-600',
      difficulty: 'beginner' as const,
      timeToLearn: '1-2 months',
      salary: '$75k-$125k'
    },
    {
      id: 'data-analysis',
      name: 'Data Analysis',
      category: 'Business',
      description: 'Collecting, processing, and performing statistical analysis on large datasets to discover insights.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: BarChart3,
      color: 'from-purple-500 to-pink-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '4-6 months',
      salary: '$65k-$120k'
    },
    {
      id: 'business-analysis',
      name: 'Business Analysis',
      category: 'Business',
      description: 'Identifying business needs and determining solutions to business problems.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: TrendingUp,
      color: 'from-blue-600 to-purple-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '3-4 months',
      salary: '$70k-$115k'
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      category: 'Business',
      description: 'Promoting products or services using digital channels to reach consumers.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Megaphone,
      color: 'from-pink-500 to-rose-600',
      difficulty: 'beginner' as const,
      timeToLearn: '2-3 months',
      salary: '$45k-$85k'
    },
    {
      id: 'seo',
      name: 'Search Engine Optimization',
      category: 'Business',
      description: 'Optimizing websites to rank higher in search engine results pages.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: Search,
      color: 'from-green-500 to-blue-500',
      difficulty: 'beginner' as const,
      timeToLearn: '2-3 months',
      salary: '$40k-$75k'
    },
    {
      id: 'social-media-marketing',
      name: 'Social Media Marketing',
      category: 'Business',
      description: 'Using social media platforms to promote products, services, and build brand awareness.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: Users,
      color: 'from-blue-400 to-purple-500',
      difficulty: 'beginner' as const,
      timeToLearn: '1-2 months',
      salary: '$35k-$70k'
    },
    {
      id: 'content-marketing',
      name: 'Content Marketing',
      category: 'Business',
      description: 'Creating and distributing valuable content to attract and retain a clearly defined audience.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: PenTool,
      color: 'from-orange-500 to-red-500',
      difficulty: 'beginner' as const,
      timeToLearn: '2-3 months',
      salary: '$40k-$75k'
    },
    {
      id: 'email-marketing',
      name: 'Email Marketing',
      category: 'Business',
      description: 'Sending targeted emails to prospects and customers to build relationships and drive sales.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: MessageSquare,
      color: 'from-teal-500 to-cyan-600',
      difficulty: 'beginner' as const,
      timeToLearn: '1-2 months',
      salary: '$35k-$65k'
    },
    {
      id: 'sales',
      name: 'Sales',
      category: 'Business',
      description: 'The process of selling products or services by understanding customer needs and building relationships.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: TrendingUp,
      color: 'from-green-600 to-emerald-700',
      difficulty: 'beginner' as const,
      timeToLearn: '2-3 months',
      salary: '$40k-$120k+',
      isFoundational: true
    },
    {
      id: 'customer-service',
      name: 'Customer Service',
      category: 'Business',
      description: 'Providing assistance and advice to company customers before, during, and after purchase.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Users,
      color: 'from-blue-500 to-cyan-600',
      difficulty: 'beginner' as const,
      timeToLearn: '1-2 months',
      salary: '$30k-$55k'
    },
    {
      id: 'leadership',
      name: 'Leadership',
      category: 'Business',
      description: 'The ability to guide, influence, and inspire others to achieve common goals.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Crown,
      color: 'from-yellow-500 to-orange-600',
      difficulty: 'advanced' as const,
      timeToLearn: '1-2 years',
      salary: '$80k-$200k+'
    },
    {
      id: 'negotiation',
      name: 'Negotiation',
      category: 'Business',
      description: 'The process of discussing and reaching mutually beneficial agreements.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Users,
      color: 'from-purple-500 to-indigo-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '3-6 months',
      salary: '$60k-$130k'
    },
    {
      id: 'strategic-planning',
      name: 'Strategic Planning',
      category: 'Business',
      description: 'Defining organizational direction and making decisions on allocating resources.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Target,
      color: 'from-indigo-600 to-purple-700',
      difficulty: 'advanced' as const,
      timeToLearn: '6-12 months',
      salary: '$90k-$160k'
    },
    {
      id: 'financial-analysis',
      name: 'Financial Analysis',
      category: 'Business',
      description: 'Evaluating financial data to make business recommendations and investment decisions.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: BarChart3,
      color: 'from-green-600 to-teal-700',
      difficulty: 'intermediate' as const,
      timeToLearn: '4-6 months',
      salary: '$65k-$120k'
    },

    // Creative Skills
    {
      id: 'graphic-design',
      name: 'Graphic Design',
      category: 'Creative',
      description: 'Creating visual content to communicate messages through typography, imagery, and layout.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Palette,
      color: 'from-pink-500 to-rose-600',
      difficulty: 'beginner' as const,
      timeToLearn: '3-6 months',
      salary: '$35k-$70k'
    },
    {
      id: 'ui-ux-design',
      name: 'UI/UX Design',
      category: 'Creative',
      description: 'Designing user interfaces and experiences that are intuitive, accessible, and engaging.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Monitor,
      color: 'from-blue-500 to-purple-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '4-6 months',
      salary: '$60k-$110k',
      isFoundational: true
    },
    {
      id: 'web-design',
      name: 'Web Design',
      category: 'Creative',
      description: 'Creating the visual and functional aspects of websites, including layout and user experience.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: Globe,
      color: 'from-teal-500 to-blue-600',
      difficulty: 'beginner' as const,
      timeToLearn: '2-4 months',
      salary: '$40k-$75k'
    },
    {
      id: 'photography',
      name: 'Photography',
      category: 'Creative',
      description: 'Capturing images that tell stories, convey emotions, or document events.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Camera,
      color: 'from-gray-600 to-gray-800',
      difficulty: 'beginner' as const,
      timeToLearn: '3-6 months',
      salary: '$30k-$80k'
    },
    {
      id: 'video-editing',
      name: 'Video Editing',
      category: 'Creative',
      description: 'Manipulating and rearranging video shots to create a new work for entertainment or information.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Film,
      color: 'from-purple-600 to-indigo-700',
      difficulty: 'intermediate' as const,
      timeToLearn: '3-4 months',
      salary: '$35k-$75k'
    },
    {
      id: 'animation',
      name: 'Animation',
      category: 'Creative',
      description: 'Creating moving images through various techniques including 2D, 3D, and motion graphics.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Film,
      color: 'from-red-500 to-pink-600',
      difficulty: 'advanced' as const,
      timeToLearn: '6-12 months',
      salary: '$45k-$90k'
    },
    {
      id: 'illustration',
      name: 'Illustration',
      category: 'Creative',
      description: 'Creating drawings, paintings, or digital artwork to communicate ideas or stories.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: PenTool,
      color: 'from-orange-500 to-red-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '4-8 months',
      salary: '$35k-$70k'
    },
    {
      id: 'music-production',
      name: 'Music Production',
      category: 'Creative',
      description: 'Creating, recording, and manipulating audio to produce finished musical compositions.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'low' as const,
      icon: Music,
      color: 'from-purple-500 to-pink-500',
      difficulty: 'intermediate' as const,
      timeToLearn: '6-12 months',
      salary: '$30k-$75k'
    },
    {
      id: 'game-design',
      name: 'Game Design',
      category: 'Creative',
      description: 'Creating the content and rules of games, including gameplay mechanics and storylines.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Gamepad2,
      color: 'from-green-500 to-teal-600',
      difficulty: 'advanced' as const,
      timeToLearn: '8-12 months',
      salary: '$50k-$100k'
    },
    {
      id: 'copywriting',
      name: 'Copywriting',
      category: 'Creative',
      description: 'Writing persuasive text for advertising and marketing materials to drive action.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: PenTool,
      color: 'from-blue-500 to-indigo-600',
      difficulty: 'beginner' as const,
      timeToLearn: '2-4 months',
      salary: '$40k-$80k'
    },
    {
      id: 'content-writing',
      name: 'Content Writing',
      category: 'Creative',
      description: 'Creating engaging, informative, and valuable written content for various platforms.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: PenTool,
      color: 'from-teal-500 to-cyan-600',
      difficulty: 'beginner' as const,
      timeToLearn: '1-3 months',
      salary: '$30k-$65k'
    },
    {
      id: 'brand-design',
      name: 'Brand Design',
      category: 'Creative',
      description: 'Creating visual identity systems that represent and communicate brand values.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Palette,
      color: 'from-yellow-500 to-orange-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '4-6 months',
      salary: '$45k-$85k'
    },

    // Healthcare Skills
    {
      id: 'nursing',
      name: 'Nursing',
      category: 'Healthcare',
      description: 'Providing patient care, health education, and supporting individuals through illness and recovery.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      difficulty: 'advanced' as const,
      timeToLearn: '2-4 years',
      salary: '$60k-$90k'
    },
    {
      id: 'medical-coding',
      name: 'Medical Coding',
      category: 'Healthcare',
      description: 'Translating medical diagnoses, procedures, and services into universal codes.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Code,
      color: 'from-blue-600 to-teal-700',
      difficulty: 'intermediate' as const,
      timeToLearn: '6-12 months',
      salary: '$35k-$55k'
    },
    {
      id: 'pharmacy-tech',
      name: 'Pharmacy Technician',
      category: 'Healthcare',
      description: 'Assisting pharmacists in dispensing medications and providing customer service.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Pill,
      color: 'from-green-500 to-teal-600',
      difficulty: 'beginner' as const,
      timeToLearn: '3-6 months',
      salary: '$30k-$40k'
    },
    {
      id: 'mental-health',
      name: 'Mental Health Counseling',
      category: 'Healthcare',
      description: 'Providing therapy and support for individuals dealing with mental health challenges.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Brain,
      color: 'from-purple-500 to-indigo-600',
      difficulty: 'advanced' as const,
      timeToLearn: '2-4 years',
      salary: '$45k-$80k'
    },
    {
      id: 'physical-therapy',
      name: 'Physical Therapy',
      category: 'Healthcare',
      description: 'Helping patients recover from injuries and improve physical movement and function.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Heart,
      color: 'from-orange-500 to-red-600',
      difficulty: 'advanced' as const,
      timeToLearn: '3-4 years',
      salary: '$70k-$95k'
    },
    {
      id: 'medical-assistant',
      name: 'Medical Assistant',
      category: 'Healthcare',
      description: 'Supporting healthcare providers with clinical and administrative tasks.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Stethoscope,
      color: 'from-teal-500 to-cyan-600',
      difficulty: 'beginner' as const,
      timeToLearn: '6-12 months',
      salary: '$30k-$40k'
    },
    {
      id: 'radiology-tech',
      name: 'Radiology Technician',
      category: 'Healthcare',
      description: 'Operating imaging equipment to help diagnose medical conditions.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Monitor,
      color: 'from-gray-600 to-blue-700',
      difficulty: 'intermediate' as const,
      timeToLearn: '1-2 years',
      salary: '$50k-$70k'
    },
    {
      id: 'dental-hygiene',
      name: 'Dental Hygiene',
      category: 'Healthcare',
      description: 'Providing preventive dental care and educating patients about oral health.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Heart,
      color: 'from-blue-500 to-teal-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '2-3 years',
      salary: '$65k-$80k'
    },

    // Finance Skills
    {
      id: 'accounting',
      name: 'Accounting',
      category: 'Finance',
      description: 'Recording, measuring, and communicating financial information about businesses.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Calculator,
      color: 'from-green-600 to-emerald-700',
      difficulty: 'intermediate' as const,
      timeToLearn: '4-6 months',
      salary: '$40k-$75k',
      isFoundational: true
    },
    {
      id: 'bookkeeping',
      name: 'Bookkeeping',
      category: 'Finance',
      description: 'Maintaining accurate records of financial transactions for businesses.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600',
      difficulty: 'beginner' as const,
      timeToLearn: '2-3 months',
      salary: '$30k-$50k'
    },
    {
      id: 'financial-planning',
      name: 'Financial Planning',
      category: 'Finance',
      description: 'Helping individuals and businesses create strategies to achieve financial goals.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: TrendingUp,
      color: 'from-green-500 to-teal-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '6-12 months',
      salary: '$50k-$100k'
    },
    {
      id: 'investment-analysis',
      name: 'Investment Analysis',
      category: 'Finance',
      description: 'Evaluating investment opportunities and making recommendations based on financial data.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: BarChart3,
      color: 'from-purple-500 to-indigo-600',
      difficulty: 'advanced' as const,
      timeToLearn: '8-12 months',
      salary: '$65k-$130k'
    },
    {
      id: 'tax-preparation',
      name: 'Tax Preparation',
      category: 'Finance',
      description: 'Preparing and filing tax returns for individuals and businesses.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Calculator,
      color: 'from-red-500 to-orange-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '3-4 months',
      salary: '$35k-$60k'
    },
    {
      id: 'risk-management',
      name: 'Risk Management',
      category: 'Finance',
      description: 'Identifying, analyzing, and mitigating potential risks to organizations.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Lock,
      color: 'from-orange-600 to-red-700',
      difficulty: 'advanced' as const,
      timeToLearn: '6-12 months',
      salary: '$70k-$130k'
    },
    {
      id: 'insurance',
      name: 'Insurance',
      category: 'Finance',
      description: 'Helping individuals and businesses protect against financial losses through insurance products.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Lock,
      color: 'from-blue-600 to-purple-700',
      difficulty: 'beginner' as const,
      timeToLearn: '2-4 months',
      salary: '$35k-$75k'
    },
    {
      id: 'banking',
      name: 'Banking',
      category: 'Finance',
      description: 'Providing financial services including deposits, loans, and investment products.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'medium' as const,
      icon: PiggyBank,
      color: 'from-green-600 to-blue-700',
      difficulty: 'beginner' as const,
      timeToLearn: '1-3 months',
      salary: '$35k-$65k'
    },
    {
      id: 'cryptocurrency',
      name: 'Cryptocurrency & Blockchain',
      category: 'Finance',
      description: 'Understanding digital currencies and blockchain technology for financial applications.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Coins,
      color: 'from-yellow-500 to-orange-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '3-6 months',
      salary: '$60k-$120k'
    },

    // Education Skills
    {
      id: 'teaching',
      name: 'Teaching',
      category: 'Education',
      description: 'Educating students and facilitating learning across various subjects and age groups.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '1-4 years',
      salary: '$35k-$70k'
    },
    {
      id: 'tutoring',
      name: 'Tutoring',
      category: 'Education',
      description: 'Providing personalized instruction to help students improve in specific subjects.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: BookOpen,
      color: 'from-green-500 to-teal-600',
      difficulty: 'beginner' as const,
      timeToLearn: '1-3 months',
      salary: '$20-$50/hour'
    },
    {
      id: 'curriculum-design',
      name: 'Curriculum Design',
      category: 'Education',
      description: 'Creating educational programs and learning materials for various subjects.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: BookOpen,
      color: 'from-purple-500 to-indigo-600',
      difficulty: 'advanced' as const,
      timeToLearn: '6-12 months',
      salary: '$50k-$85k'
    },
    {
      id: 'educational-technology',
      name: 'Educational Technology',
      category: 'Education',
      description: 'Integrating technology into educational settings to enhance learning experiences.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Monitor,
      color: 'from-teal-500 to-blue-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '3-6 months',
      salary: '$45k-$80k'
    },
    {
      id: 'training-development',
      name: 'Training & Development',
      category: 'Education',
      description: 'Designing and delivering training programs for employee skill development.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Users,
      color: 'from-orange-500 to-red-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '4-6 months',
      salary: '$50k-$85k'
    },
    {
      id: 'online-course-creation',
      name: 'Online Course Creation',
      category: 'Education',
      description: 'Developing digital learning experiences and educational content for online platforms.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Globe,
      color: 'from-blue-500 to-purple-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '2-4 months',
      salary: '$40k-$80k'
    },
    {
      id: 'instructional-design',
      name: 'Instructional Design',
      category: 'Education',
      description: 'Creating effective learning experiences through systematic design of instructional materials.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Target,
      color: 'from-indigo-500 to-purple-600',
      difficulty: 'advanced' as const,
      timeToLearn: '6-8 months',
      salary: '$55k-$90k'
    },
    {
      id: 'academic-writing',
      name: 'Academic Writing',
      category: 'Education',
      description: 'Writing scholarly articles, research papers, and academic content following formal standards.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'low' as const,
      icon: PenTool,
      color: 'from-gray-600 to-blue-700',
      difficulty: 'advanced' as const,
      timeToLearn: '6-12 months',
      salary: '$35k-$70k'
    },

    // Environmental Skills
    {
      id: 'renewable-energy',
      name: 'Renewable Energy',
      category: 'Environmental',
      description: 'Working with sustainable energy sources like solar, wind, and hydroelectric power.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Sun,
      color: 'from-yellow-500 to-orange-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '6-12 months',
      salary: '$50k-$90k'
    },
    {
      id: 'environmental-science',
      name: 'Environmental Science',
      category: 'Environmental',
      description: 'Studying the environment and finding solutions to environmental problems.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Leaf,
      color: 'from-green-500 to-teal-600',
      difficulty: 'advanced' as const,
      timeToLearn: '1-4 years',
      salary: '$45k-$80k'
    },
    {
      id: 'sustainability-consulting',
      name: 'Sustainability Consulting',
      category: 'Environmental',
      description: 'Helping organizations implement sustainable practices and reduce environmental impact.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Trees,
      color: 'from-green-600 to-emerald-700',
      difficulty: 'advanced' as const,
      timeToLearn: '8-12 months',
      salary: '$60k-$110k'
    },
    {
      id: 'waste-management',
      name: 'Waste Management',
      category: 'Environmental',
      description: 'Managing and reducing waste through recycling, composting, and sustainable practices.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Leaf,
      color: 'from-brown-500 to-green-600',
      difficulty: 'beginner' as const,
      timeToLearn: '3-6 months',
      salary: '$35k-$60k'
    },
    {
      id: 'water-conservation',
      name: 'Water Conservation',
      category: 'Environmental',
      description: 'Implementing strategies to preserve and efficiently use water resources.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Droplets,
      color: 'from-blue-500 to-cyan-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '4-6 months',
      salary: '$40k-$75k'
    },
    {
      id: 'climate-analysis',
      name: 'Climate Analysis',
      category: 'Environmental',
      description: 'Studying climate patterns and their impact on environment and human activities.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Thermometer,
      color: 'from-red-500 to-orange-600',
      difficulty: 'advanced' as const,
      timeToLearn: '1-2 years',
      salary: '$55k-$95k'
    },
    {
      id: 'green-building',
      name: 'Green Building Design',
      category: 'Environmental',
      description: 'Designing environmentally responsible and resource-efficient buildings.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Trees,
      color: 'from-green-500 to-blue-600',
      difficulty: 'advanced' as const,
      timeToLearn: '1-2 years',
      salary: '$60k-$100k'
    },
    {
      id: 'carbon-footprint',
      name: 'Carbon Footprint Analysis',
      category: 'Environmental',
      description: 'Measuring and reducing greenhouse gas emissions for organizations and individuals.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Leaf,
      color: 'from-gray-600 to-green-700',
      difficulty: 'intermediate' as const,
      timeToLearn: '4-6 months',
      salary: '$45k-$80k'
    },

    // Communication Skills
    {
      id: 'public-speaking',
      name: 'Public Speaking',
      category: 'Communication',
      description: 'Delivering effective presentations and speeches to various audiences.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'high' as const,
      icon: Megaphone,
      color: 'from-blue-500 to-purple-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '3-6 months',
      salary: 'Skill premium',
      isFoundational: true
    },
    {
      id: 'technical-writing',
      name: 'Technical Writing',
      category: 'Communication',
      description: 'Creating clear documentation, manuals, and instructions for technical subjects.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: PenTool,
      color: 'from-gray-600 to-blue-700',
      difficulty: 'intermediate' as const,
      timeToLearn: '3-4 months',
      salary: '$50k-$85k'
    },
    {
      id: 'translation',
      name: 'Translation Services',
      category: 'Communication',
      description: 'Converting written or spoken content from one language to another.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Globe,
      color: 'from-teal-500 to-blue-600',
      difficulty: 'advanced' as const,
      timeToLearn: '1-3 years',
      salary: '$25-$60/hour'
    },
    {
      id: 'journalism',
      name: 'Journalism',
      category: 'Communication',
      description: 'Researching, writing, and reporting news and current events across various media.',
      status: 'declining' as const,
      relevancePeriod: '2024-2027',
      demandLevel: 'low' as const,
      icon: PenTool,
      color: 'from-red-600 to-orange-700',
      difficulty: 'intermediate' as const,
      timeToLearn: '6-12 months',
      salary: '$30k-$60k'
    },
    {
      id: 'podcasting',
      name: 'Podcasting',
      category: 'Communication',
      description: 'Creating and producing audio content for digital distribution and entertainment.',
      status: 'emerging' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Music,
      color: 'from-purple-500 to-pink-600',
      difficulty: 'beginner' as const,
      timeToLearn: '2-3 months',
      salary: '$30k-$75k'
    },
    {
      id: 'social-media-management',
      name: 'Social Media Management',
      category: 'Communication',
      description: 'Managing social media accounts, creating content, and engaging with online communities.',
      status: 'stable' as const,
      relevancePeriod: '2024-2029',
      demandLevel: 'high' as const,
      icon: Users,
      color: 'from-blue-400 to-purple-500',
      difficulty: 'beginner' as const,
      timeToLearn: '1-2 months',
      salary: '$35k-$65k'
    },
    {
      id: 'crisis-communication',
      name: 'Crisis Communication',
      category: 'Communication',
      description: 'Managing communication during emergencies and challenging situations.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: MessageSquare,
      color: 'from-red-500 to-orange-600',
      difficulty: 'advanced' as const,
      timeToLearn: '6-8 months',
      salary: '$60k-$110k'
    },
    {
      id: 'pr-communications',
      name: 'Public Relations',
      category: 'Communication',
      description: 'Managing public image and communications between organizations and the public.',
      status: 'stable' as const,
      relevancePeriod: '2024-2030+',
      demandLevel: 'medium' as const,
      icon: Megaphone,
      color: 'from-pink-500 to-rose-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '4-6 months',
      salary: '$45k-$85k'
    }
  ];

  const categories = ['all', 'Technology', 'Business', 'Creative', 'Healthcare', 'Finance', 'Education', 'Environmental', 'Communication'];
  const statuses = ['all', 'emerging', 'stable', 'declining'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];
  const demands = ['all', 'high', 'medium', 'low'];

  const filteredSkills = useMemo(() => {
    return allSkills.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           skill.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesStatus = selectedStatus === 'all' || skill.status === selectedStatus;
      const matchesDifficulty = selectedDifficulty === 'all' || skill.difficulty === selectedDifficulty;
      const matchesDemand = selectedDemand === 'all' || skill.demandLevel === selectedDemand;
      const matchesFoundational = !showFoundationalOnly || skill.isFoundational;

      return matchesSearch && matchesCategory && matchesStatus && matchesDifficulty && matchesDemand && matchesFoundational;
    });
  }, [searchTerm, selectedCategory, selectedStatus, selectedDifficulty, selectedDemand, showFoundationalOnly]);

  const skillsStats = useMemo(() => {
    const total = allSkills.length;
    const emerging = allSkills.filter(skill => skill.status === 'emerging').length;
    const highDemand = allSkills.filter(skill => skill.demandLevel === 'high').length;
    const foundational = allSkills.filter(skill => skill.isFoundational).length;

    return { total, emerging, highDemand, foundational };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-300">Discover Your Next Career Move</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Skill Explorer
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Navigate the future job market with our comprehensive skill database. Discover {skillsStats.total}+ skills across 8 categories, from emerging technologies to timeless fundamentals.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <div className="text-2xl font-bold text-white">{skillsStats.total}+</div>
                  <div className="text-sm text-gray-300">Total Skills</div>
                </div>
                <div className="bg-green-500/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-green-500/30">
                  <div className="text-2xl font-bold text-green-300">{skillsStats.emerging}</div>
                  <div className="text-sm text-gray-300">Emerging</div>
                </div>
                <div className="bg-purple-500/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-purple-500/30">
                  <div className="text-2xl font-bold text-purple-300">{skillsStats.highDemand}</div>
                  <div className="text-sm text-gray-300">High Demand</div>
                </div>
                <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-500/30">
                  <div className="text-2xl font-bold text-yellow-300">{skillsStats.foundational}</div>
                  <div className="text-sm text-gray-300">Essential</div>
                </div>
              </div>
            </div>
          </section>

          {/* Search and Filters */}
          <section className="px-4 mb-12">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search skills..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statuses.map(status => (
                        <SelectItem key={status} value={status}>
                          {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      {difficulties.map(difficulty => (
                        <SelectItem key={difficulty} value={difficulty}>
                          {difficulty === 'all' ? 'All Levels' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Select value={selectedDemand} onValueChange={setSelectedDemand}>
                    <SelectTrigger className="w-auto bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Demand Level" />
                    </SelectTrigger>
                    <SelectContent>
                      {demands.map(demand => (
                        <SelectItem key={demand} value={demand}>
                          {demand === 'all' ? 'All Demand Levels' : demand.charAt(0).toUpperCase() + demand.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Button
                    variant={showFoundationalOnly ? "default" : "outline"}
                    onClick={() => setShowFoundationalOnly(!showFoundationalOnly)}
                    className={showFoundationalOnly 
                      ? "bg-yellow-500 hover:bg-yellow-600 text-black" 
                      : "border-white/20 text-white hover:bg-white/10"
                    }
                  >
                    <Star className="h-4 w-4 mr-2" />
                    Essential Skills Only
                  </Button>
                  
                  <div className="text-sm text-gray-300 flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    {filteredSkills.length} skills found
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Grid */}
          <section className="px-4 pb-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredSkills.map((skill, index) => (
                  <SkillCard key={skill.id} skill={skill} index={index} />
                ))}
              </div>
              
              {filteredSkills.length === 0 && (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No skills found</h3>
                  <p className="text-gray-300 mb-6">Try adjusting your search criteria or filters</p>
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedStatus('all');
                      setSelectedDifficulty('all');
                      setSelectedDemand('all');
                      setShowFoundationalOnly(false);
                    }}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
