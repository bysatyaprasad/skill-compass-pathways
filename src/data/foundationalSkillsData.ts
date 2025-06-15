
import { BookOpen, MessageCircle, Lightbulb, Heart, Calculator, Compass } from "lucide-react";

export const foundationalSkills = [
  {
    name: "Digital Literacy & Computer Skills",
    icon: BookOpen,
    description: "Master essential computer operations, internet navigation, and digital communication tools",
    why: "Essential for any modern career - every job now requires basic digital competency",
    action: "Start with basic computer operations, learn email etiquette, and practice using office software",
    timeToMaster: "2-4 weeks",
    practicalSteps: [
      "Set up professional email accounts on Gmail/Outlook",
      "Learn keyboard shortcuts (Ctrl+C, Ctrl+V, Alt+Tab)",
      "Practice file organization and cloud storage (Google Drive/Dropbox)",
      "Master basic Excel/Google Sheets formulas (SUM, AVERAGE)",
      "Learn to troubleshoot common computer issues"
    ],
    dailyPractice: "30 minutes of typing practice + 1 new software feature daily",
    resources: [
      { name: "TypingClub", type: "Free Practice", url: "typingclub.com" },
      { name: "Google Digital Garage", type: "Free Course", url: "grow.google" },
      { name: "Microsoft Learn", type: "Official Training", url: "learn.microsoft.com" },
      { name: "Khan Academy Computer Programming", type: "Interactive", url: "khanacademy.org" }
    ],
    realWorldApplication: "Create a digital portfolio, automate personal budgets, manage digital documents professionally"
  },
  {
    name: "Advanced Communication",
    icon: MessageCircle,
    description: "Excel in verbal, written, and digital communication across diverse audiences",
    why: "Critical for collaboration, leadership, and career advancement in any field",
    action: "Practice public speaking, write regularly, and learn to adapt your communication style",
    timeToMaster: "Ongoing development",
    practicalSteps: [
      "Record yourself speaking for 2 minutes daily",
      "Write one professional email template per week",
      "Practice active listening with family/friends",
      "Join local Toastmasters or debate club",
      "Learn to give constructive feedback"
    ],
    dailyPractice: "Read 15 minutes + write 200 words + practice one conversation skill",
    resources: [
      { name: "Toastmasters International", type: "In-person Practice", url: "toastmasters.org" },
      { name: "Coursera Communication Courses", type: "University Level", url: "coursera.org" },
      { name: "Grammarly", type: "Writing Assistant", url: "grammarly.com" },
      { name: "TED Talks on Communication", type: "Inspiration", url: "ted.com" }
    ],
    realWorldApplication: "Lead team meetings, write compelling proposals, negotiate salaries, resolve conflicts"
  },
  {
    name: "Critical Thinking & Problem Solving",
    icon: Lightbulb,
    description: "Analyze complex problems, evaluate solutions, and make informed decisions",
    why: "Valuable in every profession and essential for navigating life's challenges",
    action: "Question assumptions, practice logical reasoning, and learn structured problem-solving methods",
    timeToMaster: "6 months to develop, lifetime to perfect",
    practicalSteps: [
      "Use the '5 Whys' technique for daily problems",
      "Practice SWOT analysis on personal decisions",
      "Challenge one assumption you hold each week",
      "Learn to identify logical fallacies in arguments",
      "Solve puzzles and brain teasers regularly"
    ],
    dailyPractice: "Solve 1 logic puzzle + question 3 assumptions + analyze 1 news article",
    resources: [
      { name: "Brilliant.org", type: "Interactive Puzzles", url: "brilliant.org" },
      { name: "Critical Thinking Course (edX)", type: "University Level", url: "edx.org" },
      { name: "Lumosity", type: "Brain Training", url: "lumosity.com" },
      { name: "Philosophy Basics", type: "Books/Podcasts", url: "various" }
    ],
    realWorldApplication: "Make better investment decisions, solve workplace conflicts, evaluate job opportunities"
  },
  {
    name: "Emotional Intelligence",
    icon: Heart,
    description: "Understand and manage emotions effectively in personal and professional settings",
    why: "Essential for teamwork, leadership, and building meaningful relationships",
    action: "Practice self-awareness, empathy, and learn conflict resolution techniques",
    timeToMaster: "3-6 months for basics, ongoing for mastery",
    practicalSteps: [
      "Keep a daily emotion journal for 2 weeks",
      "Practice naming emotions specifically (not just 'good/bad')",
      "Learn to pause before reacting in stressful situations",
      "Practice perspective-taking in disagreements",
      "Develop empathy by asking 'How might they feel?'"
    ],
    dailyPractice: "5-minute mindfulness + reflect on 1 interaction + practice gratitude",
    resources: [
      { name: "Headspace", type: "Meditation App", url: "headspace.com" },
      { name: "EQ 2.0 Book", type: "Assessment + Training", url: "bookstores" },
      { name: "Mindfulness Apps", type: "Daily Practice", url: "various" },
      { name: "Psychology Today", type: "Articles/Insights", url: "psychologytoday.com" }
    ],
    realWorldApplication: "Handle difficult customers, lead diverse teams, maintain work-life balance, build networks"
  },
  {
    name: "Financial Literacy & Management",
    icon: Calculator,
    description: "Understand personal finance, investments, and economic principles",
    why: "Crucial for personal financial security and making informed life decisions",
    action: "Learn budgeting, understand investment basics, and track your expenses",
    timeToMaster: "3-6 months for fundamentals",
    practicalSteps: [
      "Track every expense for one month using an app",
      "Create a 50/30/20 budget (needs/wants/savings)",
      "Learn compound interest with real calculations",
      "Research and open a high-yield savings account",
      "Understand the difference between good and bad debt"
    ],
    dailyPractice: "Check account balances + log expenses + read 1 financial article",
    resources: [
      { name: "Mint/YNAB", type: "Budgeting Apps", url: "mint.com" },
      { name: "Khan Academy Finance", type: "Free Education", url: "khanacademy.org" },
      { name: "The Simple Path to Wealth", type: "Book", url: "bookstores" },
      { name: "Investopedia", type: "Financial Dictionary", url: "investopedia.com" }
    ],
    realWorldApplication: "Buy a house, plan retirement, start a business, negotiate salaries, avoid debt traps"
  },
  {
    name: "Adaptability & Resilience",
    icon: Compass,
    description: "Navigate change, bounce back from setbacks, and thrive in uncertainty",
    why: "Essential in our rapidly changing world and crucial for career longevity",
    action: "Embrace new challenges, learn from failures, and develop a growth mindset",
    timeToMaster: "Ongoing development throughout life",
    practicalSteps: [
      "Try one new thing outside your comfort zone weekly",
      "Reframe failures as learning opportunities",
      "Build a support network for tough times",
      "Practice stress management techniques",
      "Develop multiple income streams or skills"
    ],
    dailyPractice: "Reflect on lessons learned + practice stress relief + embrace one small change",
    resources: [
      { name: "Mindset by Carol Dweck", type: "Foundational Book", url: "bookstores" },
      { name: "Resilience Training Apps", type: "Skill Building", url: "various" },
      { name: "Change Management Courses", type: "Professional Development", url: "coursera.org" },
      { name: "Stoicism Resources", type: "Philosophy/Practice", url: "various" }
    ],
    realWorldApplication: "Career transitions, economic downturns, technology changes, personal setbacks"
  }
];

