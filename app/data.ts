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
    name: 'Lumin',
    description:
      '一個專為大學生設計的長期導師媒合平台',
    link: 'https://moooofan.adastra.tw',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Adastra 接案工作室',
    description: '協助團隊導入 LINE + AI 的系統，也能根據不同需求，客製化 AI 的應用場景。',
    link: 'https://adastra.tw/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: '布爾喬亞公關顧問',
    title: '無任所校園大使',
    start: '2025/01',
    end: 'Present',
    link: 'https://www.vocalmiddle.com/',
    id: 'work1',
  },
  {
    company: '艾思智創 (AICE.Inc)',
    title: '無任所校園大使',
    start: '2025/01',
    end: 'Present',
    link: 'https://www.global-aice.com/?lang=zh-hant',
    id: 'work2',
  },
  {
    company: '布爾喬亞公關顧問',
    title: 'Associate PR Consultant',
    start: '2024/07',
    end: '2025/01',
    link: 'https://www.vocalmiddle.com/',
    id: 'work3',
  },
  {
    company: '大學新創平台',
    title: '社長',
    start: '2023/07',
    end: '2024/09',
    link: 'https://www.instagram.com/maker_in_college/',
    id: 'work4',
  },
  {
    company: '大學新創平台',
    title: '學術長',
    start: '2023/01',
    end: '2023/07',
    link: 'https://www.instagram.com/maker_in_college/',
    id: 'work5',
  },
  {
    company: 'NCCU USR',
    title: '兼任助理',
    start: '2023/09',
    end: 'Present',
    link: 'https://www.instagram.com/maker_in_college/',
    id: 'work6',
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
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
]

export const EMAIL = 'ray860408@gmail.com'
