import { useState } from "react";
import { Link } from "react-router-dom";
import { Target, TrendingUp, Users, Briefcase, GraduationCap, DollarSign, MapPin, Clock, ArrowRight, Search, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface CareerPath {
  id: string;
  title: string;
  description: string;
  skills: string[];
  salaryRange: string;
  experienceLevel: string;
  growth: 'high' | 'medium' | 'low';
  demand: 'high' | 'medium' | 'low';
  timeToTransition: string;
  keyCompanies: string[];
  futureOutlook: string;
}

const ITEMS_PER_PAGE = 12;

const careerPaths: CareerPath[] = [
  {
    id: 'ai-engineer',
    title: 'AI/ML Engineer',
    description: 'Design and develop machine learning models and AI systems',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Science', 'Statistics', 'Deep Learning'],
    salaryRange: '₹15-50 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '12-18 months',
    keyCompanies: ['Google', 'Microsoft', 'Amazon', 'OpenAI', 'Meta', 'NVIDIA'],
    futureOutlook: 'Extremely promising with AI revolution driving massive demand'
  },
  {
    id: 'full-stack-dev',
    title: 'Full-Stack Developer',
    description: 'Build end-to-end web applications with frontend and backend expertise',
    skills: ['JavaScript', 'React', 'Node.js', 'Databases', 'Cloud Services', 'DevOps'],
    salaryRange: '₹8-35 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '6-12 months',
    keyCompanies: ['Flipkart', 'Swiggy', 'Zomato', 'Paytm', 'Byjus', 'Razorpay'],
    futureOutlook: 'Stable growth with continuous demand for digital transformation'
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Drive product strategy, development, and growth',
    skills: ['Product Strategy', 'Data Analysis', 'User Research', 'Agile', 'Communication', 'Business Acumen'],
    salaryRange: '₹12-60 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '8-15 months',
    keyCompanies: ['Google', 'Amazon', 'Meta', 'Uber', 'Ola', 'PhonePe'],
    futureOutlook: 'High growth as companies focus on product-led strategies'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Extract insights from data to drive business decisions',
    skills: ['Python', 'R', 'SQL', 'Statistics', 'Machine Learning', 'Data Visualization'],
    salaryRange: '₹10-45 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '8-14 months',
    keyCompanies: ['Netflix', 'Airbnb', 'LinkedIn', 'Walmart Labs', 'JPMorgan', 'Goldman Sachs'],
    futureOutlook: 'Strong demand as data becomes core business asset'
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Bridge development and operations for efficient software delivery',
    skills: ['Docker', 'Kubernetes', 'AWS/Azure', 'CI/CD', 'Linux', 'Terraform'],
    salaryRange: '₹12-40 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '10-16 months',
    keyCompanies: ['Amazon', 'Microsoft', 'Red Hat', 'Atlassian', 'GitLab', 'HashiCorp'],
    futureOutlook: 'Critical role in cloud-first infrastructure strategies'
  },
  {
    id: 'cybersecurity-specialist',
    title: 'Cybersecurity Specialist',
    description: 'Protect organizations from cyber threats and security breaches',
    skills: ['Network Security', 'Ethical Hacking', 'Risk Assessment', 'Compliance', 'Incident Response', 'SIEM'],
    salaryRange: '₹8-35 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '12-18 months',
    keyCompanies: ['Palo Alto Networks', 'CrowdStrike', 'Fortinet', 'IBM Security', 'Accenture', 'Deloitte'],
    futureOutlook: 'Exponential growth due to increasing cyber threats'
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Solutions Architect',
    description: 'Design and implement scalable cloud infrastructure solutions',
    skills: ['AWS/Azure/GCP', 'System Design', 'Microservices', 'Security', 'Cost Optimization', 'Migration'],
    salaryRange: '₹18-55 LPA',
    experienceLevel: 'Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '18-24 months',
    keyCompanies: ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud', 'Oracle', 'VMware'],
    futureOutlook: 'Essential as enterprises migrate to cloud-first strategies'
  },
  {
    id: 'ux-designer',
    title: 'UX/UI Designer',
    description: 'Create intuitive and engaging user experiences for digital products',
    skills: ['Design Thinking', 'Figma', 'User Research', 'Prototyping', 'Usability Testing', 'Visual Design'],
    salaryRange: '₹6-30 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '6-10 months',
    keyCompanies: ['Adobe', 'Airbnb', 'Spotify', 'Zomato', 'Phonepe', 'Flipkart'],
    futureOutlook: 'Growing importance as user experience becomes competitive advantage'
  },
  {
    id: 'blockchain-developer',
    title: 'Blockchain Developer',
    description: 'Build decentralized applications and smart contracts',
    skills: ['Solidity', 'Web3', 'Smart Contracts', 'Ethereum', 'DeFi', 'Cryptography'],
    salaryRange: '₹10-45 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'medium',
    timeToTransition: '12-18 months',
    keyCompanies: ['Coinbase', 'Binance', 'Polygon', 'WazirX', 'CoinDCX', 'Zebpay'],
    futureOutlook: 'High potential as Web3 and DeFi ecosystems mature'
  },
  {
    id: 'mobile-developer',
    title: 'Mobile App Developer',
    description: 'Create native and cross-platform mobile applications',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Mobile UI/UX', 'App Store Optimization'],
    salaryRange: '₹7-32 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '8-12 months',
    keyCompanies: ['Google', 'Apple', 'Uber', 'Instagram', 'WhatsApp', 'Swiggy'],
    futureOutlook: 'Steady demand as mobile-first approach continues'
  },
  {
    id: 'digital-marketing-manager',
    title: 'Digital Marketing Manager',
    description: 'Drive online marketing strategies and customer acquisition',
    skills: ['SEO/SEM', 'Social Media Marketing', 'Content Strategy', 'Analytics', 'Paid Advertising', 'Marketing Automation'],
    salaryRange: '₹5-25 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '4-8 months',
    keyCompanies: ['Google', 'Meta', 'Amazon', 'HubSpot', 'Salesforce', 'Adobe'],
    futureOutlook: 'Essential as businesses prioritize digital presence'
  },
  {
    id: 'sales-engineer',
    title: 'Technical Sales Engineer',
    description: 'Bridge technical products with customer needs and sales',
    skills: ['Technical Communication', 'Solution Architecture', 'CRM', 'Presentation', 'Negotiation', 'Product Knowledge'],
    salaryRange: '₹8-40 LPA',
    experienceLevel: 'Intermediate',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '6-10 months',
    keyCompanies: ['Salesforce', 'Oracle', 'Microsoft', 'IBM', 'SAP', 'Cisco'],
    futureOutlook: 'Growing need for technical expertise in B2B sales'
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    description: 'Analyze business processes and recommend technology solutions',
    skills: ['Requirements Analysis', 'Process Mapping', 'SQL', 'Data Analysis', 'Stakeholder Management', 'Documentation'],
    salaryRange: '₹6-28 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '4-8 months',
    keyCompanies: ['Accenture', 'TCS', 'Infosys', 'Capgemini', 'Deloitte', 'EY'],
    futureOutlook: 'Stable demand for digital transformation initiatives'
  },
  {
    id: 'qa-engineer',
    title: 'QA/Test Engineer',
    description: 'Ensure software quality through testing and automation',
    skills: ['Test Automation', 'Selenium', 'API Testing', 'Performance Testing', 'Bug Tracking', 'Test Planning'],
    salaryRange: '₹4-22 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '4-8 months',
    keyCompanies: ['Microsoft', 'Google', 'Amazon', 'Cognizant', 'Wipro', 'HCL'],
    futureOutlook: 'Consistent demand as software quality becomes critical'
  },
  {
    id: 'content-creator',
    title: 'Digital Content Creator',
    description: 'Create engaging content across digital platforms',
    skills: ['Content Writing', 'Video Editing', 'Social Media', 'SEO', 'Analytics', 'Brand Building'],
    salaryRange: '₹3-20 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '3-6 months',
    keyCompanies: ['YouTube', 'Instagram', 'LinkedIn', 'Medium', 'Substack', 'Patreon'],
    futureOutlook: 'Explosive growth in creator economy and personal branding'
  },
  {
    id: 'fintech-analyst',
    title: 'FinTech Analyst',
    description: 'Analyze financial technology trends and investment opportunities',
    skills: ['Financial Analysis', 'Python/R', 'SQL', 'Risk Management', 'Regulatory Knowledge', 'Market Research'],
    salaryRange: '₹8-35 LPA',
    experienceLevel: 'Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '8-12 months',
    keyCompanies: ['JPMorgan Chase', 'Goldman Sachs', 'Paytm', 'Razorpay', 'CRED', 'Zerodha'],
    futureOutlook: 'High growth as financial services digitize rapidly'
  },
  {
    id: 'game-developer',
    title: 'Game Developer',
    description: 'Create interactive gaming experiences across platforms',
    skills: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Game Design', '3D Modeling'],
    salaryRange: '₹5-30 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'high',
    demand: 'medium',
    timeToTransition: '10-15 months',
    keyCompanies: ['Ubisoft', 'EA Games', 'Rockstar', 'Dream11', 'MPL', 'Nazara'],
    futureOutlook: 'Growing rapidly with mobile gaming and esports boom'
  },
  {
    id: 'robotics-engineer',
    title: 'Robotics Engineer',
    description: 'Design and develop robotic systems and automation solutions',
    skills: ['ROS', 'Python', 'C++', 'Computer Vision', 'Control Systems', 'Mechanical Design'],
    salaryRange: '₹8-40 LPA',
    experienceLevel: 'Advanced',
    growth: 'high',
    demand: 'medium',
    timeToTransition: '15-24 months',
    keyCompanies: ['Boston Dynamics', 'Tesla', 'ABB', 'KUKA', 'Fanuc', 'Tata Motors'],
    futureOutlook: 'Emerging field with automation driving industrial transformation'
  },
  {
    id: 'sustainability-consultant',
    title: 'Sustainability Consultant',
    description: 'Help organizations implement sustainable and eco-friendly practices',
    skills: ['Environmental Analysis', 'Sustainability Reporting', 'ESG', 'Carbon Footprint', 'Renewable Energy', 'Policy'],
    salaryRange: '₹6-30 LPA',
    experienceLevel: 'Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '8-12 months',
    keyCompanies: ['McKinsey', 'Deloitte', 'Accenture', 'EY', 'KPMG', 'Tata Consultancy'],
    futureOutlook: 'Critical growth area as ESG becomes business imperative'
  },
  {
    id: 'technical-writer',
    title: 'Technical Writer',
    description: 'Create clear documentation and content for technical products',
    skills: ['Technical Writing', 'API Documentation', 'Content Strategy', 'User Guides', 'Information Architecture', 'Tools Knowledge'],
    salaryRange: '₹4-20 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'medium',
    demand: 'medium',
    timeToTransition: '3-6 months',
    keyCompanies: ['Google', 'Microsoft', 'Amazon', 'Atlassian', 'MongoDB', 'Stripe'],
    futureOutlook: 'Steady demand as complex products need clear documentation'
  },
  {
    id: 'site-reliability-engineer',
    title: 'Site Reliability Engineer (SRE)',
    description: 'Ensure system reliability, scalability, and performance at scale',
    skills: ['Kubernetes', 'Docker', 'Monitoring', 'Incident Management', 'Automation', 'Linux'],
    salaryRange: '₹15-45 LPA',
    experienceLevel: 'Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '12-18 months',
    keyCompanies: ['Google', 'Netflix', 'Uber', 'Airbnb', 'Spotify', 'Twitter'],
    futureOutlook: 'Critical for maintaining large-scale distributed systems'
  },
  {
    id: 'growth-hacker',
    title: 'Growth Hacker',
    description: 'Drive rapid user acquisition and business growth through data-driven experiments',
    skills: ['A/B Testing', 'Analytics', 'Viral Marketing', 'Product Analytics', 'User Acquisition', 'Conversion Optimization'],
    salaryRange: '₹6-28 LPA',
    experienceLevel: 'Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '6-10 months',
    keyCompanies: ['Dropbox', 'Airbnb', 'Uber', 'Hotjar', 'Mixpanel', 'Amplitude'],
    futureOutlook: 'Essential for startups and scale-ups focused on rapid growth'
  },
  {
    id: 'solutions-architect',
    title: 'Solutions Architect',
    description: 'Design comprehensive technology solutions for complex business problems',
    skills: ['System Design', 'Architecture Patterns', 'Cloud Platforms', 'Integration', 'Security', 'Scalability'],
    salaryRange: '₹20-60 LPA',
    experienceLevel: 'Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '18-30 months',
    keyCompanies: ['AWS', 'Microsoft', 'IBM', 'Oracle', 'Salesforce', 'Accenture'],
    futureOutlook: 'High demand as enterprises undergo digital transformation'
  },
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    description: 'Build and maintain data pipelines and infrastructure for analytics',
    skills: ['Apache Spark', 'Kafka', 'Airflow', 'SQL', 'Python', 'Data Warehousing'],
    salaryRange: '₹12-42 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '10-16 months',
    keyCompanies: ['Snowflake', 'Databricks', 'Palantir', 'Uber', 'Netflix', 'Airbnb'],
    futureOutlook: 'Critical role as data becomes central to business operations'
  },
  {
    id: 'platform-engineer',
    title: 'Platform Engineer',
    description: 'Build internal platforms and tools to improve developer productivity',
    skills: ['Kubernetes', 'Infrastructure as Code', 'API Design', 'Automation', 'Developer Tools', 'Observability'],
    salaryRange: '₹18-50 LPA',
    experienceLevel: 'Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '15-24 months',
    keyCompanies: ['Stripe', 'Shopify', 'Spotify', 'Netflix', 'Uber', 'Airbnb'],
    futureOutlook: 'Growing importance as companies scale engineering teams'
  },
  {
    id: 'quantitative-analyst',
    title: 'Quantitative Analyst (Quant)',
    description: 'Apply mathematical models to financial markets and trading strategies',
    skills: ['Python/R', 'Statistics', 'Financial Modeling', 'Risk Management', 'Machine Learning', 'Trading Algorithms'],
    salaryRange: '₹15-80 LPA',
    experienceLevel: 'Advanced',
    growth: 'high',
    demand: 'medium',
    timeToTransition: '18-36 months',
    keyCompanies: ['Goldman Sachs', 'JPMorgan', 'Morgan Stanley', 'Citadel', 'Two Sigma', 'DE Shaw'],
    futureOutlook: 'High-paying niche with algorithmic trading growth'
  },
  {
    id: 'voice-ui-designer',
    title: 'Voice UI/UX Designer',
    description: 'Design conversational interfaces for voice assistants and chatbots',
    skills: ['Conversation Design', 'Voice User Interface', 'Natural Language', 'User Research', 'Prototyping', 'AI/NLP'],
    salaryRange: '₹8-25 LPA',
    experienceLevel: 'Intermediate',
    growth: 'high',
    demand: 'medium',
    timeToTransition: '8-12 months',
    keyCompanies: ['Amazon', 'Google', 'Microsoft', 'Apple', 'Samsung', 'Voiceflow'],
    futureOutlook: 'Emerging field with voice technology adoption'
  },
  {
    id: 'ar-vr-developer',
    title: 'AR/VR Developer',
    description: 'Create immersive augmented and virtual reality experiences',
    skills: ['Unity', 'Unreal Engine', 'C#', '3D Modeling', 'Computer Vision', 'Spatial Computing'],
    salaryRange: '₹10-35 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'medium',
    timeToTransition: '12-18 months',
    keyCompanies: ['Meta', 'Apple', 'Microsoft', 'Magic Leap', 'Unity', 'Epic Games'],
    futureOutlook: 'Promising with metaverse and spatial computing trends'
  },
  {
    id: 'prompt-engineer',
    title: 'Prompt Engineer',
    description: 'Optimize AI model interactions and develop effective prompting strategies',
    skills: ['AI/ML Understanding', 'Natural Language Processing', 'Prompt Optimization', 'LLM Fine-tuning', 'Python', 'Testing'],
    salaryRange: '₹12-40 LPA',
    experienceLevel: 'Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '6-12 months',
    keyCompanies: ['OpenAI', 'Anthropic', 'Google', 'Microsoft', 'Hugging Face', 'Scale AI'],
    futureOutlook: 'New high-demand field driven by generative AI adoption'
  },
  {
    id: 'automation-engineer',
    title: 'Automation Engineer',
    description: 'Design and implement automated systems and processes',
    skills: ['RPA Tools', 'Python', 'Process Analysis', 'Workflow Design', 'Testing Automation', 'Integration'],
    salaryRange: '₹8-30 LPA',
    experienceLevel: 'Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '8-12 months',
    keyCompanies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft', 'IBM', 'Accenture'],
    futureOutlook: 'Strong growth as businesses automate repetitive tasks'
  },
  {
    id: 'ethical-hacker',
    title: 'Ethical Hacker/Penetration Tester',
    description: 'Test systems for security vulnerabilities and implement security measures',
    skills: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment', 'Security Tools', 'Linux', 'Scripting'],
    salaryRange: '₹10-35 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '12-18 months',
    keyCompanies: ['Rapid7', 'Qualys', 'Tenable', 'FireEye', 'CrowdStrike', 'Palo Alto Networks'],
    futureOutlook: 'Critical demand with increasing cybersecurity threats'
  },
  {
    id: 'ai-trainer',
    title: 'AI Trainer/Data Labeler',
    description: 'Train AI models by curating and labeling datasets for machine learning',
    skills: ['Data Annotation', 'Machine Learning', 'Quality Control', 'Domain Expertise', 'Tools Proficiency', 'Analysis'],
    salaryRange: '₹4-18 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '3-8 months',
    keyCompanies: ['Scale AI', 'Labelbox', 'Appen', 'Clickworker', 'Amazon', 'Google'],
    futureOutlook: 'Growing field as AI models require high-quality training data'
  },
  {
    id: 'kubernetes-engineer',
    title: 'Kubernetes Engineer',
    description: 'Specialize in container orchestration and Kubernetes cluster management',
    skills: ['Kubernetes', 'Docker', 'Helm', 'YAML', 'Linux', 'Networking'],
    salaryRange: '₹15-45 LPA',
    experienceLevel: 'Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '12-18 months',
    keyCompanies: ['Red Hat', 'VMware', 'CNCF', 'Docker', 'Rancher', 'Platform9'],
    futureOutlook: 'High demand as containerization becomes standard'
  },
  {
    id: 'api-developer',
    title: 'API Developer',
    description: 'Design, develop, and maintain APIs for seamless system integration',
    skills: ['REST/GraphQL', 'API Design', 'Documentation', 'Testing', 'Security', 'Microservices'],
    salaryRange: '₹8-32 LPA',
    experienceLevel: 'Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '6-12 months',
    keyCompanies: ['Postman', 'Stripe', 'Twilio', 'SendGrid', 'Slack', 'PayPal'],
    futureOutlook: 'Essential as systems become more interconnected'
  },
  {
    id: 'e-commerce-specialist',
    title: 'E-commerce Specialist',
    description: 'Optimize online stores and drive e-commerce growth strategies',
    skills: ['E-commerce Platforms', 'Conversion Optimization', 'Digital Marketing', 'Analytics', 'UX Design', 'A/B Testing'],
    salaryRange: '₹5-22 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '4-8 months',
    keyCompanies: ['Shopify', 'Amazon', 'Flipkart', 'BigCommerce', 'WooCommerce', 'Magento'],
    futureOutlook: 'Strong growth with increasing online shopping trends'
  },
  {
    id: 'technical-recruiter',
    title: 'Technical Recruiter',
    description: 'Source and recruit technical talent for technology companies',
    skills: ['Technical Understanding', 'Sourcing', 'Interviewing', 'Networking', 'Communication', 'Market Knowledge'],
    salaryRange: '₹6-25 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '3-6 months',
    keyCompanies: ['Google', 'Microsoft', 'Amazon', 'Uber', 'LinkedIn', 'Indeed'],
    futureOutlook: 'Consistent demand as tech hiring remains competitive'
  },
  {
    id: 'performance-engineer',
    title: 'Performance Engineer',
    description: 'Optimize application and system performance for speed and scalability',
    skills: ['Load Testing', 'Performance Monitoring', 'Profiling', 'Optimization', 'System Analysis', 'Troubleshooting'],
    salaryRange: '₹12-38 LPA',
    experienceLevel: 'Advanced',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '10-15 months',
    keyCompanies: ['Netflix', 'Google', 'Amazon', 'Uber', 'Twitter', 'LinkedIn'],
    futureOutlook: 'Important as applications scale to millions of users'
  },
  {
    id: 'iot-engineer',
    title: 'IoT Engineer',
    description: 'Develop Internet of Things solutions and connected devices',
    skills: ['Embedded Systems', 'Arduino/Raspberry Pi', 'Sensors', 'Networking', 'Cloud Integration', 'Data Analytics'],
    salaryRange: '₹8-30 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'high',
    demand: 'medium',
    timeToTransition: '10-16 months',
    keyCompanies: ['Intel', 'Qualcomm', 'Cisco', 'GE', 'Siemens', 'Bosch'],
    futureOutlook: 'Growing field with smart city and industrial IoT expansion'
  },
  {
    id: 'customer-success-manager',
    title: 'Customer Success Manager',
    description: 'Ensure customer satisfaction and drive product adoption and retention',
    skills: ['Customer Relationship Management', 'Product Knowledge', 'Data Analysis', 'Communication', 'Problem Solving', 'Strategy'],
    salaryRange: '₹6-28 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '4-8 months',
    keyCompanies: ['Salesforce', 'HubSpot', 'Zendesk', 'Intercom', 'Gainsight', 'ChurnZero'],
    futureOutlook: 'Critical for SaaS companies focused on recurring revenue'
  },
  {
    id: 'research-scientist',
    title: 'Research Scientist',
    description: 'Conduct advanced research in AI, ML, and emerging technologies',
    skills: ['Research Methodology', 'Machine Learning', 'Statistics', 'Publications', 'Python/R', 'Mathematics'],
    salaryRange: '₹18-70 LPA',
    experienceLevel: 'Advanced',
    growth: 'high',
    demand: 'medium',
    timeToTransition: '24-48 months',
    keyCompanies: ['Google Research', 'Microsoft Research', 'OpenAI', 'DeepMind', 'FAIR', 'IBM Research'],
    futureOutlook: 'High-value niche driving technological breakthroughs'
  },
  {
    id: 'network-engineer',
    title: 'Network Engineer',
    description: 'Design, implement, and maintain network infrastructure for organizations',
    skills: ['Cisco Networking', 'Network Security', 'TCP/IP', 'Routing/Switching', 'Network Monitoring', 'Troubleshooting'],
    salaryRange: '₹7-30 LPA',
    experienceLevel: 'Intermediate',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '8-14 months',
    keyCompanies: ['Cisco', 'Juniper', 'Huawei', 'Nokia', 'Ericsson', 'HP Enterprise'],
    futureOutlook: 'Stable demand with 5G and SD-WAN adoption'
  },
  {
    id: 'scrum-master',
    title: 'Scrum Master/Agile Coach',
    description: 'Facilitate agile development processes and team collaboration',
    skills: ['Scrum Framework', 'Agile Methodologies', 'Team Facilitation', 'Project Management', 'Coaching', 'Conflict Resolution'],
    salaryRange: '₹8-35 LPA',
    experienceLevel: 'Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '6-10 months',
    keyCompanies: ['Spotify', 'ING', 'Scaled Agile', 'Atlassian', 'Scrum.org', 'Agile Alliance'],
    futureOutlook: 'High demand as organizations adopt agile practices'
  },
  {
    id: 'database-administrator',
    title: 'Database Administrator (DBA)',
    description: 'Manage, optimize, and secure database systems and data storage',
    skills: ['SQL Server', 'Oracle', 'MySQL', 'PostgreSQL', 'Database Security', 'Performance Tuning'],
    salaryRange: '₹6-32 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '8-15 months',
    keyCompanies: ['Oracle', 'Microsoft', 'IBM', 'MongoDB', 'PostgreSQL', 'Redis'],
    futureOutlook: 'Steady demand with growing data volumes'
  },
  {
    id: 'systems-administrator',
    title: 'Systems Administrator',
    description: 'Maintain and manage computer systems, servers, and IT infrastructure',
    skills: ['Linux/Windows Server', 'System Monitoring', 'Backup/Recovery', 'Security Management', 'Scripting', 'Virtualization'],
    salaryRange: '₹5-25 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '6-12 months',
    keyCompanies: ['Microsoft', 'Red Hat', 'VMware', 'Dell', 'HP', 'IBM'],
    futureOutlook: 'Transitioning to cloud but still essential for hybrid environments'
  },
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    description: 'Build user interfaces and client-side applications for web platforms',
    skills: ['HTML/CSS', 'JavaScript', 'React/Vue/Angular', 'Responsive Design', 'Web Performance', 'Version Control'],
    salaryRange: '₹6-28 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '4-8 months',
    keyCompanies: ['Google', 'Facebook', 'Netflix', 'Airbnb', 'Spotify', 'Vercel'],
    futureOutlook: 'Strong demand with web applications continuing to dominate'
  },
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    description: 'Develop server-side logic, databases, and system architecture',
    skills: ['Node.js', 'Python', 'Java', 'API Development', 'Database Design', 'Server Management'],
    salaryRange: '₹7-32 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '6-12 months',
    keyCompanies: ['Amazon', 'Google', 'Microsoft', 'Netflix', 'Uber', 'Stripe'],
    futureOutlook: 'High demand for scalable backend systems'
  },
  {
    id: 'software-tester',
    title: 'Software Tester',
    description: 'Test software applications for bugs, performance issues, and usability',
    skills: ['Manual Testing', 'Test Case Design', 'Bug Reporting', 'Test Planning', 'Regression Testing', 'User Acceptance Testing'],
    salaryRange: '₹3-18 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '3-6 months',
    keyCompanies: ['Microsoft', 'IBM', 'TCS', 'Cognizant', 'Infosys', 'Wipro'],
    futureOutlook: 'Consistent demand but evolving toward automation'
  },
  {
    id: 'ui-designer',
    title: 'UI Designer',
    description: 'Design visual interfaces and user interaction elements for digital products',
    skills: ['Adobe Creative Suite', 'Sketch', 'Figma', 'Visual Design', 'Typography', 'Color Theory'],
    salaryRange: '₹4-22 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '4-8 months',
    keyCompanies: ['Adobe', 'Figma', 'Sketch', 'InVision', 'Canva', 'Dribbble'],
    futureOutlook: 'Strong growth with focus on user experience'
  },
  {
    id: 'video-editor',
    title: 'Video Editor/Motion Graphics Designer',
    description: 'Create and edit video content for marketing, entertainment, and education',
    skills: ['Adobe After Effects', 'Premiere Pro', 'Final Cut Pro', 'Motion Graphics', 'Color Grading', 'Audio Editing'],
    salaryRange: '₹3-25 LPA',
    experienceLevel: 'Beginner to Advanced',
    growth: 'high',
    demand: 'high',
    timeToTransition: '4-10 months',
    keyCompanies: ['Adobe', 'YouTube', 'Netflix', 'Disney', 'Pixar', 'DreamWorks'],
    futureOutlook: 'Explosive growth with video content dominance'
  },
  {
    id: 'social-media-manager',
    title: 'Social Media Manager',
    description: 'Manage brand presence and engagement across social media platforms',
    skills: ['Content Creation', 'Social Media Strategy', 'Community Management', 'Analytics', 'Paid Social', 'Brand Management'],
    salaryRange: '₹3-18 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '2-6 months',
    keyCompanies: ['Meta', 'Twitter', 'LinkedIn', 'TikTok', 'Snapchat', 'Pinterest'],
    futureOutlook: 'Essential role as social media drives business growth'
  },
  {
    id: 'it-support-specialist',
    title: 'IT Support Specialist',
    description: 'Provide technical support and troubleshooting for users and systems',
    skills: ['Hardware Troubleshooting', 'Software Installation', 'Network Support', 'Help Desk', 'Customer Service', 'Documentation'],
    salaryRange: '₹3-15 LPA',
    experienceLevel: 'Beginner',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '2-6 months',
    keyCompanies: ['Microsoft', 'Dell', 'HP', 'Lenovo', 'IBM', 'Accenture'],
    futureOutlook: 'Stable entry-level role with growth opportunities'
  },
  {
    id: 'seo-specialist',
    title: 'SEO Specialist',
    description: 'Optimize websites and content for search engine visibility and ranking',
    skills: ['SEO Tools', 'Keyword Research', 'On-page SEO', 'Link Building', 'Analytics', 'Content Optimization'],
    salaryRange: '₹3-20 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '3-8 months',
    keyCompanies: ['Google', 'Moz', 'SEMrush', 'Ahrefs', 'BrightEdge', 'Conductor'],
    futureOutlook: 'High demand as businesses compete for online visibility'
  },
  {
    id: 'conversion-rate-optimizer',
    title: 'Conversion Rate Optimizer',
    description: 'Optimize websites and funnels to increase conversion rates and revenue',
    skills: ['A/B Testing', 'Landing Page Optimization', 'Analytics', 'User Behavior Analysis', 'Testing Tools', 'Statistical Analysis'],
    salaryRange: '₹5-28 LPA',
    experienceLevel: 'Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '6-12 months',
    keyCompanies: ['Optimizely', 'VWO', 'Unbounce', 'HubSpot', 'Google', 'Adobe'],
    futureOutlook: 'High-value specialization with direct revenue impact'
  },
  {
    id: 'affiliate-marketer',
    title: 'Affiliate Marketing Manager',
    description: 'Develop and manage affiliate marketing programs and partnerships',
    skills: ['Affiliate Networks', 'Partnership Management', 'Performance Marketing', 'Analytics', 'Commission Management', 'Relationship Building'],
    salaryRange: '₹4-25 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '4-8 months',
    keyCompanies: ['Amazon Associates', 'ShareASale', 'CJ Affiliate', 'Impact', 'ClickBank', 'Rakuten'],
    futureOutlook: 'Growing with e-commerce and performance marketing trends'
  },
  {
    id: 'email-marketing-specialist',
    title: 'Email Marketing Specialist',
    description: 'Create and manage email marketing campaigns for customer engagement',
    skills: ['Email Platforms', 'Campaign Design', 'Automation', 'Segmentation', 'A/B Testing', 'Analytics'],
    salaryRange: '₹3-18 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '2-6 months',
    keyCompanies: ['Mailchimp', 'Constant Contact', 'Campaign Monitor', 'SendGrid', 'HubSpot', 'Klaviyo'],
    futureOutlook: 'Stable demand with high ROI driving continued investment'
  },
  {
    id: 'ppc-specialist',
    title: 'PPC/Paid Advertising Specialist',
    description: 'Manage pay-per-click advertising campaigns across digital platforms',
    skills: ['Google Ads', 'Facebook Ads', 'Campaign Management', 'Keyword Research', 'Bid Management', 'Analytics'],
    salaryRange: '₹4-22 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '3-8 months',
    keyCompanies: ['Google', 'Meta', 'Microsoft Advertising', 'Amazon Advertising', 'LinkedIn', 'Twitter'],
    futureOutlook: 'High demand as digital advertising continues to grow'
  },
  {
    id: 'copywriter',
    title: 'Digital Copywriter',
    description: 'Write persuasive copy for websites, ads, emails, and marketing materials',
    skills: ['Copywriting', 'Content Strategy', 'Persuasive Writing', 'Brand Voice', 'A/B Testing', 'SEO Writing'],
    salaryRange: '₹3-20 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '2-6 months',
    keyCompanies: ['Ogilvy', 'Wieden+Kennedy', 'BBDO', 'McCann', 'Leo Burnett', 'Saatchi & Saatchi'],
    futureOutlook: 'High demand for quality content across all digital channels'
  },
  {
    id: 'web-analyst',
    title: 'Web Analyst',
    description: 'Analyze website data and user behavior to drive optimization decisions',
    skills: ['Google Analytics', 'Data Analysis', 'Web Tracking', 'Reporting', 'Data Visualization', 'Statistical Analysis'],
    salaryRange: '₹5-25 LPA',
    experienceLevel: 'Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '6-10 months',
    keyCompanies: ['Google', 'Adobe', 'Salesforce', 'HubSpot', 'Mixpanel', 'Segment'],
    futureOutlook: 'Critical role as data-driven decision making becomes standard'
  },
  {
    id: 'ecommerce-manager',
    title: 'E-commerce Manager',
    description: 'Oversee online store operations, sales strategy, and customer experience',
    skills: ['E-commerce Platforms', 'Inventory Management', 'Customer Experience', 'Sales Analytics', 'Supply Chain', 'Digital Marketing'],
    salaryRange: '₹6-30 LPA',
    experienceLevel: 'Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '6-12 months',
    keyCompanies: ['Amazon', 'Flipkart', 'Shopify', 'BigCommerce', 'WooCommerce', 'Magento'],
    futureOutlook: 'Explosive growth with shift to online shopping'
  },
  {
    id: 'marketplace-specialist',
    title: 'Marketplace Specialist',
    description: 'Manage product listings and sales on e-commerce marketplaces',
    skills: ['Marketplace Management', 'Product Optimization', 'Inventory Planning', 'Advertising', 'Analytics', 'Customer Service'],
    salaryRange: '₹4-20 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '3-8 months',
    keyCompanies: ['Amazon', 'eBay', 'Etsy', 'Walmart', 'Target', 'Alibaba'],
    futureOutlook: 'Growing rapidly with marketplace economy expansion'
  },
  {
    id: 'dropshipping-specialist',
    title: 'Dropshipping Specialist',
    description: 'Build and manage dropshipping businesses and supply chain relationships',
    skills: ['Supplier Relations', 'Product Research', 'Order Management', 'Customer Service', 'Marketing', 'Analytics'],
    salaryRange: '₹3-25 LPA',
    experienceLevel: 'Beginner',
    growth: 'high',
    demand: 'medium',
    timeToTransition: '2-6 months',
    keyCompanies: ['Shopify', 'Oberlo', 'AliExpress', 'Spocket', 'SaleHoo', 'Wholesale2B'],
    futureOutlook: 'Popular business model but requires strong execution'
  },
  {
    id: 'amazon-fba-specialist',
    title: 'Amazon FBA Specialist',
    description: 'Manage Amazon FBA businesses including product sourcing and optimization',
    skills: ['Amazon FBA', 'Product Research', 'Listing Optimization', 'PPC Advertising', 'Inventory Management', 'Analytics'],
    salaryRange: '₹4-30 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '3-8 months',
    keyCompanies: ['Amazon', 'Jungle Scout', 'Helium 10', 'Viral Launch', 'Sellics', 'AMZScout'],
    futureOutlook: 'Strong growth as Amazon marketplace continues expanding'
  },
  {
    id: 'supply-chain-analyst',
    title: 'Supply Chain Analyst',
    description: 'Optimize supply chain operations through data analysis and process improvement',
    skills: ['Supply Chain Management', 'Data Analysis', 'Logistics', 'Inventory Optimization', 'Forecasting', 'Process Improvement'],
    salaryRange: '₹6-28 LPA',
    experienceLevel: 'Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '8-12 months',
    keyCompanies: ['Amazon', 'DHL', 'FedEx', 'UPS', 'Walmart', 'Target'],
    futureOutlook: 'Critical role in global supply chain optimization'
  },
  {
    id: 'logistics-coordinator',
    title: 'Logistics Coordinator',
    description: 'Coordinate transportation, warehousing, and distribution operations',
    skills: ['Logistics Management', 'Transportation Planning', 'Warehouse Operations', 'Vendor Management', 'Cost Optimization', 'Compliance'],
    salaryRange: '₹4-20 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '4-8 months',
    keyCompanies: ['DHL', 'FedEx', 'UPS', 'Blue Dart', 'Delhivery', 'Ecom Express'],
    futureOutlook: 'Strong demand with e-commerce and global trade growth'
  },
  {
    id: 'operations-manager',
    title: 'Operations Manager',
    description: 'Oversee daily business operations and process optimization',
    skills: ['Operations Management', 'Process Improvement', 'Team Leadership', 'Budget Management', 'Quality Control', 'Strategic Planning'],
    salaryRange: '₹8-35 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '8-15 months',
    keyCompanies: ['Amazon', 'Flipkart', 'Uber', 'Ola', 'Swiggy', 'Zomato'],
    futureOutlook: 'Essential role across all industries for operational efficiency'
  },
  {
    id: 'quality-assurance-manager',
    title: 'Quality Assurance Manager',
    description: 'Develop and implement quality control processes and standards',
    skills: ['Quality Management', 'Process Improvement', 'ISO Standards', 'Auditing', 'Risk Management', 'Team Leadership'],
    salaryRange: '₹7-30 LPA',
    experienceLevel: 'Intermediate to Advanced',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '8-15 months',
    keyCompanies: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Cognizant', 'Accenture'],
    futureOutlook: 'Consistent demand for quality assurance across industries'
  },
  {
    id: 'training-specialist',
    title: 'Corporate Training Specialist',
    description: 'Design and deliver training programs for employee skill development',
    skills: ['Instructional Design', 'Training Delivery', 'Learning Management Systems', 'Curriculum Development', 'Assessment', 'Presentation'],
    salaryRange: '₹5-25 LPA',
    experienceLevel: 'Intermediate',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '6-10 months',
    keyCompanies: ['Coursera', 'Udemy', 'LinkedIn Learning', 'Skillsoft', 'Pluralsight', 'edX'],
    futureOutlook: 'Growing importance of continuous learning and upskilling'
  },
  {
    id: 'hr-specialist',
    title: 'HR Specialist',
    description: 'Manage human resources functions including recruitment and employee relations',
    skills: ['Recruitment', 'Employee Relations', 'HR Policies', 'Performance Management', 'Compensation', 'Legal Compliance'],
    salaryRange: '₹4-22 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '4-8 months',
    keyCompanies: ['LinkedIn', 'Indeed', 'Workday', 'ADP', 'BambooHR', 'Zenefits'],
    futureOutlook: 'Stable demand with focus on employee experience'
  },
  {
    id: 'financial-analyst',
    title: 'Financial Analyst',
    description: 'Analyze financial data to support business decision-making and planning',
    skills: ['Financial Analysis', 'Excel/Spreadsheets', 'Financial Modeling', 'Budgeting', 'Forecasting', 'Data Visualization'],
    salaryRange: '₹5-25 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '6-12 months',
    keyCompanies: ['Goldman Sachs', 'JPMorgan', 'Morgan Stanley', 'BlackRock', 'Vanguard', 'Fidelity'],
    futureOutlook: 'Consistent demand across all industries for financial expertise'
  },
  {
    id: 'account-manager',
    title: 'Account Manager',
    description: 'Manage client relationships and drive account growth and retention',
    skills: ['Client Relationship Management', 'Sales', 'Account Planning', 'Communication', 'Negotiation', 'CRM Systems'],
    salaryRange: '₹5-28 LPA',
    experienceLevel: 'Beginner to Intermediate',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '4-8 months',
    keyCompanies: ['Salesforce', 'Oracle', 'Microsoft', 'IBM', 'Adobe', 'HubSpot'],
    futureOutlook: 'Essential role for customer retention and growth'
  },
  {
    id: 'business-development-manager',
    title: 'Business Development Manager',
    description: 'Identify and develop new business opportunities and partnerships',
    skills: ['Business Development', 'Partnership Management', 'Market Research', 'Strategic Planning', 'Negotiation', 'Networking'],
    salaryRange: '₹6-35 LPA',
    experienceLevel: 'Intermediate',
    growth: 'high',
    demand: 'high',
    timeToTransition: '6-12 months',
    keyCompanies: ['Google', 'Microsoft', 'Amazon', 'Salesforce', 'Oracle', 'Adobe'],
    futureOutlook: 'High demand for growth-focused professionals'
  },
  {
    id: 'customer-support-manager',
    title: 'Customer Support Manager',
    description: 'Lead customer support teams and optimize customer service operations',
    skills: ['Customer Service', 'Team Management', 'Support Systems', 'Process Improvement', 'Metrics Analysis', 'Training'],
    salaryRange: '₹5-25 LPA',
    experienceLevel: 'Intermediate',
    growth: 'medium',
    demand: 'high',
    timeToTransition: '6-10 months',
    keyCompanies: ['Zendesk', 'Freshworks', 'Intercom', 'Help Scout', 'Salesforce Service Cloud', 'ServiceNow'],
    futureOutlook: 'Critical role as customer experience becomes competitive advantage'
  }
];

