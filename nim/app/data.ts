type Project = {
  name: string
  description: string
  link?: string
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
    name: 'Database Configuration Application',
    description: 'Built a full-stack app that condenses database config workflows into a single interface, accelerating Honeywell`s trade show deployments by 75%',
    media:'/Honeywell-Logo.wine.webp',
    mediaType: 'image',
    id: 'project1',
  },
  {
    name: 'KeepOrDelete',
    description:
      'An interactive way to manage files. Users can preview files, view basic information about them, and rename them by utilizing a context aware AI assistant.',
    link: 'https://cosc481w-2025winter.github.io/KeepOrDelete/',
    media:
      'https://www.youtube.com/embed/eK3chz-iZYQ?autoplay=1&loop=1&playlist=eK3chz-iZYQ&mute=1',
    mediaType: 'video',
    id: 'project2',
  },
  {
    name: 'Embedded DNN Sine Wave Predictor',
    description: 'Built and deployed an MLP model on Arduino Nano 33 BLE Sense to control LEDs in real-time using sine wave predictions.',
    media:
      '/SineWave.png',
    mediaType: 'image',
    id: 'project3',
  },
  {
    name: 'Guess The Flag',
    description: 'Built an iOS guessing game where players identify country flags from multiple choices. It features score tracking and alert messages.',
    media:
      '/iOS_app.png',
    mediaType: 'image',
    id: 'project4',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Honeywell',
    title: 'Software Engineer Intern',
    start: '2025',
    end: '2025',
    link: 'https://www.honeywell.com/us/en',
    id: 'work1',
  },
  {
    company: 'Eastern Michigan University',
    title: 'Research Assistant',
    start: '2024',
    end: '2025',
    link: 'https://eas-lab-emich.github.io/',
    id: 'work2',
  },
  {
    company: 'Eastern Michigan University',
    title: 'Teaching Assistant',
    start: '2023',
    end: '2024',
    link: 'https://www.emich.edu/computer-science/index.php',
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
    description: 'What led me to pursue a career in software engineering.',
    link: '/blog/why-computer-science',
    uid: 'blog-1',
  }
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
