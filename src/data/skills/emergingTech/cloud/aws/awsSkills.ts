
import { Cloud, Database, Shield, Zap } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const awsSkills: Skill[] = [
  {
    id: "aws-ec2",
    name: "Amazon EC2",
    category: "Emerging Technology",
    description: "Elastic Compute Cloud service for scalable virtual server instances in the AWS cloud.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Cloud,
    color: "from-orange-600 to-yellow-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "aws-s3",
    name: "Amazon S3",
    category: "Emerging Technology",
    description: "Simple Storage Service for object storage with industry-leading scalability and durability.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Database,
    color: "from-green-600 to-teal-600",
    difficulty: "beginner",
    timeToLearn: "1-3 months",
    salary: "₹6-18 LPA"
  },
  {
    id: "aws-lambda",
    name: "AWS Lambda",
    category: "Emerging Technology",
    description: "Serverless computing service that runs code without provisioning or managing servers.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Zap,
    color: "from-purple-600 to-blue-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹10-25 LPA"
  },
  {
    id: "aws-rds",
    name: "Amazon RDS",
    category: "Emerging Technology",
    description: "Relational Database Service for managed database instances in the cloud.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "medium",
    icon: Database,
    color: "from-blue-600 to-purple-600",
    difficulty: "intermediate",
    timeToLearn: "2-4 months",
    salary: "₹8-20 LPA"
  }
];
