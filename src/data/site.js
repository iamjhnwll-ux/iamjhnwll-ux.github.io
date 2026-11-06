// Every fact on this site comes from John's CV and LinkedIn profile.
// Keep figures here in sync with the CV; do not add claims it cannot back up.

export const profile = {
  name: 'John Well Arellano',
  title: 'Senior Data Engineer and Analytics Engineer',
  tagline:
    'I design and build governed data platforms: from source ingestion and medallion architecture to dimensional models and Power BI reporting.',
  location: 'Clark City, Philippines. Open to remote roles; full overlap with AEST business hours',
  email: 'iamjhnwll@gmail.com',
  linkedin: 'https://www.linkedin.com/in/johnwellarellano',
  github: 'https://github.com/iamjhnwll-ux',
  certsUrl: 'https://www.linkedin.com/in/johnwellarellano/details/certifications/',
};

export const availability = ['Part-time', 'Contract', 'Direct hire', 'Remote', 'Philippines (UTC+8)'];

// status: Delivered = reported as achieved on the CV; Estimate = business-case estimate; Projected = programme projection.
export const impact = [
  { value: 'AU$2M', label: 'projected ROI for the Project Harvest programme', status: 'Projected' },
  { value: 'AU$150K', label: 'projected annual savings from the same programme', status: 'Projected' },
  { value: 'US$25K', label: 'saved by replacing a vendor CRM reporting module with in-house Power BI', status: 'Delivered' },
  { value: '92%', label: 'less time: a recurring 4-hour process cut to under 20 minutes', status: 'Delivered' },
  { value: '2.5 h/wk', label: 'saved in report schedule administration', status: 'Estimate' },
  { value: '30,000+', label: 'investment records migrated with zero data loss', status: 'Delivered' },
];

// Counts grow as new work ships. Update the date when the figures are refreshed from the repository.
export const countsAsOf = "Nov 2026";

export const scale = [
  { value: '7', label: 'source systems in one platform' },
  { value: '3', label: 'environments: DEV, QA, PROD' },
  { value: '39', label: "of the team's 91 releases in 15 weeks (Jul to Nov 2026)" },
  { value: '95', label: 'governed reports so far: 76 paginated and 19 Power BI, plus 6 semantic models' },
  { value: '6+', label: 'years in data and operations' },
];

export const ownership = [
  'Lead data architecture for a seven-source platform; set ingestion and modelling patterns',
  'Source-specific Bronze and Silver layers, one unified Gold Warehouse',
  'Facts and conformed dimensions in PySpark, Spark SQL and T-SQL',
  'Direct Lake semantic models, DAX, Power BI and paginated reports',
  'Dynamic row-level security and governed app distribution',
  'CI/CD with GitHub Actions and fabric-cicd, with PROD approval control',
  'Contract tests, refresh runbooks and documentation for handover',
  '12 pytest contract-test suites that check Gold SQL logic, models, reports and deployment settings before release',
  'Metadata catalogue and unified report scheduler automation',
  'Requirements gathered directly with business stakeholders; mentoring through code review',
];

export const modelling = {
  pillars: [
    {
      title: 'Conceptual to physical',
      text: 'Conceptual, logical and physical data models, so the business definition, the design and the build all line up.',
    },
    {
      title: 'Dimensional design',
      text: 'Conformed dimensions and slowly changing dimensions, plus star and snowflake schemas with DAX for ROI, valuation trends and time intelligence in a real estate investment model.',
    },
    {
      title: 'Shared business definitions',
      text: 'A unified Gold layer of facts and conformed dimensions, built in PySpark, Spark SQL and T-SQL, and served through Direct Lake semantic models.',
    },
  ],
  domains: ['Inventory valuation', 'Stock-take variance', 'Bulk picking', 'Product costing', 'Operations benchmarks', 'Customer sales', 'Support-ticket queues'],
};

