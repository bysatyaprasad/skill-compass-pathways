
import { Cloud, Database, Shield, Zap, Globe, Server } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const awsSkills: Skill[] = [
  {
    id: "aws-solutions-architect",
    name: "AWS Solutions Architect",
    category: "Emerging Technology",
    description: "Design and implement scalable, secure cloud solutions on Amazon Web Services platform.",
    status: "emerging",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Cloud,
    color: "from-orange-600 to-yellow-600",
    difficulty: "advanced",
    timeToLearn: "8-12 months",
    salary: "₹20-50 LPA"
  },
  {
    id: "aws-lambda",
    name: "AWS Lambda",
    category: "Emerging Technology",
    description: "Serverless computing service for running code without managing servers.",
    status: "emerging",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹12-30 LPA"
  },
  {
    id: "aws-ec2",
    name: "AWS EC2",
    category: "Emerging Technology",
    description: "Elastic Compute Cloud for scalable virtual servers in the AWS cloud.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Server,
    color: "from-blue-600 to-cyan-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "aws-rds",
    name: "AWS RDS",
    category: "Emerging Technology",
    description: "Relational Database Service for managed database solutions in the cloud.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-blue-600 to-indigo-600",
    difficulty: "intermediate",
    timeToLearn: "3-4 months",
    salary: "₹12-28 LPA"
  },
  {
    id: "aws-s3",
    name: "AWS S3",
    category: "Emerging Technology",
    description: "Simple Storage Service for scalable object storage in the cloud.",
    status: "stable",
    relevancePeriod: "Next 12+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-green-600 to-teal-600",
    difficulty: "beginner",
    timeToLearn: "2-3 months",
    salary: "₹8-20 LPA"
  },
  {
    id: "aws-cloudformation",
    name: "AWS CloudFormation",
    category: "Emerging Technology",
    description: "Infrastructure as code service for provisioning AWS resources using templates.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "medium",
    icon: Globe,
    color: "from-purple-600 to-blue-600",
    difficulty: "advanced",
    timeToLearn: "4-6 months",
    salary: "₹15-35 LPA"
  }
];