const CareerPaths = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [growthFilter, setGrowthFilter] = useState("all");
  const [demandFilter, setDemandFilter] = useState("all");
  const [experienceFilter, setExperienceFilter] = useState("all");

  // Filter logic
  const filteredPaths = careerPaths.filter(path => {
    const matchesSearch = path.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         path.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         path.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesGrowth = growthFilter === "all" || path.growth === growthFilter;
    const matchesDemand = demandFilter === "all" || path.demand === demandFilter;
    const matchesExperience = experienceFilter === "all" || 
                             path.experienceLevel.toLowerCase().includes(experienceFilter.toLowerCase());

    return matchesSearch && matchesGrowth && matchesDemand && matchesExperience;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPaths.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPaths = filteredPaths.slice(startIndex, endIndex);

  const getGrowthColor = (growth: string) => {
    switch (growth) {
      case 'high':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'low':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-gradient">
            Career Paths
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Explore {careerPaths.length} career opportunities and understand the skills needed for your dream job
          </p>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search careers..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              
              <Select value={growthFilter} onValueChange={(value) => {
                setGrowthFilter(value);
                setCurrentPage(1);
              }}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Growth Rate" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all" className="text-white">All Growth</SelectItem>
                  <SelectItem value="high" className="text-white">High Growth</SelectItem>
                  <SelectItem value="medium" className="text-white">Medium Growth</SelectItem>
                  <SelectItem value="low" className="text-white">Low Growth</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={demandFilter} onValueChange={(value) => {
                setDemandFilter(value);
                setCurrentPage(1);
              }}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Market Demand" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all" className="text-white">All Demand</SelectItem>
                  <SelectItem value="high" className="text-white">High Demand</SelectItem>
                  <SelectItem value="medium" className="text-white">Medium Demand</SelectItem>
                  <SelectItem value="low" className="text-white">Low Demand</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={experienceFilter} onValueChange={(value) => {
                setExperienceFilter(value);
                setCurrentPage(1);
              }}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all" className="text-white">All Levels</SelectItem>
                  <SelectItem value="beginner" className="text-white">Beginner</SelectItem>
                  <SelectItem value="intermediate" className="text-white">Intermediate</SelectItem>
                  <SelectItem value="advanced" className="text-white">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="text-sm text-gray-400 mb-8">
              Showing {currentPaths.length} of {filteredPaths.length} career paths
            </div>
          </div>
        </div>

        {/* Career Paths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {currentPaths.map((path, index) => (
            <Card 
              key={path.id} 
              className="glass-card hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white text-xl mb-2">{path.title}</CardTitle>
                    <CardDescription className="text-gray-300 mb-3">
                      {path.description}
                    </CardDescription>
                  </div>
                  <Target className="h-6 w-6 text-purple-400 flex-shrink-0" />
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  <Badge className={getGrowthColor(path.growth)}>
                    {path.growth} growth
                  </Badge>
                  <Badge className={getGrowthColor(path.demand)}>
                    {path.demand} demand
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <DollarSign className="h-4 w-4" />
                  <span>{path.salaryRange}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Clock className="h-4 w-4" />
                  <span>Transition: {path.timeToTransition}</span>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {path.skills.slice(0, 4).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs border-purple-500/30 text-purple-300">
                        {skill}
                      </Badge>
                    ))}
                    {path.skills.length > 4 && (
                      <Badge variant="outline" className="text-xs border-gray-500/30 text-gray-400">
                        +{path.skills.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <Link to={`/career-paths/${path.id}`}>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
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
                    className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-white/10'} text-white border-white/20`}
                  />
                </PaginationItem>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = i + 1;
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        isActive={currentPage === page}
                        className={`cursor-pointer text-white border-white/20 ${
                          currentPage === page 
                            ? 'bg-purple-600 text-white' 
                            : 'hover:bg-white/10'
                        }`}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-white/10'} text-white border-white/20`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerPaths;
