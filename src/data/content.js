export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Operations', href: '/operations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 12, suffix: '+', label: 'Years of Excellence' },
  { value: 50, suffix: '+', label: 'Expert Engineers' },
]

export const services = [
  {
    icon: 'Cloud',
    title: 'Cloud Architecture',
    desc: 'Scalable, resilient cloud infrastructure designed for performance. We architect multi-cloud and hybrid solutions that grow with your business.',
    color: '#4F46E5',
    capabilities: ['Multi-Cloud Strategy', 'Infrastructure as Code', 'Cost Optimization', 'Auto-scaling Architecture'],
  },
  {
    icon: 'Shield',
    title: 'Cybersecurity',
    desc: 'Enterprise-grade threat detection, zero-trust architecture, and compliance monitoring to keep your data safe 24/7.',
    color: '#0891B2',
    capabilities: ['Penetration Testing', 'SOC Operations', 'Compliance Audits', 'Incident Response'],
  },
  {
    icon: 'Cpu',
    title: 'AI & ML Solutions',
    desc: 'Custom machine learning models and intelligent automation pipelines that turn raw data into actionable insights.',
    color: '#7C3AED',
    capabilities: ['Predictive Analytics', 'NLP & Chatbots', 'Computer Vision', 'MLOps Pipelines'],
  },
  {
    icon: 'Globe',
    title: 'Digital Transformation',
    desc: 'End-to-end digital strategy and implementation to modernize legacy systems and unlock new revenue streams.',
    color: '#10b981',
    capabilities: ['Business Process Automation', 'ERP Integration', 'Change Management', 'Digital Roadmap'],
  },
  {
    icon: 'Code2',
    title: 'Custom Software Dev',
    desc: 'Full-stack engineering teams building performant, maintainable software tailored to your exact requirements.',
    color: '#f59e0b',
    capabilities: ['Web & Mobile Apps', 'API Development', 'System Integration', 'Legacy Modernization'],
  },
  {
    icon: 'Network',
    title: 'IT Infrastructure',
    desc: 'Robust network design, SD-WAN, and managed infrastructure services ensuring 99.9% uptime for mission-critical workloads.',
    color: '#ef4444',
    capabilities: ['Network Architecture', 'SD-WAN Solutions', 'Disaster Recovery', 'Managed Services'],
  },
]

export const platforms = [
  { id: 'web',     icon: 'Code2',           label: 'Web',          color: '#4F46E5', desc: 'React, Angular, Vue, Next.js' },
  { id: 'mobile',  icon: 'Smartphone',      label: 'Mobile',       color: '#0891B2', desc: 'React Native, Flutter, Swift' },
  { id: 'android', icon: 'TabletSmartphone', label: 'Android',      color: '#16A34A', desc: 'Jetpack Compose, Kotlin, Java' },
  { id: 'ios',     icon: 'Apple',           label: 'iOS',          color: '#7C3AED', desc: 'SwiftUI, Objective-C, Xcode' },
  { id: 'cloud',   icon: 'Cloud',           label: 'Cloud',        color: '#EA580C', desc: 'AWS, Azure, GCP, Kubernetes' },
  { id: 'ai',      icon: 'Brain',           label: 'AI / ML',      color: '#DB2777', desc: 'TensorFlow, PyTorch, OpenAI' },
  { id: 'iot',     icon: 'Cpu',             label: 'IoT',          color: '#CA8A04', desc: 'Embedded C, MQTT, Raspberry Pi' },
  { id: 'devops',  icon: 'GitBranch',       label: 'DevOps',       color: '#0F766E', desc: 'Docker, Jenkins, GitHub Actions' },
]

export const techCategories = [
  {
    category: 'Frontend',
    accent: '#4F46E5',
    icon: 'Monitor',
    techs: [
      { name: 'React',      level: 95, badge: 'Expert'     },
      { name: 'Next.js',    level: 90, badge: 'Expert'     },
      { name: 'Angular',    level: 82, badge: 'Advanced'   },
      { name: 'Vue.js',     level: 78, badge: 'Advanced'   },
      { name: 'TypeScript', level: 92, badge: 'Expert'     },
      { name: 'Tailwind',   level: 96, badge: 'Expert'     },
    ]
  },
  {
    category: 'Backend',
    accent: '#0891B2',
    icon: 'Server',
    techs: [
      { name: 'Node.js',   level: 94, badge: 'Expert'   },
      { name: 'Python',    level: 91, badge: 'Expert'   },
      { name: 'Java',      level: 85, badge: 'Advanced' },
      { name: 'Go',        level: 72, badge: 'Proficient'},
      { name: 'GraphQL',   level: 88, badge: 'Advanced' },
      { name: 'REST APIs', level: 97, badge: 'Expert'   },
    ]
  },
  {
    category: 'Cloud & DevOps',
    accent: '#EA580C',
    icon: 'Cloud',
    techs: [
      { name: 'AWS',             level: 90, badge: 'Expert'   },
      { name: 'Azure',           level: 85, badge: 'Advanced' },
      { name: 'GCP',             level: 80, badge: 'Advanced' },
      { name: 'Docker',          level: 93, badge: 'Expert'   },
      { name: 'Kubernetes',      level: 87, badge: 'Advanced' },
      { name: 'GitHub Actions',  level: 91, badge: 'Expert'   },
    ]
  },
  {
    category: 'AI & Data',
    accent: '#DB2777',
    icon: 'Brain',
    techs: [
      { name: 'TensorFlow', level: 82, badge: 'Advanced'  },
      { name: 'PyTorch',    level: 78, badge: 'Proficient'},
      { name: 'OpenAI API', level: 91, badge: 'Expert'    },
      { name: 'PostgreSQL', level: 93, badge: 'Expert'    },
      { name: 'MongoDB',    level: 88, badge: 'Advanced'  },
      { name: 'Redis',      level: 84, badge: 'Advanced'  },
    ]
  },
  {
    category: 'Mobile',
    accent: '#16A34A',
    icon: 'Smartphone',
    techs: [
      { name: 'React Native',     level: 88, badge: 'Advanced' },
      { name: 'Flutter',          level: 80, badge: 'Advanced' },
      { name: 'Android / Kotlin', level: 85, badge: 'Advanced' },
      { name: 'iOS / Swift',      level: 75, badge: 'Proficient'},
      { name: 'Jetpack Compose',  level: 82, badge: 'Advanced' },
      { name: 'Expo',             level: 86, badge: 'Advanced' },
    ]
  },
  {
    category: 'Security & QA',
    accent: '#7C3AED',
    icon: 'Shield',
    techs: [
      { name: 'Penetration Testing', level: 80, badge: 'Advanced'  },
      { name: 'OWASP',              level: 87, badge: 'Advanced'  },
      { name: 'Selenium',           level: 88, badge: 'Advanced'  },
      { name: 'Cypress',            level: 85, badge: 'Advanced'  },
      { name: 'Jest',               level: 91, badge: 'Expert'    },
      { name: 'ISO 27001',          level: 90, badge: 'Certified' },
    ]
  },
]

