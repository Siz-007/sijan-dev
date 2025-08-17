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
    name: 'Detect AI',
    description:
      'A state-of-the-art tool that detects AI-generated text & deepfake images.',
    link: 'https://github.com/Siz-007/DetectAI',
    video: '/videos/deepfake.mp4',
    id: 'project1',
  },
  {
    name: 'Visio-Algo',
    description: 'An interactive tool that visually demonstrates how algorithms work.',
    link: 'https://github.com/Siz-007/Visio-Algo',
    video: '/videos/algorithm.mp4',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Spiralogics, Inc.',
    title: 'Software QA Engineer',
    start: '2024',
    end: 'Present',
    link: 'https://spiralogics.com',
    id: 'work1',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Load Testing Applications with OpenID Connect Authentication Using JMeter',
    description: 'How to load test applications that use OpenID Connect authentication with JMeter?',
    link: '/thought/content/load-testing',
    uid: 'blog-1',
  },
  {
    title: 'The Light They Forget',
    description: 'Poem - The Light They Forget',
    link: '/thought/content/the-light-they-forget',
    uid: 'blog-2',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Siz-007',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/devsijan',
  },
  {
    label: 'Medium',
    link: 'https://medium.com/@devsijan',
  },
]

export const EMAIL = 'devsijan001@gmail.com'
