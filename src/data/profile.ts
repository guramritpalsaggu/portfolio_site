export const hero = {
  name: 'Guramritpal Singh Saggu',
  title: 'Senior Software Engineer',
  summary: [
    'Senior Software Engineer with 5+ years experience designing and scaling data engineering and ML platforms, delivering reliable, production-grade systems that accelerate business value.',
    'Proven leader in platform development and system design, specializing in building and optimizing end-to-end data pipelines and ML solutions that drive organizational efficiency, compliance, and innovation.',
  ],
}

export const contact = {
  location: 'Bangalore, India',
  email: 'guramritpalsaggu@gmail.com',
  phone: '+91 99885 49219',
  linkedin: 'https://www.linkedin.com/in/guramritpal',
  github: 'https://github.com/guramritpal',
}

export const highlights = [
  { label: 'Years of Impact', value: '5+' },
  { label: 'Models Launched', value: '15+' },
  { label: 'Feature Refresh', value: '70% faster' },
  { label: 'Award', value: "Most Valuable Person (AMJ'22, JFM'23)" },
]

export const experiences = [
  {
    company: 'Junglee Games',
    role: 'Data Engineer III',
    period: 'July 2025 – Present',
    location: 'Bangalore, India',
    bullets: [
      'Lead GenAI and ML platform initiatives, building AI agents and enhancing Databricks capabilities to accelerate model development and operational efficiency.',
      'Architected and deployed a dbt-powered in-house Feature Store enabling cross-team self-service, reducing feature development turnaround by 50% and cutting feature refresh runtime by 70%, accelerating model iteration and deployment cycles.',
      'Developed AI agents leveraging Genie, LangChain, MLflow and Mosaic AI, automating workflows for finance and risk teams; cut manual analyst time by 45 minutes per day, boosting productivity by 25%.',
    ],
    tags: ['GenAI', 'AI Agents', 'Databricks', 'dbt', 'LangChain', 'MLflow', 'Mosaic AI'],
  },
  {
    company: 'Junglee Games',
    role: 'Data Engineer II',
    period: 'Nov 2023 – June 2025',
    location: 'Bangalore, India',
    bullets: [
      'Designed and implemented end-to-end Data Discovery and Lineage capabilities using DataHub, deploying LLAMA-based models that auto-generate table and column descriptions, improved metadata quality and reduced onboarding time by 40% across data teams.',
      'Built a proprietary Kafka Connect Single Message Transform (SMT) for client-side field-level PII encryption and decryption, ensuring compliance for data pipelines.',
      'Managed Starburst Data Warehouse, optimizing query execution & resource allocation to improve query speed by 20% & reduce operational costs by 14%, while managing scalable EKS infrastructure with Helm.',
      'Configured Databricks Lakehouse Monitoring framework with drift detection and anomaly alerts, enabling proactive data quality management and reducing data incident resolution time.',
      'Developed PySpark-based ETL pipelines on Databricks for key business KPIs, integrated DQ checks, migrated legacy alerts, & created unified cross-selling features to reduce acquisition costs.',
    ],
    tags: ['DataHub', 'Kafka', 'Starburst', 'Databricks', 'EKS', 'Helm', 'PySpark'],
  },
  {
    company: 'Slice',
    role: 'Software Engineer II',
    period: 'May 2023 – Nov 2023',
    location: 'Bangalore, India',
    bullets: [
      'Designed a scalable ML platform on EKS leveraging EMR, Airflow, Delta Lake, MLflow, and Seldon, allowing streamlined end-to-end data workflows and model management.',
      'Created a real-time feature store integrating 100+ features across Confluent Kafka, KSQL, and MySQL, achieving sub-second event refresh and supporting low-latency streaming applications.',
      'Optimized performance of numerous tables by improving partitioning, storage strategies, and re-design of heavy queries that led to 10x reduction in costs.',
    ],
    tags: ['EKS', 'EMR', 'Airflow', 'Delta Lake', 'MLflow', 'Seldon', 'Kafka', 'KSQL'],
  },
  {
    company: 'Slice',
    role: 'Software Engineer I',
    period: 'Jan 2022 – April 2023',
    location: 'Bangalore, India',
    bullets: [
      'Established ML platform on Databricks, incorporating feature store, model registry, serving, and monitoring, integrated 15+ models, shortening model operationalization time from 5 days to under 2 days.',
      'Implemented scalable ETL pipelines by migrating batch workflows to Spark Streaming, significantly improving real-time data processing reliability and latency.',
    ],
    tags: ['Databricks', 'ML Platform', 'Feature Store', 'Spark Streaming'],
  },
  {
    company: 'Goldman Sachs',
    role: 'Summer Analyst',
    period: 'Jun 2021 – Aug 2021',
    location: 'Bangalore, India',
    bullets: [
      'Enhanced intraday pre-borrow feeds for the Global Markets division and decommissioned legacy stock-loan containers.',
    ],
    tags: ['Capital Markets'],
  },
  {
    company: 'Rakuten',
    role: 'Technical Intern',
    period: 'Feb 2021 – May 2021',
    location: 'Bangalore, India',
    bullets: [
      'Built governance-ready data pipelines using Airflow, Amundsen, MinIO, Trino, YugabyteDB, and Kubernetes.',
    ],
    tags: ['Data Governance'],
  },
  {
    company: 'Hackerearth',
    role: 'Subject Matter Expert',
    period: 'Mar 2020 – Jun 2022',
    location: 'Remote',
    bullets: [
      'Crafted ML and data science challenges, solutions, and reviews for large-scale hiring assessments.',
    ],
    tags: ['ML Content'],
  },
  {
    company: 'CoulombAI',
    role: 'Software Engineer Intern',
    period: 'Jun 2020 – Mar 2021',
    location: 'Remote',
    bullets: [
      'Developed real-time EV state-of-charge analytics and ingestion APIs with Flask, PyODBC, and MSSQL on AWS.',
    ],
    tags: ['EV Analytics'],
  },
]