export const weeklyActionPlan = [
  {
    week: "Week 1-2: Assessment & Foundation",
    focus: "Digital Literacy",
    actions: [
      "Take typing speed test and improve to 40+ WPM",
      "Set up professional email and LinkedIn profile",
      "Learn 10 essential keyboard shortcuts",
      "Organize computer files and set up cloud storage"
    ],
    outcome: "Baseline digital competency established"
  },
  {
    week: "Week 3-4: Communication Kickstart",
    focus: "Communication Skills",
    actions: [
      "Record daily 2-minute speeches on various topics",
      "Write one professional email daily",
      "Practice active listening in all conversations",
      "Join one online discussion group in your field"
    ],
    outcome: "Confidence in basic professional communication"
  },
  {
    week: "Week 5-8: Thinking & Analysis",
    focus: "Critical Thinking",
    actions: [
      "Apply '5 Whys' to solve one problem daily",
      "Analyze news articles for bias and logic",
      "Practice decision-making frameworks",
      "Solve logic puzzles and brain teasers"
    ],
    outcome: "Structured approach to problem-solving"
  },
  {
    week: "Week 9-12: Emotional & Financial Intelligence",
    focus: "EQ & Financial Literacy",
    actions: [
      "Track emotions and responses daily",
      "Create and follow a personal budget",
      "Learn investment basics and open accounts",
      "Practice empathy and conflict resolution"
    ],
    outcome: "Personal and financial self-awareness"
  }
];

export const learningPhases = [
  {
    phase: "Foundation Phase (Months 1-3)",
    focus: "Digital Literacy + Communication",
    goals: [
      "Master basic computer skills and digital tools",
      "Develop clear written and verbal communication",
      "Build confidence in digital environments",
      "Establish daily learning habits"
    ],
    timeline: "30-60 minutes daily practice",
    milestones: [
      "Type 50+ WPM accurately",
      "Write professional emails confidently",
      "Give 5-minute presentations without notes",
      "Navigate software and troubleshoot issues"
    ]
  },
  {
    phase: "Development Phase (Months 4-6)",
    focus: "Critical Thinking + Emotional Intelligence",
    goals: [
      "Learn structured problem-solving approaches",
      "Develop self-awareness and empathy",
      "Practice decision-making frameworks",
      "Build stress management skills"
    ],
    timeline: "1-2 hours daily across multiple skills",
    milestones: [
      "Solve complex problems systematically",
      "Manage emotions under pressure",
      "Lead difficult conversations",
      "Make data-driven decisions"
    ]
  },
  {
    phase: "Integration Phase (Months 7-12)",
    focus: "Financial Literacy + Adaptability",
    goals: [
      "Master personal finance fundamentals",
      "Develop long-term financial planning",
      "Build resilience and adaptability",
      "Apply all skills in real-world scenarios"
    ],
    timeline: "Ongoing practice and application",
    milestones: [
      "Maintain emergency fund and investments",
      "Navigate major life changes confidently",
      "Mentor others in foundational skills",
      "Continuously adapt and learn"
    ]
  }
];
