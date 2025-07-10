type Project = {
  name: string
  description: string
  link: string
  video: string
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
    video:
      'https://www.youtube.com/embed/eK3chz-iZYQ?autoplay=1&loop=1&playlist=eK3chz-iZYQ&mute=1',
    id: 'project1',
  },
  {
    name: 'Deep Neural Network Deployment',
    description: 'Designed, trained, and deployed a 5-layer Multi Layer Perceptron on an Arduino Nano 33 BLE Sense board for real-time pulse-width modulation LED control.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Honeywell',
    title: 'Software Engineer Intern',
    start: '2025',
    end: 'Present',
    link: '',
    id: 'work1',
  },
  {
    company: 'Eastern Michigan University',
    title: 'Research Assistant',
    start: '2024',
    end: '2025',
    link: '',
    id: 'work2',
  },
  {
    company: 'Eastern Michigan University',
    title: 'Teaching Assistant',
    start: '2023',
    end: '2024',
    link: '',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
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
