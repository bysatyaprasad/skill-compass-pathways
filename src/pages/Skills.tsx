import { useState, useMemo } from "react";
import { Search, Filter, TrendingUp, TrendingDown, Minus, Clock, Brain, Code, Palette, Briefcase, Globe, Zap, Target, Heart, Users, MessageCircle, Lightbulb, Shield, BookOpen, Gamepad2, Camera, Music, PenTool, Calculator, Languages, Compass, FlaskConical, Rocket, Trees, Sparkles, Database, Smartphone, Monitor, Server, Lock, Cpu, HardDrive, Cloud, Wifi, Settings, Wrench, Hammer, PaintBucket, Film, Headphones, Mic, Video, Edit3, Image, FileText, BarChart3, LineChart, PieChart, TrendingUp as TrendingUpIcon, DollarSign, CreditCard, Banknote, Briefcase as BriefcaseIcon, Building, Home, Car, Plane, Ship, Truck, Bus, Bike, Siren, Stethoscope, Pill, Activity, Dumbbell, Apple, Coffee, ChefHat, Utensils, Wine, ShoppingBag, Gift, Package, Box, Archive, Folder, File, FileImage, FileVideo, FileAudio, FileMinus, FileBarChart, FileSpreadsheet, FileCode, Terminal, Command, Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw, RefreshCw, Download, Upload, Share, Copy, Scissors, Paperclip, Link, ExternalLink, Eye, EyeOff, ThumbsUp, ThumbsDown, Star, Bookmark, Flag, Award, Trophy, Medal, Crown, Diamond, Gem, Coins, Banknote as Money, Wallet, ShoppingCart, Store, MapPin, Map, Navigation, Compass as CompassIcon, Globe as GlobeIcon, Sun, Moon, CloudRain, CloudSnow, Zap as Lightning, Wind, Thermometer, Umbrella, Snowflake, Flower, Leaf, Mountain, Waves, Fish, Bird, Bug, Dog, Cat, Rabbit, Turtle, Phone, Mail, MessageSquare, MessageCircle as Chat, Send, Bell, BellRing, Calendar, Clock as ClockIcon, Timer, AlarmClock, Watch, Hourglass, Battery, BatteryLow, Wifi as WifiIcon, Signal, Bluetooth, Usb, HardDrive as Storage, Disc, Save, FolderOpen, Trash, Trash2, MoreHorizontal, MoreVertical, Menu, X, Plus, Minus as MinusIcon, Check, CheckCircle, XCircle, Info, AlertTriangle, AlertCircle, HelpCircle, Exclamation as ExclamationIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SkillCard } from "@/components/SkillCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  status: 'emerging' | 'stable' | 'declining';
  relevancePeriod: string;
  demandLevel: 'high' | 'medium' | 'low';
  icon: any;
  color: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeToLearn: string;
  salary: string;
  isFoundational?: boolean;
}

