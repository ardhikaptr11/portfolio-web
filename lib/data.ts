export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
};

export type Skill = {
  name: string;
  icon: string;
  level: number;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export type ExperiencesData = {
  title: string;
  location: string;
  description: string;
  icon: string;
  date: string;
};

export const EXPERIENCES_DATA: ExperiencesData[] = [
  {
    title: 'Graduated FSD Bootcamp',
    location: 'Jakarta, Indonesia (Online)',
    description:
      'Sed ut est mollis, faucibus purus vitae, eleifend ligula. Morbi laoreet semper arcu, ut ultricies.',
    icon: 'graduation',
    date: 'Dec 2024 - Jun 2025',
  },
  {
    title: 'Back End Developer',
    location: 'Jakarta, Indonesia (Remote)',
    description:
      'Sed ut est mollis, faucibus purus vitae, eleifend ligula. Morbi laoreet semper arcu, ut ultricies.',
    icon: 'code',
    date: 'May 2025 - Jun 2025',
  },
  {
    title: 'Front End Developer',
    location: 'Jakarta, ID (Remote)',
    description:
      'Sed ut est mollis, faucibus purus vitae, eleifend ligula. Morbi laoreet semper arcu, ut ultricies.',
    icon: 'code',
    date: 'Feb 2025 - Apr 2025',
  },
  {
    title: "Graduated Bachelor's Degree",
    location: 'Surabaya, Indonesia',
    description:
      'Sed ut est mollis, faucibus purus vitae, eleifend ligula. Morbi laoreet semper arcu, ut ultricies.',
    icon: 'graduation',
    date: 'Jun 2019 - Sept 2025',
  },
  {
    title: 'Bangkit Academy 2023 Led by Google, Gojek, Traveloka',
    location: 'Jakarta, Indonesia (Online)',
    description:
      'Sed ut est mollis, faucibus purus vitae, eleifend ligula. Morbi laoreet semper arcu, ut ultricies.',
    icon: 'graduation',
    date: 'Jan 2023 - Jul 2023',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with product management, user authentication, and payment processing.',
    imageUrl:
      'https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description:
      'A Kanban-style task management application with drag-and-drop functionality and team collaboration features.',
    imageUrl:
      'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Firebase', 'TypeScript', 'Redux'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'project-3',
    title: 'Health & Fitness Tracker',
    description:
      'A mobile-first web application for tracking workouts, nutrition, and health metrics with data visualization.',
    imageUrl:
      'https://images.pexels.com/photos/2531353/pexels-photo-2531353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL', 'D3.js'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'project-4',
    title: 'AI Content Generator',
    description:
      'An AI-powered tool that generates marketing copy, blog posts, and social media content based on user prompts.',
    imageUrl:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'React', 'OpenAI API', 'FastAPI'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export const SKILLS: Skill[] = [
  { name: 'Python', icon: 'code', level: 90 },
  { name: 'JavaScript', icon: 'code', level: 80 },
  { name: 'React', icon: 'component', level: 75 },
  { name: 'HTML', icon: 'code', level: 75 },
  { name: 'Tailwind CSS', icon: 'palette', level: 70 },
  { name: 'TypeScript', icon: 'file-code', level: 30 },
  { name: 'REST API', icon: 'git-branch', level: 80 },
  { name: 'Next.js', icon: 'server', level: 50 },
  { name: 'Node.js', icon: 'server', level: 80 },
  { name: 'GCP', icon: 'cloud', level: 75 },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/ardhikaptr11',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/ardhikaptr11',
    icon: 'linkedin',
  },
  { platform: 'Email', url: 'mailto:putucrisna11@gmail.com', icon: 'mail' },
];

export const ABOUT_ME = {
  name: 'Ardhika Putra',
  title: 'Full Stack Developer',
  tagline: 'Passionate about code. Driven by curiosity.',
  bio: "After graduating with a degree in Ocean Engineering, I decided to pursue my long-standing interest in programming. I enrolled in a coding bootcamp focused on full-stack web development, where I found a deep interest in the problem-solving aspect of programming. Through the bootcamp and my own independent projects, I became familiar with technologies such as React, Tailwind CSS, Node.js, and PostgreSQL. I'm also currently expanding my skills by learning TypeScript and Next.js. I am very interested in joining a professional team as a full-time or intern software developer.",
};
