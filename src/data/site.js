// Every fact on this site comes from John's CV and LinkedIn profile.
// Keep figures here in sync with the CV; do not add claims it cannot back up.

export const profile = {
  name: 'John Well Arellano',
  title: 'Data Engineer, Microsoft Fabric',
  tagline:
    'I design and build governed data platforms: from source ingestion and medallion architecture to dimensional models and Power BI that business teams trust.',
  location: 'Philippines, open to remote work with Australian and global teams',
  email: 'iamjhnwll@gmail.com',
  linkedin: 'https://www.linkedin.com/in/johnwellarellano',
  github: 'https://github.com/iamjhnwll-ux',
  certsUrl: 'https://www.linkedin.com/in/johnwellarellano/details/certifications/',
};

export const impact = [
  { value: '6+', label: 'years across data and operations' },
  { value: '28', label: 'releases in 10 weeks, DEV to QA to PROD' },
  { value: '95', label: '71 paginated reports, 18 Power BI reports and 6 semantic models built' },
  { value: '92%', label: 'less time: a 4-hour process cut to under 20 minutes' },
  { value: '$25K', label: 'saved by replacing a vendor reporting module' },
  { value: '30,000+', label: 'records migrated with zero data loss' },
];

export const services = [
  {
    title: 'Data Architecture',
    icon: 'layers',
    points: [
      'Medallion design: source-specific Bronze and Silver, unified Gold',
      'Ingestion patterns across many source systems',
      'DEV, QA and PROD environments with clear promotion paths',
    ],
  },
  {
    title: 'Data Engineering',
    icon: 'pipeline',
    points: [
      'PySpark, Spark SQL and T-SQL on Fabric; Lakehouse ingestion on Databricks',
      'REST API, SharePoint, Excel and CRM ingestion with incremental loads',
      'CI/CD with Git, GitHub Actions and fabric-cicd',
    ],
  },
  {
    title: 'Analytics Engineering',
    icon: 'model',
    points: [
      'Conceptual, logical and physical data modelling',
      'Star schemas, conformed dimensions and slowly changing dimensions',
      'Semantic-model contract tests and data quality checks',
    ],
  },
  {
    title: 'BI Development',
    icon: 'chart',
    points: [
      'Direct Lake, DirectQuery and composite Power BI models with DAX',
      'Paginated (RDL) reports and scheduled delivery',
      'Dynamic row-level security and governed app distribution',
    ],
  },
];

export const skills = [
  {
    group: 'Cloud and platforms',
    items: ['Microsoft Fabric', 'OneLake', 'Lakehouse', 'Fabric Warehouse', 'Microsoft Azure', 'Azure Data Lake Storage', 'Databricks', 'Delta Lake'],
  },
  {
    group: 'Data engineering',
    items: ['Python', 'PySpark', 'Pandas', 'SQL', 'Spark SQL', 'T-SQL', 'Data Factory pipelines', 'Fabric notebooks', 'REST APIs', 'Incremental loads', 'ETL / ELT'],
  },
  {
    group: 'Modelling and BI',
    items: ['Dimensional modelling', 'Star schema', 'Conformed dimensions', 'Slowly changing dimensions', 'dbt', 'Direct Lake', 'DAX', 'Power BI', 'Paginated reports (RDL)', 'Power Query (M)', 'DirectQuery', 'Composite models'],
  },
  {
    group: 'DevOps and quality',
    items: ['Git', 'GitHub', 'GitHub Actions', 'fabric-cicd', 'Version control', 'Release management', 'Code review', 'Contract tests', 'Data quality checks', 'Monitoring and alerting'],
  },
  {
    group: 'Microsoft 365 and automation',
    items: ['SharePoint', 'Power Automate', 'Power Apps', 'Microsoft Lists', 'Excel', 'VBA'],
  },
  {
    group: 'Governance and security',
    items: ['Row-level security (RLS)', 'Role-based access control (RBAC)', 'Workspace governance', 'GDPR and ISO 27001 support', 'Documentation and runbooks'],
  },
  {
    group: 'AI-assisted engineering',
    items: ['Claude Code', 'Fabric and Power BI MCP servers', 'AI-agent quality gates'],
  },
];

export const experience = [
  {
    role: 'Data Engineer',
    org: 'HammerJack',
    detail: 'Client: MorcoFresh (retail, Australia)',
    period: 'Jun 2026 to present',
    text: 'Lead architecture and ingestion-pattern design for Project Harvest, a seven-source Microsoft Fabric programme across DEV, QA and PROD.',
  },
  {
    role: 'Data Management and Application Analyst (Contract)',
    org: 'BMG Outsourcing',
    detail: 'Clark City, Philippines',
    period: 'Oct 2025 to Jun 2026',
    text: 'Built a unified Databricks Lakehouse ingestion layer, led a 30,000+ record migration and replaced a vendor CRM reporting module with Power BI.',
  },
  {
    role: 'Data Analyst (Contract)',
    org: 'Emapta Global',
    detail: 'Remote',
    period: 'Jul 2025 to Oct 2025',
    text: 'Built a Microsoft Fabric client-notification pipeline and Fabric dashboards from Excel and ERP logistics and energy data.',
  },
  {
    role: 'Workforce and Operations Analyst (Interim)',
    org: 'Axos Business Center',
    detail: 'Digital bank, Clark City, Philippines',
    period: 'Aug 2024 to Jul 2025',
    text: 'Built a compliance data model and rules engine, a real-time KPI dashboard and automated reporting with Power Query, VBA and Python.',
  },
  {
    role: 'Data Consultant',
    org: 'Self-employed',
    detail: 'Clark City, Philippines',
    period: 'Dec 2022 to May 2024',
    text: 'Designed Power Apps data-entry forms, automated Excel trackers and dashboards for small business clients.',
  },
  {
    role: 'Real-Time Analyst',
    org: 'Concentrix (Dell Computers)',
    detail: 'Clark City, Philippines',
    period: 'Jan 2020 to Nov 2022',
    text: 'Monitored queue and adherence data for 50 to 100 agents and adjusted intraday forecasts to protect service levels.',
  },
];

export const certifications = [
  { name: 'Microsoft Data Architecture for Modern Data Stacks Specialization', issuer: 'Microsoft', date: 'Mar 2026' },
  { name: 'Data Modeling in Power BI', issuer: 'Microsoft', date: '' },
  { name: 'SQL Analytics and BI on Databricks', issuer: 'Databricks', date: 'Apr 2026' },
  { name: 'Databricks Fundamentals Accreditation', issuer: 'Databricks Academy', date: '' },
  { name: 'Google Advanced Data Analytics Professional Certificate', issuer: 'Google', date: '' },
  { name: 'Introduction to Claude Cowork', issuer: 'Anthropic', date: 'May 2026' },
  { name: 'Google Prompting Essentials', issuer: 'Google', date: '' },
];

export const education = {
  degree: 'Bachelor of Public Administration, Cum Laude',
  school: 'Tarlac State University',
  period: '2018 to 2022',
};

export const offers = [
  { title: 'Microsoft Fabric setup', text: 'Lakehouse, Warehouse and pipelines designed around your sources, with DEV, QA and PROD environments.' },
  { title: 'Power BI reporting', text: 'Dimensional models, DAX and row-level security, so each team sees the data meant for them.' },
  { title: 'Automation of manual reporting', text: 'Excel, SharePoint and API data brought together with Power Query, Power Automate and Python.' },
  { title: 'Data migration', text: 'Profiling, source-to-target mapping, cutover planning and integrity checks.' },
];