// Expanded skills data with foundational skills marked
const skillsData: Skill[] = [
  // Foundational Skills (Essential for everyone)
  {
    id: 'digital-literacy',
    name: 'Digital Literacy & Computer Skills',
    category: 'Foundational Skills',
    description: 'Master essential computer skills, internet navigation, and digital communication tools',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Code,
    color: 'from-blue-500 to-indigo-500',
    difficulty: 'beginner',
    timeToLearn: '2-4 weeks',
    salary: 'N/A',
    isFoundational: true
  },
  {
    id: 'communication',
    name: 'Advanced Communication',
    category: 'Foundational Skills',
    description: 'Master verbal, written, and digital communication across diverse audiences',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: MessageCircle,
    color: 'from-cyan-500 to-blue-500',
    difficulty: 'beginner',
    timeToLearn: 'Ongoing',
    salary: 'N/A',
    isFoundational: true
  },
  {
    id: 'critical-thinking',
    name: 'Critical Thinking & Problem Solving',
    category: 'Foundational Skills',
    description: 'Analyze complex problems, evaluate solutions, and make informed decisions',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Lightbulb,
    color: 'from-yellow-500 to-amber-500',
    difficulty: 'beginner',
    timeToLearn: 'Ongoing',
    salary: 'N/A',
    isFoundational: true
  },
  {
    id: 'emotional-intelligence',
    name: 'Emotional Intelligence',
    category: 'Foundational Skills',
    description: 'Understand and manage emotions effectively in personal and professional settings',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Heart,
    color: 'from-pink-500 to-red-500',
    difficulty: 'beginner',
    timeToLearn: 'Ongoing',
    salary: 'N/A',
    isFoundational: true
  },
  {
    id: 'financial-literacy',
    name: 'Financial Literacy & Management',
    category: 'Foundational Skills',
    description: 'Understand personal finance, investments, and economic principles',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Calculator,
    color: 'from-emerald-500 to-green-500',
    difficulty: 'beginner',
    timeToLearn: '3-6 months',
    salary: 'N/A',
    isFoundational: true
  },
  {
    id: 'adaptability',
    name: 'Adaptability & Resilience',
    category: 'Foundational Skills',
    description: 'Navigate change, bounce back from setbacks, and thrive in uncertainty',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Compass,
    color: 'from-slate-500 to-gray-500',
    difficulty: 'beginner',
    timeToLearn: 'Ongoing',
    salary: 'N/A',
    isFoundational: true
  },
  
  // Emerging Tech
  {
    id: 'ai-ml',
    name: 'Artificial Intelligence & Machine Learning',
    category: 'Emerging Tech',
    description: 'Design and develop intelligent systems, neural networks, and automated decision-making algorithms',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    difficulty: 'advanced',
    timeToLearn: '12-18 months',
    salary: '₹15-50 LPA'
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    category: 'Emerging Tech',
    description: 'Harness quantum mechanics for revolutionary computational power and cryptography',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    difficulty: 'advanced',
    timeToLearn: '18-24 months',
    salary: '₹25-60 LPA'
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    category: 'Emerging Tech',
    description: 'Build decentralized applications, smart contracts, and next-gen internet infrastructure',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Globe,
    color: 'from-green-500 to-teal-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹12-45 LPA'
  },
  {
    id: 'ar-vr',
    name: 'Augmented & Virtual Reality',
    category: 'Emerging Tech',
    description: 'Create immersive digital experiences and mixed reality applications',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Gamepad2,
    color: 'from-violet-500 to-purple-500',
    difficulty: 'intermediate',
    timeToLearn: '9-15 months',
    salary: '₹10-40 LPA'
  },
  {
    id: 'iot',
    name: 'Internet of Things (IoT)',
    category: 'Emerging Tech',
    description: 'Connect devices, sensors, and systems to create smart ecosystems',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Wifi,
    color: 'from-teal-500 to-cyan-500',
    difficulty: 'intermediate',
    timeToLearn: '8-12 months',
    salary: '₹8-35 LPA'
  },
  {
    id: 'edge-computing',
    name: 'Edge Computing',
    category: 'Emerging Tech',
    description: 'Process data closer to its source for faster, more efficient computing',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Server,
    color: 'from-gray-500 to-slate-500',
    difficulty: 'advanced',
    timeToLearn: '10-15 months',
    salary: '₹12-42 LPA'
  },
  {
    id: 'robotics',
    name: 'Robotics & Automation',
    category: 'Emerging Tech',
    description: 'Design and program robots for manufacturing, healthcare, and service industries',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Settings,
    color: 'from-orange-500 to-red-500',
    difficulty: 'advanced',
    timeToLearn: '15-24 months',
    salary: '₹10-45 LPA'
  },
  
  // Digital Skills
  {
    id: 'data-science',
    name: 'Data Science & Analytics',
    category: 'Digital Skills',
    description: 'Extract insights from big data, create predictive models, and drive data-driven decisions',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: BarChart3,
    color: 'from-orange-500 to-red-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹10-40 LPA'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    category: 'Digital Skills',
    description: 'Protect digital assets, prevent cyber threats, and ensure data privacy',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    difficulty: 'intermediate',
    timeToLearn: '9-15 months',
    salary: '₹9-35 LPA'
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing & DevOps',
    category: 'Digital Skills',
    description: 'Design scalable cloud infrastructure and streamline software deployment',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Cloud,
    color: 'from-indigo-500 to-purple-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹8-30 LPA'
  },
  {
    id: 'full-stack-development',
    name: 'Full-Stack Web Development',
    category: 'Digital Skills',
    description: 'Build complete web applications from frontend to backend',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Monitor,
    color: 'from-blue-500 to-indigo-500',
    difficulty: 'intermediate',
    timeToLearn: '8-15 months',
    salary: '₹6-35 LPA'
  },
  {
    id: 'mobile-development',
    name: 'Mobile App Development',
    category: 'Digital Skills',
    description: 'Create native and cross-platform mobile applications',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Smartphone,
    color: 'from-green-500 to-blue-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹5-32 LPA'
  },
  {
    id: 'database-management',
    name: 'Database Management & SQL',
    category: 'Digital Skills',
    description: 'Design, optimize, and manage databases for efficient data storage',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Database,
    color: 'from-emerald-500 to-teal-500',
    difficulty: 'intermediate',
    timeToLearn: '4-8 months',
    salary: '₹5-28 LPA'
  },
  {
    id: 'api-development',
    name: 'API Development & Integration',
    category: 'Digital Skills',
    description: 'Create and integrate APIs for seamless system communication',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Link,
    color: 'from-purple-500 to-pink-500',
    difficulty: 'intermediate',
    timeToLearn: '4-8 months',
    salary: '₹6-30 LPA'
  },
  
  // Creative & Design
  {
    id: 'ux-ui',
    name: 'UX/UI Design',
    category: 'Creative & Design',
    description: 'Create intuitive user experiences and visually appealing digital interfaces',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    difficulty: 'beginner',
    timeToLearn: '3-6 months',
    salary: '₹6-25 LPA'
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing & Growth',
    category: 'Creative & Design',
    description: 'Drive online engagement, optimize conversion funnels, and build brand presence',
    status: 'stable',
    relevancePeriod: 'Until 2045',
    demandLevel: 'medium',
    icon: Sparkles,
    color: 'from-yellow-500 to-orange-500',
    difficulty: 'beginner',
    timeToLearn: '3-6 months',
    salary: '₹5-20 LPA'
  },
  {
    id: 'content-creation',
    name: 'Digital Content Creation',
    category: 'Creative & Design',
    description: 'Produce engaging multimedia content across various digital platforms',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Camera,
    color: 'from-emerald-500 to-teal-500',
    difficulty: 'beginner',
    timeToLearn: '3-6 months',
    salary: '₹4-18 LPA'
  },
  {
    id: 'video-editing',
    name: 'Video Editing & Production',
    category: 'Creative & Design',
    description: 'Edit and produce professional videos for various media platforms',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Video,
    color: 'from-red-500 to-pink-500',
    difficulty: 'beginner',
    timeToLearn: '2-5 months',
    salary: '₹3-15 LPA'
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design & Visual Arts',
    category: 'Creative & Design',
    description: 'Create visual communications and artistic expressions across digital and print media',
    status: 'stable',
    relevancePeriod: 'Until 2045',
    demandLevel: 'medium',
    icon: PenTool,
    color: 'from-rose-500 to-pink-500',
    difficulty: 'beginner',
    timeToLearn: '3-6 months',
    salary: '₹3-12 LPA'
  },
  {
    id: '3d-modeling',
    name: '3D Modeling & Animation',
    category: 'Creative & Design',
    description: 'Create 3D models, animations, and visual effects for games and media',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Box,
    color: 'from-purple-500 to-indigo-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹4-22 LPA'
  },
  
  // Soft Skills
  {
    id: 'leadership',
    name: 'Leadership & Team Management',
    category: 'Soft Skills',
    description: 'Guide teams, make strategic decisions, and inspire others towards common goals',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Users,
    color: 'from-blue-500 to-indigo-500',
    difficulty: 'intermediate',
    timeToLearn: 'Ongoing',
    salary: 'N/A'
  },
  {
    id: 'negotiation',
    name: 'Negotiation & Persuasion',
    category: 'Soft Skills',
    description: 'Master the art of negotiation and influence in professional settings',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: MessageCircle,
    color: 'from-green-500 to-emerald-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: 'N/A'
  },
  {
    id: 'time-management',
    name: 'Time Management & Productivity',
    category: 'Soft Skills',
    description: 'Optimize productivity and manage time effectively across multiple priorities',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Clock,
    color: 'from-orange-500 to-red-500',
    difficulty: 'beginner',
    timeToLearn: '2-4 months',
    salary: 'N/A'
  },
  {
    id: 'public-speaking',
    name: 'Public Speaking & Presentation',
    category: 'Soft Skills',
    description: 'Deliver compelling presentations and communicate effectively to large audiences',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Mic,
    color: 'from-blue-500 to-purple-500',
    difficulty: 'intermediate',
    timeToLearn: '4-8 months',
    salary: 'N/A'
  },
  
  // Business Skills
  {
    id: 'project-management',
    name: 'Agile Project Management',
    category: 'Business Skills',
    description: 'Lead cross-functional teams, manage digital transformation, and deliver results',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Briefcase,
    color: 'from-teal-500 to-blue-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹7-30 LPA'
  },
  {
    id: 'entrepreneurship',
    name: 'Entrepreneurship & Innovation',
    category: 'Business Skills',
    description: 'Identify opportunities, build ventures, and drive innovative solutions',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Rocket,
    color: 'from-purple-500 to-indigo-500',
    difficulty: 'advanced',
    timeToLearn: 'Ongoing',
    salary: 'Varies'
  },
  {
    id: 'business-analysis',
    name: 'Business Analysis & Strategy',
    category: 'Business Skills',
    description: 'Analyze business processes and develop strategic solutions',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: LineChart,
    color: 'from-blue-500 to-cyan-500',
    difficulty: 'intermediate',
    timeToLearn: '6-10 months',
    salary: '₹6-28 LPA'
  },
  {
    id: 'sales-marketing',
    name: 'Sales & Marketing Strategy',
    category: 'Business Skills',
    description: 'Drive revenue growth through effective sales and marketing strategies',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: TrendingUp,
    color: 'from-green-500 to-teal-500',
    difficulty: 'intermediate',
    timeToLearn: '4-8 months',
    salary: '₹4-25 LPA'
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain Management',
    category: 'Business Skills',
    description: 'Optimize logistics, inventory, and supply chain operations',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'medium',
    icon: Truck,
    color: 'from-amber-500 to-orange-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹5-22 LPA'
  },
  
  // Language Skills
  {
    id: 'multilingual',
    name: 'Multilingual Communication',
    category: 'Language Skills',
    description: 'Communicate effectively across multiple languages and cultural contexts',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Languages,
    color: 'from-green-500 to-emerald-500',
    difficulty: 'intermediate',
    timeToLearn: 'Varies',
    salary: '₹6-25 LPA'
  },
  {
    id: 'technical-writing',
    name: 'Technical Writing & Documentation',
    category: 'Language Skills',
    description: 'Create clear, comprehensive technical documentation and user guides',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: FileText,
    color: 'from-blue-500 to-indigo-500',
    difficulty: 'beginner',
    timeToLearn: '3-6 months',
    salary: '₹4-18 LPA'
  },
  {
    id: 'copywriting',
    name: 'Copywriting & Content Strategy',
    category: 'Language Skills',
    description: 'Write persuasive copy and develop content strategies for marketing',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'medium',
    icon: Edit3,
    color: 'from-purple-500 to-pink-500',
    difficulty: 'beginner',
    timeToLearn: '2-5 months',
    salary: '₹3-15 LPA'
  },
  
  // STEM Skills
  {
    id: 'biotechnology',
    name: 'Biotechnology & Genetic Engineering',
    category: 'STEM Skills',
    description: 'Apply biological systems for technological and medical advancement',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: FlaskConical,
    color: 'from-lime-500 to-green-500',
    difficulty: 'advanced',
    timeToLearn: '12-24 months',
    salary: '₹10-45 LPA'
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy Engineering',
    category: 'STEM Skills',
    description: 'Design and implement sustainable energy solutions',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Sun,
    color: 'from-yellow-500 to-orange-500',
    difficulty: 'advanced',
    timeToLearn: '15-24 months',
    salary: '₹8-40 LPA'
  },
  {
    id: 'nanotechnology',
    name: 'Nanotechnology & Materials Science',
    category: 'STEM Skills',
    description: 'Work with materials at the molecular and atomic level',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'medium',
    icon: Cpu,
    color: 'from-cyan-500 to-blue-500',
    difficulty: 'advanced',
    timeToLearn: '18-30 months',
    salary: '₹12-50 LPA'
  },
  {
    id: 'environmental-science',
    name: 'Environmental Science & Sustainability',
    category: 'STEM Skills',
    description: 'Study and solve environmental challenges for a sustainable future',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: TreePine,
    color: 'from-green-600 to-emerald-600',
    difficulty: 'intermediate',
    timeToLearn: '8-15 months',
    salary: '₹4-25 LPA'
  },
  
  // Healthcare Skills
  {
    id: 'digital-health',
    name: 'Digital Health & Telemedicine',
    category: 'Healthcare Skills',
    description: 'Implement technology solutions in healthcare delivery',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: Stethoscope,
    color: 'from-red-500 to-pink-500',
    difficulty: 'intermediate',
    timeToLearn: '8-15 months',
    salary: '₹8-35 LPA'
  },
  {
    id: 'medical-coding',
    name: 'Medical Coding & Health Informatics',
    category: 'Healthcare Skills',
    description: 'Manage healthcare data and medical coding systems',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'medium',
    icon: Activity,
    color: 'from-blue-500 to-indigo-500',
    difficulty: 'beginner',
    timeToLearn: '4-8 months',
    salary: '₹3-12 LPA'
  },
  
  // Finance Skills
  {
    id: 'fintech',
    name: 'FinTech & Digital Banking',
    category: 'Finance Skills',
    description: 'Develop financial technology solutions and digital banking systems',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: CreditCard,
    color: 'from-emerald-500 to-teal-500',
    difficulty: 'intermediate',
    timeToLearn: '8-15 months',
    salary: '₹8-40 LPA'
  },
  {
    id: 'cryptocurrency',
    name: 'Cryptocurrency & DeFi',
    category: 'Finance Skills',
    description: 'Understand and work with cryptocurrencies and decentralized finance',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'medium',
    icon: Coins,
    color: 'from-yellow-500 to-amber-500',
    difficulty: 'intermediate',
    timeToLearn: '4-8 months',
    salary: '₹6-35 LPA'
  },
  {
    id: 'financial-analysis',
    name: 'Financial Analysis & Modeling',
    category: 'Finance Skills',
    description: 'Analyze financial data and create comprehensive financial models',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: PieChart,
    color: 'from-blue-500 to-purple-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹6-30 LPA'
  },
  
  // Creative Arts
  {
    id: 'music-production',
    name: 'Music Production & Audio Design',
    category: 'Creative Arts',
    description: 'Create, produce, and engineer music and audio content for various media',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'medium',
    icon: Music,
    color: 'from-violet-500 to-purple-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹4-15 LPA'
  },
  {
    id: 'photography',
    name: 'Professional Photography',
    category: 'Creative Arts',
    description: 'Capture and edit professional photographs for various purposes',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'medium',
    icon: Camera,
    color: 'from-orange-500 to-red-500',
    difficulty: 'beginner',
    timeToLearn: '3-8 months',
    salary: '₹2-12 LPA'
  },
  {
    id: 'digital-art',
    name: 'Digital Art & Illustration',
    category: 'Creative Arts',
    description: 'Create digital artwork and illustrations for various media',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'medium',
    icon: PaintBucket,
    color: 'from-pink-500 to-purple-500',
    difficulty: 'beginner',
    timeToLearn: '4-10 months',
    salary: '₹3-18 LPA'
  },
  
  // Academic Skills
  {
    id: 'research-methodology',
    name: 'Research & Analysis Methods',
    category: 'Academic Skills',
    description: 'Conduct systematic research, analyze data, and present findings effectively',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: BookOpen,
    color: 'from-blue-600 to-indigo-600',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹5-20 LPA'
  },
  {
    id: 'statistical-analysis',
    name: 'Statistical Analysis & Modeling',
    category: 'Academic Skills',
    description: 'Apply statistical methods to analyze and interpret complex data',
    status: 'stable',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: BarChart3,
    color: 'from-emerald-500 to-teal-500',
    difficulty: 'intermediate',
    timeToLearn: '6-12 months',
    salary: '₹5-25 LPA'
  },
  
  // Life Skills
  {
    id: 'sustainability',
    name: 'Sustainability & Environmental Awareness',
    category: 'Life Skills',
    description: 'Understand environmental impact and promote sustainable practices',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'high',
    icon: TreePine,
    color: 'from-green-600 to-emerald-600',
    difficulty: 'beginner',
    timeToLearn: 'Ongoing',
    salary: 'N/A'
  },
  {
    id: 'digital-wellness',
    name: 'Digital Wellness & Mindfulness',
    category: 'Life Skills',
    description: 'Maintain healthy relationships with technology and practice mindfulness',
    status: 'emerging',
    relevancePeriod: 'Until 2050+',
    demandLevel: 'medium',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
    difficulty: 'beginner',
    timeToLearn: 'Ongoing',
    salary: 'N/A'
  },
  
  // Outdated Skills
  {
    id: 'basic-data-entry',
    name: 'Basic Data Entry',
    category: 'Outdated Skills',
    description: 'Manual data input and basic spreadsheet operations',
    status: 'declining',
    relevancePeriod: '1990-2030',
    demandLevel: 'low',
    icon: Clock,
    color: 'from-gray-500 to-gray-400',
    difficulty: 'beginner',
    timeToLearn: '1-2 weeks',
    salary: '₹1-3 LPA'
  },
  {
    id: 'manual-accounting',
    name: 'Manual Bookkeeping',
    category: 'Outdated Skills',
    description: 'Paper-based accounting and manual financial record keeping',
    status: 'declining',
    relevancePeriod: '1980-2025',
    demandLevel: 'low',
    icon: TrendingDown,
    color: 'from-gray-600 to-gray-500',
    difficulty: 'beginner',
    timeToLearn: '2-4 weeks',
    salary: '₹1-4 LPA'
  },
  {
    id: 'typing-speed',
    name: 'Basic Typing Speed',
    category: 'Outdated Skills',
    description: 'Focus on raw typing speed without digital literacy or advanced computer skills',
    status: 'declining',
    relevancePeriod: '1990-2030',
    demandLevel: 'low',
    icon: Clock,
    color: 'from-gray-500 to-slate-500',
    difficulty: 'beginner',
    timeToLearn: '1-2 weeks',
    salary: '₹1-3 LPA'
  },
  {
    id: 'fax-machines',
    name: 'Fax Machine Operation',
    category: 'Outdated Skills',
    description: 'Operating traditional fax machines for document transmission',
    status: 'declining',
    relevancePeriod: '1980-2020',
    demandLevel: 'low',
    icon: TrendingDown,
    color: 'from-gray-600 to-gray-400',
    difficulty: 'beginner',
    timeToLearn: '1 day',
    salary: '₹1-2 LPA'
  }
];