export const coreStack = [
  { name: 'Microsoft Fabric', note: 'OneLake, Lakehouse, Warehouse, pipelines, notebooks', mark: 'Fa', color: '#2563eb' },
  { name: 'Power BI', note: 'Semantic models, DAX, RLS, paginated reports', mark: 'PB', color: '#a16207' },
  { name: 'PySpark', note: 'Transformations and Gold-layer modelling', mark: 'Py', color: '#c2410c' },
  { name: 'SQL and T-SQL', note: 'Spark SQL and Warehouse modelling', mark: 'SQL', color: '#0f766e' },
  { name: 'dbt', note: 'Analytics engineering (foundational)', mark: 'dbt', color: '#9a3412' },
  { name: 'Microsoft Azure', note: 'Data Factory, Key Vault, Data Lake Storage', mark: 'Az', color: '#0369a1' },
  { name: 'Git and GitHub Actions', note: 'Version control and CI/CD with fabric-cicd', mark: 'Gh', color: '#1f2937' },
  { name: 'Databricks', note: 'Lakehouse ingestion and Delta Lake', mark: 'Db', color: '#dc2626' },
  { name: 'Power Automate', note: 'ETL/ELT automation', mark: 'PA', color: '#7c3aed' },
  { name: 'SharePoint and Excel', note: 'Source ingestion, Power Query and VBA automation', mark: 'Xl', color: '#15803d' },
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
    items: ['Microsoft Fabric', 'OneLake', 'Lakehouse', 'Fabric Warehouse', 'Microsoft Azure', 'Azure Data Factory', 'Azure Key Vault', 'Azure Data Lake Storage', 'Databricks', 'Delta Lake'],
  },
  {
    group: 'Data engineering',
    items: ['Python', 'PySpark', 'Pandas', 'SQL', 'Spark SQL', 'T-SQL', 'Data Factory pipelines', 'Dataflows Gen2', 'Fabric notebooks', 'Orchestration', 'REST APIs', 'Incremental loads and watermarks', 'ETL / ELT'],
  },
  {
    group: 'Modelling and BI',
    items: ['Dimensional modelling (Kimball)', 'Star schema', 'Conformed dimensions', 'Slowly changing dimensions', 'Semantic layer', 'dbt (foundational)', 'Direct Lake', 'DAX', 'Power BI', 'Power BI apps', 'Paginated reports (RDL)', 'Power Query (M)', 'DirectQuery', 'Composite models'],
  },
  {
    group: 'DevOps and quality',
    items: ['Git', 'GitHub', 'GitHub Actions', 'fabric-cicd', 'Version control', 'Release management', 'Code review', 'Contract tests (pytest)', 'Data quality checks', 'MSAL and Power BI REST APIs', 'Monitoring and alerting'],
  },
  {
    group: 'Ways of working',
    items: ['Agile and Scrum', 'Stakeholder requirements gathering', 'Mentoring and code review'],
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
    items: ['Claude Code', 'Custom agents and skills', 'Fabric and Power BI MCP servers', 'AI-agent quality gates'],
  },
];

export const experience = [
  {
    role: 'Data Engineer',
    org: 'HammerJack',
    detail: 'Client: MorcoFresh (retail, Australia)',
    period: 'Jun 2026 to present',
    text: 'Lead data architecture for Project Harvest, a seven-source Microsoft Fabric platform across DEV, QA and PROD with one governed Gold Warehouse. Work in Agile sprints, gather requirements directly with business stakeholders and mentor teammates through code review.',
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
    text: 'Built a Microsoft Fabric client-notification pipeline and Fabric dashboards from Excel and ERP logistics and energy data; diagnosed faulty EDI pipeline configurations to restore daily data exchange.',
  },
  {
    role: 'Workforce and Operations Analyst (Interim)',
    org: 'Axos Business Center',
    detail: 'Digital bank, Clark City, Philippines',
    period: 'Aug 2024 to Jul 2025',
    text: 'Built a promotion-eligibility compliance data model and rules engine using PCI-DSS and NIST criteria, a real-time KPI dashboard and automated reporting with Power Query, VBA and Python.',
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
    text: 'Monitored queue and adherence data for 50 to 100 agents on Dell support queues and adjusted intraday forecasts to protect service levels.',
  },
];

export const certifications = [
  { name: 'Microsoft Data Architecture for Modern Data Stacks Specialization', issuer: 'Microsoft', date: 'Mar 2026' },
  { name: 'Google Advanced Data Analytics Professional Certificate', issuer: 'Google', date: '' },
  { name: 'Data Modeling in Power BI', issuer: 'Microsoft', date: '' },
  { name: 'Databricks Fundamentals Accreditation', issuer: 'Databricks Academy', date: '' },
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