export const techStats = [
  { value: 40,  suffix: '+', label: 'Technologies Mastered' },
  { value: 500, suffix: '+', label: 'Projects Delivered'    },
  { value: 99,  suffix: '%', label: 'Uptime Guaranteed'     },
  { value: 12,  suffix: '+', label: 'Years of Experience'   },
]

export const focusAreas = [
  { title: 'Strategy & Planning',    icon: 'Lightbulb', desc: 'Technology roadmaps aligned to your business goals' },
  { title: 'Design & Development',   icon: 'Layers',    desc: 'End-to-end product engineering from UI to infrastructure' },
  { title: 'Testing & QA',           icon: 'CheckCircle',desc: 'Automated testing pipelines and quality assurance' },
  { title: 'Deployment & Support',   icon: 'Rocket',    desc: '24/7 DevOps monitoring and production support' },
]

export const operations = [
  {
    phase: '01',
    title: 'Discovery & Planning',
    desc: 'Deep-dive into your business requirements, technical landscape, and strategic goals to define a clear roadmap.',
    icon: 'Search',
  },
  {
    phase: '02',
    title: 'Architecture Design',
    desc: 'Design robust, scalable system architecture with detailed technical specifications and risk assessment.',
    icon: 'Layers',
  },
  {
    phase: '03',
    title: 'Agile Development',
    desc: 'Iterative sprints with continuous client feedback, ensuring the product evolves exactly as needed.',
    icon: 'Zap',
  },
  {
    phase: '04',
    title: 'QA & Security Audit',
    desc: 'Comprehensive testing, penetration testing, and security audits to ensure enterprise-grade reliability.',
    icon: 'Shield',
  },
  {
    phase: '05',
    title: 'Deployment & DevOps',
    desc: 'Seamless production deployment with CI/CD pipelines, monitoring, and automated rollback capabilities.',
    icon: 'Rocket',
  },
  {
    phase: '06',
    title: '24/7 Support & Scale',
    desc: 'Round-the-clock support, proactive monitoring, and continuous optimization to keep systems running at peak performance.',
    icon: 'Headphones',
  },
]

export const techStack = [
  'React', 'Node.js', 'Python', 'Kubernetes', 'AWS', 'Azure', 'GCP',
  'TensorFlow', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL',
]

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Meridian Financial',
    initials: 'SC',
    text: 'Viprove transformed our legacy infrastructure into a modern cloud-native platform. Their team delivered on time, on budget, and exceeded every technical benchmark.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'VP of Engineering',
    company: 'ScaleAuto Inc.',
    initials: 'MR',
    text: 'The AI solutions Viprove built increased our operational efficiency by 40%. Their deep expertise in ML and custom software is unmatched.',
    rating: 5,
  },
  {
    name: 'Emily Nakamura',
    role: 'CISO',
    company: 'HealthFirst Systems',
    initials: 'EN',
    text: 'Their cybersecurity audit uncovered critical vulnerabilities we had missed for years. Viprove is now our permanent security partner for all infrastructure needs.',
    rating: 5,
  },
]

export const team = [
  {
    name: 'David Park',
    role: 'CEO & Founder',
    bio: '20+ years in enterprise IT architecture. Former Chief Architect at a Fortune 500 cloud provider. Driving Viprove\'s vision of accessible, enterprise-grade innovation.',
    initials: 'DP',
    color: '#4F46E5',
  },
  {
    name: 'Amara Singh',
    role: 'CTO',
    bio: 'PhD in distributed systems. Led engineering teams scaling to 10M+ users. Expert in cloud-native architecture and AI platforms.',
    initials: 'AS',
    color: '#0891B2',
  },
  {
    name: 'James Wright',
    role: 'Head of Security',
    bio: '15 years in cybersecurity. Certified ethical hacker and CISSP. Built threat detection systems protecting Fortune 100 enterprises.',
    initials: 'JW',
    color: '#7C3AED',
  },
  {
    name: 'Lisa Thompson',
    role: 'VP of Delivery',
    bio: 'Agile methodology expert with a track record of 200+ successful project deliveries. Ensures every client receives world-class service.',
    initials: 'LT',
    color: '#10b981',
  },
]

export const contact = {
  phone: '+91 70262 27723',
  email: 'hr@viproveinfotech.com',
  address: 'Embassy Golf Links Business Park, Challaghatta, Bengaluru, Karnataka 560071',
  city: 'Bengaluru',
  state: 'Karnataka',
  pincode: '560071',
}