const categories = [
  'All Skills',
  'Foundational Skills',
  'Emerging Tech',
  'Digital Skills',
  'Creative & Design',
  'Soft Skills',
  'Business Skills',
  'Language Skills',
  'Life Skills',
  'STEM Skills',
  'Healthcare Skills',
  'Finance Skills',
  'Creative Arts',
  'Academic Skills',
  'Outdated Skills'
];

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Skills');
  const [statusFilter, setStatusFilter] = useState('all');
  const [demandFilter, setDemandFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const filteredAndSortedSkills = useMemo(() => {
    let filtered = skillsData;
    
    // Category filter
    if (selectedCategory !== 'All Skills') {
      filtered = filtered.filter(skill => skill.category === selectedCategory);
    }
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(skill =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(skill => skill.status === statusFilter);
    }
    
    // Demand filter
    if (demandFilter !== 'all') {
      filtered = filtered.filter(skill => skill.demandLevel === demandFilter);
    }
    
    // Difficulty filter
    if (difficultyFilter !== 'all') {
      filtered = filtered.filter(skill => skill.difficulty === difficultyFilter);
    }
    
    // Sorting
    return filtered.sort((a, b) => {
      // Always prioritize foundational skills
      if (a.isFoundational && !b.isFoundational) return -1;
      if (!a.isFoundational && b.isFoundational) return 1;
      
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'demand':
          const demandOrder = { high: 3, medium: 2, low: 1 };
          return demandOrder[b.demandLevel] - demandOrder[a.demandLevel];
        case 'difficulty':
          const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        default:
          return 0;
      }
    });
  }, [searchTerm, selectedCategory, statusFilter, demandFilter, difficultyFilter, sortBy]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredAndSortedSkills.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSkills = filteredAndSortedSkills.slice(startIndex, endIndex);

  // Reset to first page when filters change
  const resetPage = () => {
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All Skills');
    setStatusFilter('all');
    setDemandFilter('all');
    setDifficultyFilter('all');
    setSortBy('relevance');
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(parseInt(value));
    setCurrentPage(1);
  };

  // Generate pagination items
  const getPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          items.push(i);
        }
        items.push('ellipsis');
        items.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        items.push(1);
        items.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          items.push(i);
        }
      } else {
        items.push(1);
        items.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          items.push(i);
        }
        items.push('ellipsis');
        items.push(totalPages);
      }
    }
    
    return items;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-gradient">
            Skills Explorer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover, filter, and explore skills that will shape your future career. From foundational skills to cutting-edge technologies.
          </p>
        </div>

        {/* Advanced Filters */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Advanced Filters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search for skills..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  resetPage();
                }}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>

            {/* Filter Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              <Select value={statusFilter} onValueChange={(value) => {
                setStatusFilter(value);
                resetPage();
              }}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="emerging">Emerging</SelectItem>
                  <SelectItem value="stable">Stable</SelectItem>
                  <SelectItem value="declining">Declining</SelectItem>
                </SelectContent>
              </Select>

              <Select value={demandFilter} onValueChange={(value) => {
                setDemandFilter(value);
                resetPage();
              }}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Demand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Demand</SelectItem>
                  <SelectItem value="high">High Demand</SelectItem>
                  <SelectItem value="medium">Medium Demand</SelectItem>
                  <SelectItem value="low">Low Demand</SelectItem>
                </SelectContent>
              </Select>

              <Select value={difficultyFilter} onValueChange={(value) => {
                setDifficultyFilter(value);
                resetPage();
              }}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={(value) => {
                setSortBy(value);
                resetPage();
              }}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="demand">Demand Level</SelectItem>
                  <SelectItem value="difficulty">Difficulty</SelectItem>
                </SelectContent>
              </Select>

              <Select value={itemsPerPage.toString()} onValueChange={handleItemsPerPageChange}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Results per page" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6">6 per page</SelectItem>
                  <SelectItem value="12">12 per page</SelectItem>
                  <SelectItem value="24">24 per page</SelectItem>
                  <SelectItem value="48">48 per page</SelectItem>
                </SelectContent>
              </Select>

              <Button
                onClick={clearAllFilters}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Clear All
              </Button>
            </div>

            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={(category) => {
                setSelectedCategory(category);
                resetPage();
              }}
            />
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-300">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedSkills.length)} of {filteredAndSortedSkills.length} skills
            {selectedCategory !== 'All Skills' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
          <p className="text-gray-400 text-sm">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {currentSkills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              index={index}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    className={currentPage <= 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-white/10'}
                  />
                </PaginationItem>
                
                {getPaginationItems().map((item, index) => (
                  <PaginationItem key={index}>
                    {item === 'ellipsis' ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        onClick={() => handlePageChange(item as number)}
                        isActive={currentPage === item}
                        className="cursor-pointer hover:bg-white/10"
                      >
                        {item}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-white/10'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {filteredAndSortedSkills.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No skills found matching your criteria</div>
            <Button
              onClick={clearAllFilters}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
