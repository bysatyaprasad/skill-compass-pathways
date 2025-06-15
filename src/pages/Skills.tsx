import { useState, useMemo } from "react";
import { Search, Filter, TrendingUp, TrendingDown, Minus, Clock, Brain, Code, Palette, Briefcase, Globe, Zap, Target, Heart, Users, MessageCircle, Lightbulb, Shield, BookOpen, Gamepad2, Camera, Music, PenTool, Calculator, Languages, Compass, FlaskConical, Rocket, Trees, Sparkles, Database, Smartphone, Monitor, Server, Lock, Cpu, HardDrive, Cloud, Wifi, Settings, Wrench, Hammer, PaintBucket, Film, Headphones, Mic, Video, Edit3, Image, FileText, BarChart3, LineChart, PieChart, TrendingUp as TrendingUpIcon, DollarSign, CreditCard, Banknote, Briefcase as BriefcaseIcon, Building, Home, Car, Plane, Ship, Truck, Bus, Bike, Siren, Stethoscope, Pill, Activity, Dumbbell, Apple, Coffee, ChefHat, Utensils, Wine, ShoppingBag, Gift, Package, Box, Archive, Folder, File, FileImage, FileVideo, FileAudio, FileMinus, FileBarChart, FileSpreadsheet, FileCode, Terminal, Command, Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw, RefreshCw, Download, Upload, Share, Copy, Scissors, Paperclip, Link, ExternalLink, Eye, EyeOff, ThumbsUp, ThumbsDown, Star, Bookmark, Flag, Award, Trophy, Medal, Crown, Diamond, Gem, Coins, Banknote as Money, Wallet, ShoppingCart, Store, MapPin, Map, Navigation, Compass as CompassIcon, Globe as GlobeIcon, Sun, Moon, CloudRain, CloudSnow, Zap as Lightning, Wind, Thermometer, Umbrella, Snowflake, Flower, Leaf, Mountain, Waves, Fish, Bird, Bug, Dog, Cat, Rabbit, Turtle, Phone, Mail, MessageSquare, MessageCircle as Chat, Send, Bell, BellRing, Calendar, Clock as ClockIcon, Timer, AlarmClock, Watch, Hourglass, Battery, BatteryLow, Wifi as WifiIcon, Signal, Bluetooth, Usb, HardDrive as Storage, Disc, Save, FolderOpen, Trash, Trash2, MoreHorizontal, MoreVertical, Menu, X, Plus, Minus as MinusIcon, Check, CheckCircle, XCircle, Info, AlertTriangle, AlertCircle, HelpCircle, AlertOctagon, Scale, Gavel, TreePine, Microscope, TestTube, Atom, Dna, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Zap as Electric, Factory, Cog, Beaker, Magnet, Layers, Network, Workflow, Grid3X3, Layout, BookMarked, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SkillCard } from "@/components/SkillCard";

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedDemand, setSelectedDemand] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [skillsPerPage, setSkillsPerPage] = useState(12);

  const skills = [
    {
      id: "ai-ml",
      name: "Artificial Intelligence & Machine Learning",
      category: "Technology",
      description: "Develop AI systems, machine learning models, and intelligent applications that can learn from data",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'high' as const,
      icon: Brain,
      color: 'from-purple-600 to-indigo-600',
      difficulty: 'advanced' as const,
      timeToLearn: '18+ months',
      salary: '$120k-300k+'
    },
    {
      id: "web-dev",
      name: "Full-Stack Web Development",
      category: "Technology",
      description: "Build complete web applications from frontend interfaces to backend systems and databases",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'high' as const,
      icon: Code,
      color: 'from-blue-600 to-cyan-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '12-18 months',
      salary: '$70k-180k',
      isFoundational: true
    },
    {
      id: "mobile-dev",
      name: "Mobile App Development",
      category: "Technology",
      description: "Create native and cross-platform mobile applications for iOS and Android devices",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'high' as const,
      icon: Smartphone,
      color: 'from-green-600 to-teal-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '8-15 months',
      salary: '$75k-160k'
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity & Information Security",
      category: "Technology",
      description: "Protect digital systems, networks, and data from cyber threats and security breaches",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'high' as const,
      icon: Shield,
      color: 'from-red-600 to-pink-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '12-24 months',
      salary: '$90k-200k+'
    },
    {
      id: "cloud-computing",
      name: "Cloud Computing & DevOps",
      category: "Technology",
      description: "Design and manage cloud infrastructure, automate deployments, and optimize system operations",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2045+',
      demandLevel: 'high' as const,
      icon: Cloud,
      color: 'from-sky-600 to-blue-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '10-18 months',
      salary: '$85k-180k'
    },
    {
      id: "data-science",
      name: "Data Science & Analytics",
      category: "Technology",
      description: "Extract insights from large datasets using statistical analysis, visualization, and predictive modeling",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'high' as const,
      icon: BarChart3,
      color: 'from-orange-600 to-red-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '12-20 months',
      salary: '$95k-200k'
    },
    {
      id: "blockchain",
      name: "Blockchain & Cryptocurrency",
      category: "Technology",
      description: "Develop decentralized applications, smart contracts, and blockchain-based financial systems",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: Coins,
      color: 'from-yellow-600 to-orange-600',
      difficulty: 'advanced' as const,
      timeToLearn: '15-24 months',
      salary: '$100k-250k'
    },
    {
      id: "iot-development",
      name: "Internet of Things (IoT)",
      category: "Technology",
      description: "Design and develop connected devices and smart systems for homes, cities, and industries",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2045+',
      demandLevel: 'medium' as const,
      icon: Wifi,
      color: 'from-teal-600 to-green-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '10-16 months',
      salary: '$70k-140k'
    },
    {
      id: "quantum-computing",
      name: "Quantum Computing",
      category: "Technology",
      description: "Develop applications for quantum computers and quantum algorithms for complex problem solving",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2060+',
      demandLevel: 'low' as const,
      icon: Atom,
      color: 'from-purple-600 to-violet-600',
      difficulty: 'advanced' as const,
      timeToLearn: '24+ months',
      salary: '$150k-400k+'
    },
    {
      id: "ar-vr-development",
      name: "AR/VR Development",
      category: "Technology",
      description: "Create immersive augmented and virtual reality experiences for gaming, education, and business",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2045+',
      demandLevel: 'medium' as const,
      icon: Gamepad2,
      color: 'from-pink-600 to-purple-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '12-18 months',
      salary: '$80k-160k'
    },
    {
      id: "digital-marketing",
      name: "Digital Marketing & SEO",
      category: "Business",
      description: "Drive online growth through search engine optimization, social media, and digital advertising campaigns",
      status: 'stable' as const,
      relevancePeriod: 'Until 2035+',
      demandLevel: 'high' as const,
      icon: Target,
      color: 'from-green-600 to-emerald-600',
      difficulty: 'beginner' as const,
      timeToLearn: '6-12 months',
      salary: '$45k-120k',
      isFoundational: true
    },
    {
      id: "project-management",
      name: "Project Management",
      category: "Business",
      description: "Lead teams and deliver complex projects on time and within budget using proven methodologies",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'high' as const,
      icon: Briefcase,
      color: 'from-blue-600 to-indigo-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '8-12 months',
      salary: '$60k-140k',
      isFoundational: true
    },
    {
      id: "business-analysis",
      name: "Business Analysis",
      category: "Business",
      description: "Analyze business processes, identify improvement opportunities, and design efficient solutions",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'high' as const,
      icon: LineChart,
      color: 'from-purple-600 to-pink-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '6-10 months',
      salary: '$65k-130k'
    },
    {
      id: "product-management",
      name: "Product Management",
      category: "Business",
      description: "Define product strategy, coordinate development teams, and deliver products that meet market needs",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'high' as const,
      icon: Package,
      color: 'from-orange-600 to-red-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '12-18 months',
      salary: '$90k-200k'
    },
    {
      id: "entrepreneurship",
      name: "Entrepreneurship & Startups",
      category: "Business",
      description: "Start and scale businesses, raise capital, and navigate the challenges of building new ventures",
      status: 'stable' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'medium' as const,
      icon: Rocket,
      color: 'from-yellow-600 to-orange-600',
      difficulty: 'advanced' as const,
      timeToLearn: 'Ongoing',
      salary: '$0-unlimited'
    },
    {
      id: "sales-negotiation",
      name: "Sales & Negotiation",
      category: "Business",
      description: "Master the art of selling, relationship building, and negotiating win-win agreements",
      status: 'stable' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'high' as const,
      icon: Users,
      color: 'from-green-600 to-teal-600',
      difficulty: 'beginner' as const,
      timeToLearn: '6-12 months',
      salary: '$40k-200k+',
      isFoundational: true
    },
    {
      id: "supply-chain",
      name: "Supply Chain Management",
      category: "Business",
      description: "Optimize the flow of goods and services from suppliers to customers globally",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: Truck,
      color: 'from-blue-600 to-cyan-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '8-14 months',
      salary: '$55k-120k'
    },
    {
      id: "hr-management",
      name: "Human Resources Management",
      category: "Business",
      description: "Manage talent acquisition, employee development, and organizational culture",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: Heart,
      color: 'from-pink-600 to-rose-600',
      difficulty: 'beginner' as const,
      timeToLearn: '6-10 months',
      salary: '$50k-110k'
    },
    {
      id: "ui-ux-design",
      name: "UI/UX Design",
      category: "Creative",
      description: "Design intuitive user interfaces and create exceptional user experiences for digital products",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'high' as const,
      icon: Palette,
      color: 'from-pink-600 to-purple-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '8-15 months',
      salary: '$60k-140k'
    },
    {
      id: "graphic-design",
      name: "Graphic Design",
      category: "Creative",
      description: "Create visual communications, branding materials, and marketing designs across various media",
      status: 'stable' as const,
      relevancePeriod: 'Until 2035+',
      demandLevel: 'medium' as const,
      icon: PenTool,
      color: 'from-blue-600 to-teal-600',
      difficulty: 'beginner' as const,
      timeToLearn: '6-12 months',
      salary: '$35k-80k'
    },
    {
      id: "video-production",
      name: "Video Production & Editing",
      category: "Creative",
      description: "Produce and edit professional videos for entertainment, marketing, and educational content",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'high' as const,
      icon: Video,
      color: 'from-red-600 to-pink-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '8-15 months',
      salary: '$40k-100k'
    },
    {
      id: "photography",
      name: "Professional Photography",
      category: "Creative",
      description: "Capture and edit high-quality images for commercial, artistic, and personal purposes",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: Camera,
      color: 'from-yellow-600 to-orange-600',
      difficulty: 'beginner' as const,
      timeToLearn: '4-8 months',
      salary: '$30k-80k'
    },
    {
      id: "3d-modeling",
      name: "3D Modeling & Animation",
      category: "Creative",
      description: "Create three-dimensional models and animations for gaming, movies, and architectural visualization",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2045+',
      demandLevel: 'medium' as const,
      icon: Box,
      color: 'from-purple-600 to-indigo-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '12-20 months',
      salary: '$50k-120k'
    },
    {
      id: "music-production",
      name: "Music Production & Audio",
      category: "Creative",
      description: "Compose, record, and produce music and audio content for various media and platforms",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: Music,
      color: 'from-green-600 to-teal-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '10-18 months',
      salary: '$35k-90k'
    },
    {
      id: "fashion-design",
      name: "Fashion Design",
      category: "Creative",
      description: "Design clothing, accessories, and fashion collections for various markets and demographics",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'low' as const,
      icon: Sparkles,
      color: 'from-pink-600 to-rose-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '12-24 months',
      salary: '$35k-85k'
    },
    {
      id: "game-design",
      name: "Game Design & Development",
      category: "Creative",
      description: "Design and develop engaging video games across multiple platforms and genres",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2045+',
      demandLevel: 'medium' as const,
      icon: Gamepad2,
      color: 'from-purple-600 to-violet-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '15-24 months',
      salary: '$55k-130k'
    },
    {
      id: "nursing",
      name: "Nursing & Patient Care",
      category: "Healthcare",
      description: "Provide direct patient care, administer medications, and support medical treatments",
      status: 'stable' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'high' as const,
      icon: Stethoscope,
      color: 'from-blue-600 to-teal-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '24-48 months',
      salary: '$55k-90k'
    },
    {
      id: "medical-technology",
      name: "Medical Technology",
      category: "Healthcare",
      description: "Operate and maintain medical equipment, conduct diagnostic tests, and support medical procedures",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2045+',
      demandLevel: 'high' as const,
      icon: Activity,
      color: 'from-green-600 to-emerald-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '12-24 months',
      salary: '$45k-75k'
    },
    {
      id: "telemedicine",
      name: "Telemedicine & Digital Health",
      category: "Healthcare",
      description: "Provide remote healthcare services using digital technologies and telecommunications",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'medium' as const,
      icon: Monitor,
      color: 'from-purple-600 to-indigo-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '8-15 months',
      salary: '$60k-120k'
    },
    {
      id: "pharmacy",
      name: "Pharmacy & Drug Management",
      category: "Healthcare",
      description: "Dispense medications, provide drug information, and ensure safe pharmaceutical practices",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: Pill,
      color: 'from-orange-600 to-red-600',
      difficulty: 'advanced' as const,
      timeToLearn: '48+ months',
      salary: '$120k-160k'
    },
    {
      id: "physical-therapy",
      name: "Physical Therapy & Rehabilitation",
      category: "Healthcare",
      description: "Help patients recover from injuries and improve physical function through therapeutic exercises",
      status: 'stable' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'high' as const,
      icon: Dumbbell,
      color: 'from-blue-600 to-cyan-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '36+ months',
      salary: '$80k-95k'
    },
    {
      id: "mental-health",
      name: "Mental Health & Counseling",
      category: "Healthcare",
      description: "Provide psychological support, therapy, and mental health services to individuals and groups",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'high' as const,
      icon: Brain,
      color: 'from-pink-600 to-purple-600',
      difficulty: 'advanced' as const,
      timeToLearn: '48+ months',
      salary: '$50k-120k'
    },
    {
      id: "financial-analysis",
      name: "Financial Analysis & Planning",
      category: "Finance",
      description: "Analyze financial data, create budgets, and provide investment recommendations",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'high' as const,
      icon: Calculator,
      color: 'from-green-600 to-teal-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '12-18 months',
      salary: '$65k-130k'
    },
    {
      id: "investment-banking",
      name: "Investment Banking",
      category: "Finance",
      description: "Structure financial deals, manage mergers and acquisitions, and raise capital for organizations",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: Building,
      color: 'from-blue-600 to-indigo-600',
      difficulty: 'advanced' as const,
      timeToLearn: '24+ months',
      salary: '$100k-300k+'
    },
    {
      id: "accounting",
      name: "Accounting & Bookkeeping",
      category: "Finance",
      description: "Manage financial records, prepare tax documents, and ensure compliance with regulations",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: FileSpreadsheet,
      color: 'from-orange-600 to-yellow-600',
      difficulty: 'beginner' as const,
      timeToLearn: '8-15 months',
      salary: '$40k-80k'
    },
    {
      id: "cryptocurrency",
      name: "Cryptocurrency Trading",
      category: "Finance",
      description: "Trade and invest in digital currencies, analyze market trends, and manage crypto portfolios",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: Coins,
      color: 'from-yellow-600 to-orange-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '6-12 months',
      salary: '$50k-200k+'
    },
    {
      id: "insurance",
      name: "Insurance & Risk Management",
      category: "Finance",
      description: "Assess and manage financial risks, sell insurance products, and process claims",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: Shield,
      color: 'from-blue-600 to-cyan-600',
      difficulty: 'beginner' as const,
      timeToLearn: '6-10 months',
      salary: '$45k-85k'
    },
    {
      id: "online-teaching",
      name: "Online Teaching & E-Learning",
      category: "Education",
      description: "Create and deliver educational content through digital platforms and virtual classrooms",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'high' as const,
      icon: Monitor,
      color: 'from-blue-600 to-purple-600',
      difficulty: 'beginner' as const,
      timeToLearn: '4-8 months',
      salary: '$35k-75k'
    },
    {
      id: "corporate-training",
      name: "Corporate Training & Development",
      category: "Education",
      description: "Design and deliver professional development programs for organizations and employees",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: Users,
      color: 'from-green-600 to-teal-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '8-12 months',
      salary: '$50k-95k'
    },
    {
      id: "curriculum-design",
      name: "Curriculum Design & Development",
      category: "Education",
      description: "Create educational programs, learning objectives, and assessment strategies",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: BookOpen,
      color: 'from-purple-600 to-pink-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '10-15 months',
      salary: '$45k-85k'
    },
    {
      id: "educational-technology",
      name: "Educational Technology",
      category: "Education",
      description: "Integrate technology into learning environments and develop educational software",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2045+',
      demandLevel: 'medium' as const,
      icon: Laptop,
      color: 'from-blue-600 to-indigo-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '10-16 months',
      salary: '$50k-95k'
    },
    {
      id: "renewable-energy",
      name: "Renewable Energy Systems",
      category: "Environmental",
      description: "Design and implement solar, wind, and other renewable energy solutions",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'high' as const,
      icon: Sun,
      color: 'from-yellow-600 to-orange-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '12-20 months',
      salary: '$60k-120k'
    },
    {
      id: "environmental-science",
      name: "Environmental Science & Conservation",
      category: "Environmental",
      description: "Study environmental problems and develop solutions for conservation and sustainability",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'medium' as const,
      icon: Trees,
      color: 'from-green-600 to-emerald-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '18-24 months',
      salary: '$45k-85k'
    },
    {
      id: "sustainable-agriculture",
      name: "Sustainable Agriculture",
      category: "Environmental",
      description: "Develop eco-friendly farming practices and food production systems",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'medium' as const,
      icon: Apple,
      color: 'from-green-600 to-lime-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '15-24 months',
      salary: '$40k-75k'
    },
    {
      id: "green-building",
      name: "Green Building & Architecture",
      category: "Environmental",
      description: "Design energy-efficient and environmentally sustainable buildings and structures",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'medium' as const,
      icon: Home,
      color: 'from-green-600 to-teal-600',
      difficulty: 'advanced' as const,
      timeToLearn: '24+ months',
      salary: '$55k-110k'
    },
    {
      id: "legal-services",
      name: "Legal Services & Law",
      category: "Legal",
      description: "Provide legal advice, represent clients, and navigate complex legal systems",
      status: 'stable' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'medium' as const,
      icon: Scale,
      color: 'from-blue-600 to-indigo-600',
      difficulty: 'advanced' as const,
      timeToLearn: '48+ months',
      salary: '$60k-200k+'
    },
    {
      id: "compliance-management",
      name: "Compliance & Risk Management",
      category: "Legal",
      description: "Ensure organizational adherence to laws, regulations, and industry standards",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: CheckCircle,
      color: 'from-green-600 to-teal-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '8-15 months',
      salary: '$55k-110k'
    },
    {
      id: "paralegal-services",
      name: "Paralegal Services",
      category: "Legal",
      description: "Assist lawyers with legal research, document preparation, and case management",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: FileText,
      color: 'from-purple-600 to-pink-600',
      difficulty: 'beginner' as const,
      timeToLearn: '6-12 months',
      salary: '$35k-60k'
    },
    {
      id: "biotechnology",
      name: "Biotechnology & Bioengineering",
      category: "Science",
      description: "Apply biological systems and organisms to develop products and technologies",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'medium' as const,
      icon: Dna,
      color: 'from-green-600 to-teal-600',
      difficulty: 'advanced' as const,
      timeToLearn: '24+ months',
      salary: '$65k-130k'
    },
    {
      id: "materials-science",
      name: "Materials Science & Engineering",
      category: "Science",
      description: "Develop new materials and improve existing ones for various industrial applications",
      status: 'stable' as const,
      relevancePeriod: 'Until 2045+',
      demandLevel: 'medium' as const,
      icon: Atom,
      color: 'from-blue-600 to-purple-600',
      difficulty: 'advanced' as const,
      timeToLearn: '24+ months',
      salary: '$70k-140k'
    },
    {
      id: "laboratory-research",
      name: "Laboratory Research & Analysis",
      category: "Science",
      description: "Conduct scientific experiments, analyze samples, and contribute to research projects",
      status: 'stable' as const,
      relevancePeriod: 'Until 2045+',
      demandLevel: 'medium' as const,
      icon: FlaskConical,
      color: 'from-orange-600 to-red-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '15-24 months',
      salary: '$40k-80k'
    },
    {
      id: "space-technology",
      name: "Space Technology & Aerospace",
      category: "Science",
      description: "Develop spacecraft, satellites, and technologies for space exploration",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2060+',
      demandLevel: 'low' as const,
      icon: Rocket,
      color: 'from-purple-600 to-indigo-600',
      difficulty: 'advanced' as const,
      timeToLearn: '24+ months',
      salary: '$80k-160k'
    },
    {
      id: "mechanical-engineering",
      name: "Mechanical Engineering",
      category: "Engineering",
      description: "Design and develop mechanical systems, machines, and manufacturing processes",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: Cog,
      color: 'from-blue-600 to-cyan-600',
      difficulty: 'advanced' as const,
      timeToLearn: '24+ months',
      salary: '$65k-120k'
    },
    {
      id: "automation-robotics",
      name: "Automation & Robotics",
      category: "Engineering",
      description: "Design and program automated systems and robotic solutions for various industries",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'high' as const,
      icon: Settings,
      color: 'from-purple-600 to-pink-600',
      difficulty: 'advanced' as const,
      timeToLearn: '18-24 months',
      salary: '$75k-150k'
    },
    {
      id: "quality-control",
      name: "Quality Control & Assurance",
      category: "Engineering",
      description: "Ensure products and processes meet quality standards and regulatory requirements",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: CheckCircle,
      color: 'from-green-600 to-teal-600',
      difficulty: 'beginner' as const,
      timeToLearn: '6-12 months',
      salary: '$45k-85k'
    },
    {
      id: "industrial-design",
      name: "Industrial Design",
      category: "Engineering",
      description: "Design products and systems that optimize function, value, and user experience",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: PenTool,
      color: 'from-orange-600 to-red-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '12-18 months',
      salary: '$55k-100k'
    },
    {
      id: "logistics-coordination",
      name: "Logistics & Supply Chain Coordination",
      category: "Transportation",
      description: "Coordinate the movement of goods and materials efficiently across supply chains",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: Truck,
      color: 'from-blue-600 to-cyan-600',
      difficulty: 'beginner' as const,
      timeToLearn: '4-8 months',
      salary: '$40k-75k'
    },
    {
      id: "aviation-management",
      name: "Aviation & Airport Management",
      category: "Transportation",
      description: "Manage airport operations, flight schedules, and aviation safety protocols",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: Plane,
      color: 'from-sky-600 to-blue-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '12-18 months',
      salary: '$50k-95k'
    },
    {
      id: "maritime-shipping",
      name: "Maritime & Shipping Operations",
      category: "Transportation",
      description: "Manage sea transport operations, port logistics, and international shipping",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: Ship,
      color: 'from-blue-600 to-teal-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '10-15 months',
      salary: '$45k-85k'
    },
    {
      id: "autonomous-vehicles",
      name: "Autonomous Vehicle Technology",
      category: "Transportation",
      description: "Develop and maintain self-driving vehicle systems and smart transportation infrastructure",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2050+',
      demandLevel: 'medium' as const,
      icon: Car,
      color: 'from-purple-600 to-indigo-600',
      difficulty: 'advanced' as const,
      timeToLearn: '18-24 months',
      salary: '$80k-150k'
    },
    {
      id: "content-creation",
      name: "Content Creation & Influencing",
      category: "Communication",
      description: "Create engaging content for social media, blogs, and digital platforms to build audiences",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2035+',
      demandLevel: 'high' as const,
      icon: Edit3,
      color: 'from-pink-600 to-purple-600',
      difficulty: 'beginner' as const,
      timeToLearn: '3-8 months',
      salary: '$25k-100k+',
      isFoundational: true
    },
    {
      id: "journalism",
      name: "Digital Journalism & Reporting",
      category: "Communication",
      description: "Research, write, and report news stories across digital and traditional media platforms",
      status: 'declining' as const,
      relevancePeriod: 'Until 2030',
      demandLevel: 'low' as const,
      icon: FileText,
      color: 'from-blue-600 to-indigo-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '8-15 months',
      salary: '$30k-70k'
    },
    {
      id: "public-relations",
      name: "Public Relations & Communications",
      category: "Communication",
      description: "Manage organizational reputation and communications with media and stakeholders",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: MessageCircle,
      color: 'from-green-600 to-teal-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '6-12 months',
      salary: '$45k-90k'
    },
    {
      id: "podcasting",
      name: "Podcasting & Audio Content",
      category: "Communication",
      description: "Create, produce, and distribute podcast content and audio entertainment",
      status: 'emerging' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'medium' as const,
      icon: Mic,
      color: 'from-orange-600 to-red-600',
      difficulty: 'beginner' as const,
      timeToLearn: '4-8 months',
      salary: '$25k-80k'
    },
    {
      id: "translation-interpretation",
      name: "Translation & Interpretation",
      category: "Communication",
      description: "Translate written documents and provide interpretation services across languages",
      status: 'declining' as const,
      relevancePeriod: 'Until 2030',
      demandLevel: 'low' as const,
      icon: Languages,
      color: 'from-blue-600 to-purple-600',
      difficulty: 'intermediate' as const,
      timeToLearn: '12-24 months',
      salary: '$35k-75k'
    },
    {
      id: "copywriting",
      name: "Copywriting & Content Marketing",
      category: "Communication",
      description: "Write persuasive marketing copy and content that drives sales and engagement",
      status: 'stable' as const,
      relevancePeriod: 'Until 2040+',
      demandLevel: 'high' as const,
      icon: PenTool,
      color: 'from-yellow-600 to-orange-600',
      difficulty: 'beginner' as const,
      timeToLearn: '4-8 months',
      salary: '$40k-90k',
      isFoundational: true
    }
  ];

  const categories = ['all', ...Array.from(new Set(skills.map(skill => skill.category)))];

  const filteredSkills = useMemo(() => {
    return skills.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          skill.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesStatus = selectedStatus === 'all' || skill.status === selectedStatus;
      const matchesDemand = selectedDemand === 'all' || skill.demandLevel === selectedDemand;
      
      return matchesSearch && matchesCategory && matchesStatus && matchesDemand;
    });
  }, [searchTerm, selectedCategory, selectedStatus, selectedDemand, skills]);

  const totalPages = Math.ceil(filteredSkills.length / skillsPerPage);
  const startIndex = (currentPage - 1) * skillsPerPage;
  const paginatedSkills = filteredSkills.slice(startIndex, startIndex + skillsPerPage);

  const resetPage = () => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  };

  React.useEffect(() => {
    resetPage();
  }, [selectedCategory, selectedStatus, selectedDemand, searchTerm, skillsPerPage]);

  const getPaginationRange = () => {
    const range = [];
    const showPages = 5;
    let start = Math.max(1, currentPage - Math.floor(showPages / 2));
    let end = Math.min(totalPages, start + showPages - 1);
    
    if (end - start + 1 < showPages) {
      start = Math.max(1, end - showPages + 1);
    }
    
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-gradient">
            Skills Explorer
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover in-demand skills, explore career paths, and understand the future job market. 
            Filter by category, demand level, and growth trends to find your next learning opportunity.
          </p>
        </div>

        {/* Filters */}
        <Card className="glass-card mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
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
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="emerging">Emerging</SelectItem>
                  <SelectItem value="stable">Stable</SelectItem>
                  <SelectItem value="declining">Declining</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedDemand} onValueChange={setSelectedDemand}>
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
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Filter className="h-4 w-4" />
                Showing {paginatedSkills.length} of {filteredSkills.length} skills
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-300">Skills per page:</span>
                <Select value={skillsPerPage.toString()} onValueChange={(value) => setSkillsPerPage(Number(value))}>
                  <SelectTrigger className="w-20 bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                    <SelectItem value="36">36</SelectItem>
                    <SelectItem value="48">48</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {paginatedSkills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-300">
                  Page {currentPage} of {totalPages} ({filteredSkills.length} total skills)
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <ChevronsLeft className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  {getPaginationRange().map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page 
                        ? "bg-purple-600 hover:bg-purple-700 text-white" 
                        : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                      }
                    >
                      {page}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <ChevronsRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* No Results */}
        {filteredSkills.length === 0 && (
          <Card className="glass-card">
            <CardContent className="p-12 text-center">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No skills found</h3>
              <p className="text-gray-300 mb-4">
                Try adjusting your search terms or filters to find relevant skills.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedStatus("all");
                  setSelectedDemand("all");
                }}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Skills;
