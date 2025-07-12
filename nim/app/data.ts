type Project = {
  name: string
  description: string
  link: string
  media: string
  mediaType: 'video' | 'image'
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'KeepOrDelete',
    description:
      'An interactive way to manage files. Users can preview files, view basic information about them, and rename them by utilizing a context aware AI assistant.',
    link: 'https://cosc481w-2025winter.github.io/KeepOrDelete/',
    media:
      'https://www.youtube.com/embed/eK3chz-iZYQ?autoplay=1&loop=1&playlist=eK3chz-iZYQ&mute=1',
    mediaType: 'video',
    id: 'project1',
  },
  {
    name: 'Deep Neural Network Deployment',
    description: 'Built and deployed an MLP model on Arduino Nano 33 BLE Sense to control LEDs in real-time using sine wave predictions.',
    link: '',
    media:
      '/SineWave.png',
    mediaType: 'image',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Honeywell',
    title: 'Software Engineer Intern',
    start: '2025',
    end: 'Present',
    link: 'https://www.honeywell.com/us/en',
    id: 'work1',
  },
  {
    company: 'Eastern Michigan University',
    title: 'Research Assistant',
    start: '2024',
    end: '2025',
    link: 'https://www.emich.edu/cet/index.php',
    id: 'work2',
  },
  {
    company: 'Eastern Michigan University',
    title: 'Teaching Assistant',
    start: '2023',
    end: '2024',
    link: 'https://www.emich.edu/cet/index.php',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Autonomus Drones, Yeast Cells, and Algorithms',
    description:
      'My various research experiences.',
    link: '/blog/my-various-research-experiences',
    uid: 'blog-3',
  },
  {
    title: 'Why Computer Science?',
    description: 'What led me to pursue a career in software engineering',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'National Society of Black Engineers',
    description:
      'How NSBE showed what I can be.',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/MrTyler97',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/victor-tyler/',
  }
]

export const EMAIL = 'mr.tyler97@hotmail.com'
