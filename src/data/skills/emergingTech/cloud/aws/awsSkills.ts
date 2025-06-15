
import { Globe } from "lucide-react";
import { Skill } from "../../../../skillsData";

export const awsSkills: Skill[] = [
  {
    id: "aws",
    name: "Amazon Web Services (AWS)",
    category: "Emerging Technology",
    description: "Leading cloud computing platform offering a wide range of services for building scalable applications.",
    status: "stable",
    relevancePeriod: "Next 10+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-orange-600 to-yellow-600",
    difficulty: "intermediate",
    timeToLearn: "4-8 months",
    salary: "₹8-22 LPA"
  },
  {
    id: "aws-lambda",
    name: "AWS Lambda",
    category: "Emerging Technology",
    description: "Serverless computing service that runs code without provisioning or managing servers.",
    status: "stable",
    relevancePeriod: "Next 8+ years",
    demandLevel: "high",
    icon: Globe,
    color: "from-yellow-600 to-orange-600",
    difficulty: "intermediate",
    timeToLearn: "3-5 months",
    salary: "₹9-20 LPA"
  }
];
