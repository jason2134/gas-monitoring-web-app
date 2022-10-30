

Programming Languages used for this project:


  1. Front-end:HTML, CSS, JavaScript
    
  2. Back-end: Python / Tornado Web Framework, MongoDB

<h3 align="center">AI-Powered Real Time Gas Monitoring Dashboard</h3>

---

## 📝 Table of Contents

- [About](#about)
- [File Structure](#file_structure)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

A web application project developed by me and Dr.Ye Wenhao(Tyrion) when studying in HKUST. 

This web applciation is designed for gas sensor monitoring.  
This dashboard features the following in history and real time:
- Gases: Hydrogren / Formaldehyde / Toluene / Nitrogen Dioxide
- Temperature
- Humidity

### How does it look like:
![ezgif com-gif-maker](https://user-images.githubusercontent.com/70568099/134768464-5831683c-028d-4bf9-8017-691a58813f3e.gif)

### How does it work:
This full project is consisted of two parts: hardware layer and web application layer.


#### 📥 **Network** 
- [VPC - Virtual Private Cloud](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/VPC)
  - VPC
  - Internet Gateway
  - NAT Gateway
  - Public Subnet
  - Private Subnet - Application Layer
  - Private Subnet - Data Layer
  - Public and Private Route Table
- [SecurityGroup](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/SecurityGroup)
  - Only Security Group
- [SecurityGroupRule](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/SecurityGroupRule)
  - Security Group Rules for Security Groups
- ELB - Elastic Load Balancing
  - [ALB - Application Load Balancing](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/ELB/ALB)
    - Application load Balancer
    - Application Load Balancer Listener (HTTP/S)
  - [NLB - Network Load Balancing](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/ELB/NLB)
    - Network Load Balancer
    - Network Load Balancer Listener
  - [TargetGroup](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/ELB/TargetGroup)
    - Load Balancing Target Group
    - Load Balancing Target Group Attachment 
- [CloudFront](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/CloudFront)
  - CloudFront Distribution
  - Origin Access Identity (OAI)
- [WAF](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/WAF)
  - WAF ACL
#### 🖥️ **Compute**
- [EC2 - Elastic Compute Cloud](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/EC2)
  - EC2 instance
  - EBS Volumes
  - Elastic IP
  - IAM Instance Profile
  - Key Pair
- [ASG - Auto Scaling Group](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/ASG)
  - Launch Template
  - Auto Scaling Group
  - Key Pair
  - IAM Instance Profile
#### 💽 **Database**
- [RDS - Relational Database Server](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/RDS)
  - RDS Subnet Group
  - RDS Instance
- [ElastiCache - Redis Only](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/ElastiCache)
  - ElastiCache Subnet Group
  - ElastiCache Replcation Group

#### 💾 **Storage**
- [S3](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/S3)
  - Although still usable, [this version of S3 is deprecated](https://www.hashicorp.com/blog/terraform-aws-provider-4-0-refactors-s3-bucket-resource)
  - S3 Bucket
  - S3 Bucket Policy
  - S3 Logging Bucket
  - S3 Logging Bucket Policy
  - VPC Endpoint
  - Route Table Association

- [S3_Updates](https://github.com/jason2134/Terraform-Infrastructure-Module/tree/main/S3_Updates)
  - [Updated version of S3](https://www.hashicorp.com/blog/terraform-aws-provider-4-0-refactors-s3-bucket-resource)
  - S3 Bucket
  - S3 Bucket Configrations
  - S3 Object
  - S3 Policy
  - VPC Endpoint

#### 💡 **Serverless**
- SQS - Simple Queue Service
  - [SQSQueue](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/SQS/SQSQueue)
    - SQS Queue
  - [SQSQueuePolicy](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/SQS/SQSQueuePolicy)
    - SQS Queue Policy
    - IAM Policy Document
- [Lambda (Need more development)](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/Lambda/Function)
  - Function
    - Lambda Function
    - Lambda Permissions
#### 🔐 **Identity and Monitoring**
- IAM
  - [IAM-Assumable-Role](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/IAM/IAM-Assumable-Role)
    - IAM Role
    - IAM Policy Document (Trust Relationship)
    - IAM Role Policy Attachment
  - [IAM-Policy](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/IAM/IAM-Policy)
    - IAM Policy 
  - [IAM-User](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/IAM/IAM-User)
    - IAM User
    - IAM IAM Access Key
    - IAM User Policy Attachment
- CloudWatch
  - [LogGroup](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/CloudWatch/LogGroup)
    - CloudWatch Log Group
    - CloudWatch Log Stream
  - [LogMetricFilter](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/CloudWatch/LogMetricFilter)
    - CloudWatch Log Metric Filter
  - [LogSubscriptionFilter](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/CloudWatch/LogSubscriptionFilter)
    - CloudWatch Log Subscription Filter
  - [MetricAlarm](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/CloudWatch/MetricAlarm)
    - CloudWatch Metric Alarm
- [Parameter Store](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/ParameterStore)
  - SSM Paramter Store
- [Secrets Manager](https://github.com/reynoldnathaniel/Terraform-Infrastructure-Module/tree/main/SecretsManager)
  - Secrets Manager

## ✍️ Authors <a name = "authors"></a>

- [@Benjamin Ko](https://github.com/William-ywh)
- [@Jason Wong](https://github.com/jason2134)
## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- [Terraform AWS Docs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