export const education = {
  school: 'Indian Institute of Information Technology & Management, Gwalior',
  program: 'Integrated B.Tech + M.Tech in Information Technology',
  period: 'Jul 2017 – Jun 2022',
  cgpa: 'CGPA: 8.64 / 10',
}

export const publications = [
  {
    title: 'PII-SMT: Client-Side Field-Level Encryption/Decryption for Apache Kafka',
    outlet: 'Medium Blog, 2025',
    link: 'https://medium.com',
  },
  {
    title: 'Unlocking Data Potential with Starburst: Efficiency, Speed & Cost-Effectiveness',
    outlet: 'Success Story, 2024',
    link: 'https://starburst.io',
  },
  {
    title: 'Hybrid Deep Convolutional Neural Network Model for Diagnosis of Pneumonia',
    outlet: 'Research Paper, 2024',
    link: 'https://scholar.google.com',
  },
  {
    title: 'DepressNet: Multimodal Hierarchical Attention Model for Depression Detection',
    outlet: 'Research Paper, 2022',
    link: 'https://scholar.google.com',
  },
  {
    title: 'Efficient Classification for Age and Gender of Unconstrained Face Images',
    outlet: 'Research Paper, 2021',
    link: 'https://scholar.google.com',
  },
]

export const projects = [
  {
    name: 'HR Policy Automation Bot',
    context: 'Self-Learning',
    summary:
      'Slack-based HR copilot automating policy queries with AWS Bedrock Agent, Anthropic Claude 3 Haiku, and OpenSearch Serverless vector retrieval.',
  },
  {
    name: 'Explainable & Interactive ML',
    context: 'M.Tech Thesis Project',
    summary:
      'Framework for explainable AI with feedback-driven monitoring pipelines that improve trust for diverse user segments.',
  },
  {
    name: 'Detection of Depression & State of Mind',
    context: 'B.Tech Thesis Project',
    summary:
      'Multimodal BLSTM RNN models for emotional state detection, achieving RMSE 5.96 and CCS scores of 0.531 (valence) / 0.486 (arousal).',
  },
]

export const skills = [
  {
    label: 'Programming',
    items: ['Python', 'C++', 'C', 'SQL', 'JavaScript'],
  },
  {
    label: 'Data & MLOps',
    items: ['Databricks', 'Delta Lake', 'dbt', 'Spark', 'Kafka', 'Airflow', 'MLflow', 'Feature Store', 'DataHub', 'Data Modeling'],
  },
  {
    label: 'GenAI Stack',
    items: ['LangChain', 'RAG', 'Vector DBs', 'AWS Bedrock', 'Mosaic AI', 'MCP'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes'],
  },
]

export const interests = ['Travelling', 'Workout', 'Cycling', 'Running', 'Badminton', 'Pickleball']


