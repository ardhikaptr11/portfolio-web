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
  descriptions: string[];
  icon: string;
  date: string;
  url?: string;
};

export const EXPERIENCES_DATA: ExperiencesData[] = [
  {
    title: 'Graduated FSD Bootcamp',
    location: 'Jakarta, Indonesia (Online)',
    descriptions:
      [  
        'Completed an intensive Full Stack Developer bootcamp focused on modern web development.',
        'Learned and applied technologies including React, Tailwind CSS, Node.js, Express, PostgreSQL, and REST APIs.',
        'Built several full-stack projects individually, following best practices such as MVC architecture and Git version control.',
        'Gain hands-on experience with testing, deployment, and exposure to agile workflows.'
      ],
    icon: 'graduation',
    date: 'Dec 2024 - Jun 2025',
    url: 'https://bit.ly/FSDCertificate'
  },
  {
    title: 'Back End Developer',
    location: 'Jakarta, Indonesia (Remote)',
    descriptions:
      [
        'Designed and implemented a scalable relational database structure for an education web application using PostgreSQL, starting from ERD to deployment.',
        'Built a secure and well-structured RESTful API using Node.js, with authentication and authorization handled via JWT.',
        'Developed and maintained API documentation using Swagger to ensure clarity and ease of integration for front-end.',
        'Conducted integration testing across key API endpoints to validate business logic and ensure reliability.',
        'Integrated third-party services such as Cloudinary for media upload management.'
      ],
    icon: 'code',
    date: 'May 2025 - Jun 2025',
  },
  {
    title: 'Front End Developer',
    location: 'Jakarta, Indonesia (Remote)',
    descriptions:
      [
        'Developed the front-end interface using React.js, focusing on component reusability.',
        'Implemented the UI slicing from the provided Figma designs to ensure consistency in the visual design and layout',
        'Applied mobile-first design principles to ensure consistent user experience across various screen sizes and devices.',
        'Utilized Tailwind CSS to build scalable and maintainable styles, accelerating development with utility-first classes.',
        "Integrated Firebase services directly into the front-end to handle authentication and manage application data flow."
      ],
    icon: 'code',
    date: 'Feb 2025 - Apr 2025',
  },
  {
    title: "Graduated Bachelor's Degree",
    location: 'Surabaya, Indonesia',
    descriptions:
      [
        'Specialized in coastal development and management, with a focus on sustainable approaches to coastal protection.',
        'Implemented machine learning model to predict wave runup on breakwater as my undergraduate thesis.'
      ],
    icon: 'graduation',
    date: 'Jun 2019 - Sept 2025',
    url: 'https://repository.its.ac.id/108213/'
  },
  {
    title: 'Graduated Bangkit Academy 2023',
    location: 'Jakarta, Indonesia (Online)',
    descriptions:
      [
        "Led a cross-functional team of 5 members from different learning paths to successfully execute the capstone project.",
        "Designed machine learning models, including data preprocessing, feature engineering, model training, evaluation, and optimization.",
        "Applied Artificial Neural Network to perform a binary classification for predicting the risk category of polycystic ovarian syndrome (PCOS).",
        "Managed the overall project planning, including defining the project timeline, and initiating team meetings and group discussions",
        "Actively engaged in brainstorming sessions, providing valuable insights and feedback on project direction, and technical approaches",
        "Fostered a collaborative team environment, encouraging open communication, and knowledge sharing throughout the project"
      ],
    icon: 'graduation',
    date: 'Jan 2023 - Jul 2023',
    url: "https://bit.ly/BangkitGraduationCertificate"
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'portfolio-web',
    title: 'Portfolio Web V1',
    description:
      'A modern and responsive portfolio frontend featuring smooth animations and interactive 3D elements.',
    imageUrl:
      '/assets/portfolio-web.jpg',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Formspree', 'Frontend'],
    githubUrl: 'https://github.com/ardhikaptr11/portfolio-web',
  },
  {
    id: 'videobelajar-frontend',
    title: 'Videobelajar',
    description:
      'A responsive video learning platform designed to deliver educational content with a clean and consistent user interface.',
    imageUrl:
      '/assets/videobelajar-frontend.jpg',
    tags: ['React', 'Tailwind CSS', 'Firebase', 'Responsive Design', 'Frontend'],
    demoUrl: 'https://14040-videobelajar-react.vercel.app',
    githubUrl: 'https://github.com/ardhikaptr11/videobelajar-react',
  },
  {
    id: 'videobelajar-backend',
    title: 'Videobelajar REST API',
    description:
      'A backend service to support Videobelajar frontend, providing APIs, auth, and media upload support.',
    imageUrl:
      '/assets/videobelajar-backend.jpg',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'JWT', 'Swagger', 'Cloudinary', 'Backend'],
    demoUrl: 'https://14040-videobelajar-rest.vercel.app/docs/api/v2',
    githubUrl: 'https://github.com/ardhikaptr11/videobelajar-rest',
  },
  {
    id: 'todoz-app',
    title: 'Task Management App',
    description:
      'A simple front-end Kanban board focusing purely on layout and interactivity.',
    imageUrl:
      '/assets/todoz-app.png',
    tags: ['HTML', 'CSS', 'Javascript', 'Frontend'],
    demoUrl: 'https://todoz-app-14040.vercel.app',
    githubUrl: 'https://github.com/ardhikaptr11/todoz-app',
  },
  {
    id: 'pcos-detection',
    title: 'PCOS Detection',
    description:
      'A machine learning project that uses Artificial Neural Network to perform binary classification for predicting PCOS risk.',
    imageUrl:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'TensorFlow', 'Machine Learning', 'Data Science', 'Binary Classification'],
    githubUrl: 'https://github.com/ardhikaptr11/pcos-detection',
  },
  {
    id: 'youtube-song-downloader',
    title: 'Youtube Song Downloader',
    description:
      'A Python GUI app to download music-only videos from YouTube with Windows toast notification support.',
    imageUrl:
      '/assets/yt-downloader.png',
    tags: ['Python', 'Web Scrapping', 'Multimedia Processing', 'GUI'],
    githubUrl: 'https://https://github.com/ardhikaptr11/yt-song-downloader',
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
  {
    platform: 'Email',
    url: 'mailto:putucrisna11@gmail.com',
    icon: 'mail',
  },
  {
    platform: "WhatsApp",
    url: "https://wa.me/6282234441918",
    icon: "whatsapp"
  },
  {
    platform: "Telegram",
    url: "https://t.me/ardhikaptr11",
    icon: "telegram"
  }
];

export const CONTACT_INFORMATIONS: { text: string, icon: string }[] = [
  {
    text: "Surabaya, Indonesia",
    icon: "location"
  },
  {
    text: "putucrisna11@gmail.com",
    icon: "mail"
  },
]
export const ABOUT_ME = {
  name: 'Ardhika Putra',
  title: 'Full Stack Developer',
  tagline: 'Passionate about code. Driven by curiosity.',
  bio: "After graduating with a degree in Ocean Engineering, I decided to pursue my long-standing interest in programming. I enrolled in a coding bootcamp focused on full-stack web development, where I developed a strong interest in the problem-solving aspect of programming. Through the bootcamp and my own independent projects, I became familiar with technologies such as React, Tailwind CSS, Node.js, and PostgreSQL. I'm someone who pays close attention to detail. I also enjoy learning and exploring new things, and currently expanding my skills by learning TypeScript and Next.js.",
};