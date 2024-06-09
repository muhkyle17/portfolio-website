// Icons
import {
  // FiYoutube,
  FiInstagram,
  FiTwitter,
  FiGithub,
  // FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from 'react-icons/fi'

// Skills images
import HtmlSkill from './public/skills/html5.png'
import CssSkill from './public/skills/css3.png'
import JsSkill from './public/skills/js.png'
import Reactjs from './public/skills/reactjs.png'
import Nextjs from './public/skills/nextjs.png'
import GitSkill from './public/skills/git.png'
import RailsSkill from './public/skills/rails.png'
import TailwindSkill from './public/skills/tailwindcss.png'
// import ApolloSkill from './public/skills/apolloclient.png'

// Projects images
import BrewLab from './public/projects/brewlab.png'
import Natours from './public/projects/natours-project.png'
import Omnifood from './public/projects/omnifood-project.png'
import Instox from './public/projects/instox.png'
import TicTacToe from './public/projects/tic-tac-toe.png'
import WebDevPortfolio from './public/projects/web-dev-portfolio.png'
import GithubFinder from './public/projects/github-finder.png'

export const navigation = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Resume',
    href: '/resume',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  // {
  //   name: 'services',
  //   href: 'services',
  // },
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
  {
    name: 'Contact',
    href: 'contact-me',
  },
]

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/mikylereyes/',
  },
  {
    icon: <FiTwitter />,
    href: 'https://twitter.com/MiksterMik',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/muhkyle17',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/muhkyle/',
  },
]

// skills
export const skills = [
  {
    image: HtmlSkill,
    alt: 'HTML Skill',
  },
  {
    image: CssSkill,
    alt: 'CSS Skill',
  },
  {
    image: JsSkill,
    alt: 'JavaScript Skill',
  },
  {
    image: Reactjs,
    alt: 'Reactjs Skill',
  },
  {
    image: Nextjs,
    alt: 'Nextjs Skill',
  },
  {
    image: GitSkill,
    alt: 'Git Skill',
  },
  {
    image: RailsSkill,
    alt: 'Ruby on Rails Skill',
  },
  {
    image: TailwindSkill,
    alt: 'TailwindCSS Skill',
  },
]

export const aboutSkillsTools = [
  {
    type: 'Languages',
    skills: ['JavaScript', 'Python', 'Ruby'],
  },
  {
    type: 'Frontend',
    skills: [
      'HTML5',
      'CSS3',
      'SASS',
      'Tailwind CSS',
      'Apollo Client',
      'React Native',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'React Query',
    ],
  },
  {
    type: 'Backend',
    skills: [
      'Express.js',
      'Node.js',
      'RESTful APIs',
      'CRUD',
      'MySQL',
      'Prisma',
      'PostgreSQL',
      'Ruby on Rails',
      'GraphQL',
    ],
  },
  // {
  //   type: 'Tools',
  //   skills: ['VS Code', 'Git', 'GitHub', 'Canva'],
  // },
  // {
  //   type: 'Languages',
  //   skills: ['English (native)', 'Filipino (Fluent)'],
  // },
]

// projects
export const projects = [
  {
    title: 'Brew Lab PH',
    projectRoute: 'brewlabph',
    techType: 'Frontend Development',
    appType: 'Freelance Project',
    image: BrewLab,
    description:
      'An e-commerce website for a Philippine based company that sells complete home beer brewing kits that are easy and simple for beer enthusiasts to easily brew their own beer at home. Built using CSS and Shopify, I individually coded their wide selection of their recipes and products. Showcasing them was not easy!',
    skills: ['HTML', 'CSS', 'Shopify'],
    live: 'https://muhkyle17.github.io/brewlabph/',
    source: 'https://github.com/muhkyle17/brewlabph',
  },
  // {
  //   title: 'Instox',
  //   techType: 'Frontend Development',
  //   appType: 'Responsive Website',
  //   image: Instox,
  //   description:
  //     'A demo trading platform that allows users to buy and sell stocks in a matter of seconds. This app was built by me and my team using Ruby on Rails that connects to an API that tracks and monitors the U.S. stock market. Get access to live news and track your stocks to help you become the best investor you can be.',
  //   skills: ['HTML', 'Ruby on Rails', 'Tailwind CSS'],
  //   live: 'https://instox.herokuapp.com/',
  //   source: 'https://github.com/bananakiu/stock-trading-app',
  // },
  {
    title: 'Github Finder',
    projectRoute: 'github-finder',
    techType: 'Frontend Development',
    appType: 'Responsive Website',
    image: GithubFinder,
    description: `An app that allows you to search for github repositories that maximizes usage of the Github API. Upon searching a github user, you can view the user's profile that an in depth description of the user's github profile along with their latest repositories. You can then click a link that leads you straight to the user's actual github profile.`,
    skills: ['HTML', 'CSS', 'Reactjs'],
    live: 'https://github-finder-v8rdja29g-muhkyle17.vercel.app/',
    source: 'https://github.com/muhkyle17/github-finder',
  },
  {
    title: 'Natours',
    projectRoute: 'natours',
    techType: 'Frontend Development',
    appType: 'Responsive Website',
    image: Natours,
    description:
      'To further practice my knowledge in CSS, I used SCSS to build a simple yet elegant website that showcases an online service to book tours for the outdoor scenery. Although not an actual app, this website showcases beautiful animations and aesthetic components to showcase my CSS skills.',
    skills: ['HTML', 'CSS', 'SCSS'],
    live: 'https://muhkyle17.github.io/natours-project/',
    source: 'https://github.com/muhkyle17/natours-project',
  },
  {
    title: 'Omnifood',
    projectRoute: 'omnifood',
    techType: 'Frontend Development',
    appType: 'Responsive Website',
    image: Omnifood,
    description:
      'Starting out coding with HTML & CSS, I coded this beautiful website that show cases Omnifood - A non-existent company that deliveries delicious yet healthy food right at your doorstep. For those who have no time for cooking yet want healthy tasty food, this is for you.',
    skills: ['HTML', 'CSS'],
    live: 'https://muhkyle17.github.io/ominfood-project/',
    source: 'https://github.com/muhkyle17/ominfood-project',
  },
  {
    title: 'Tic Tac Toe',
    projectRoute: 'tictactoe',
    techType: 'Frontend Development',
    appType: 'Responsive Website',
    image: TicTacToe,
    description:
      'My first stint at using JavaScript, I coded a Tic Tac Toe game using HTML, CSS & JavaScript. The logic was not easy, yet it was worth it in the end because of the knowledge I gained with just using Vanilla JavaScript.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://muhkyle17.github.io/TicTacToe/',
    source: 'https://github.com/muhkyle17/TicTacToe',
  },
  {
    title: 'Web Dev Portfolio',
    projectRoute: 'web-dev-portfolio',
    techType: 'Frontend Development',
    appType: 'Responsive Website',
    image: WebDevPortfolio,
    description:
      'You know what they say - practice makes progress. Coded with just HTML and CSS, a simple yet pleasing portfolio website to continuously brush up on skills that should never be neglected.',
    skills: ['HTML', 'CSS'],
    live: 'https://muhkyle17.github.io/web-developer-portfolio/',
    source: 'https://github.com/muhkyle17/web-developer-portfolio',
  },
]

export const projectsShortened = [
  {
    title: 'Brew Lab PH',
    image: BrewLab,
    description:
      'An e-commerce website for a Philippine based company that sells complete home beer brewing kits that are easy and simple for beer enthusiasts to easily brew their own beer at home. Built using CSS and Shopify, I individually coded their wide selection of their recipes and products. Showcasing them was not easy!',
    skills: ['HTML', 'CSS', 'Shopify'],
    live: 'https://muhkyle17.github.io/brewlabph/',
    source: 'https://github.com/muhkyle17/brewlabph',
  },
  {
    title: 'Instox',
    image: Instox,
    description:
      'A demo trading platform that allows users to buy and sell stocks in a matter of seconds. This app was built by me and my team using Ruby on Rails that connects to an API that tracks and monitors the U.S. stock market. Get access to live news and track your stocks to help you become the best investor you can be.',
    skills: ['HTML', 'Ruby on Rails', 'Tailwind CSS'],
    live: 'https://instox.herokuapp.com/',
    source: 'https://github.com/bananakiu/stock-trading-app',
  },
  {
    title: 'Github Finder',
    image: GithubFinder,
    description: `An app that allows you to search for github repositories that maximizes usage of the Github API. Upon searching a github user, you can view the user's profile that an in depth description of the user's github profile along with their latest repositories. You can then click a link that leads you straight to the user's actual github profile.`,
    skills: ['HTML', 'CSS', 'Reactjs'],
    live: 'https://github-finder-v8rdja29g-muhkyle17.vercel.app/',
    source: 'https://github.com/muhkyle17/github-finder',
  },
]

export const experience = [
  {
    company: 'Creator.co',
    jobTitle: 'Software Developer',
    duration: 'Jan 2023 - Present',
    location: 'Vancouver, Canada',
    responsibilities: [
      'Full-stack engineer driving innovation in the integration and developer team, dedicated to shaping and elevating the experience within Creator.co‘s 3 platforms. ',
      'Spearheaded the development of the internal affiliate program on all 3 platforms utilizing the Shopify and WooCommerce APIs and webhooks to ensure seamless integration and functionality.',
      'Contributed to the front-end services using React.js, styled components, react context, ant design and react-query.',
      'Contributed to the back-end services for webhooks and integrations built in Node.js (Express.js) and Prisma with MySQL and PostgreSQL.',
    ],
  },
  {
    company: 'Growsari',
    jobTitle: 'Front-End Developer',
    jobType: 'Full-time Contract Based',
    duration: 'Jan 2022 - Feb 2024',
    location: 'Manila, Philippines',
    responsibilities: [
      'Migrated company’s task tracking app into a formal portal using Next.js to help managers better track tasks of employees.',
      'Used Apollo Client to connect task tracking app to the backend to optimize Frontend features.',
      'Updated company’s task tracker store entry page to help users log call attempts and tasks for each store they are assigned to using React.js and Apollo Client.',
      'Implemented the interface for the company’s task management system in order for managers to create, update, display, and delete forms & tasks',
    ],
  },
  {
    company: 'Makisu Software Consulting Services',
    jobTitle: 'Customer Success Manager',
    duration: 'Mar 2020 - Apr 2021',
    location: 'Manila, Philippines',
    responsibilities: [
      'Managed company’s team of virtual assistants in helping and assisting required tasks of Philippine & US based clients leading up to 300+ hours of Marti virtual assistance.',
      'Assisted in marketing efforts to develop and oversee marketing campaigns to promote Marti’s services.',
      'Managed social media accounts to cultivate social media following and promote company’s overall brand.',
      'Acquired 30+ freelancers and agencies into the Marti Partner program to work on freelance projects in the U.S',
      'Connected 10+ freelancers and agencies with different companies in the Philippines and US.',
    ],
  },
]

export const resumeProjects = [
  {
    title: 'Messenger App',
    date: 'Aug 2021',
    githubLink: 'https://github.com/bananakiu/slack-api-project',
    shortDescription:
      'A React JS Chat App that allows for private messaging amongst users within the platform.',
    detailedDescription: [
      'Implemented a private messaging feature that allows users to message all other users within the application.',
      'Developed chat components using ReactJS, and JavaScript to streamline user experience flow.',
      'Added a feature to be able to check the profile of the current user and to log in and out of the application.',
      'Used Axios to make request with the backend for seamless messaging.',
    ],
  },
  {
    title: 'Stock Trading App',
    date: 'Sept 2021',
    githubLink: 'https://github.com/bananakiu/stock-trading-app',
    shortDescription:
      'Stock Trading App built with Ruby on Rails that allows users to purchase stocks using an API with a feature for market monitoring.',
    detailedDescription: [
      'Ensure users are able to sign up and login to their own password-protected accounts.',
      'Added a news section where users can view the latest news on top companies and stocks like Ford and Apple',
      'Included a Stocks tab to view the stocks listed as Most Active, Top Gainers, Top Losers and relevant data.',
      'Implemented an admin dashboard to view, approve, create, monitor and delete users.',
      'Utilized the IEX gem to retrieve real-time stock data like volume, last price, change and % change.',
    ],
  },
  {
    title: 'Task App',
    date: 'October 2021',
    githubLink: 'https://github.com/muhkyle17/task_planner',
    shortDescription:
      'A Ruby on Rails task management application that allows users to add, edit and track their projects & tasks.',
    detailedDescription: [
      'Integrated a signup and login feature to allow users to store their projects tasks on personal accounts.',
      'Allowed users to create custom projects to sort their tasks easily.',
      'Enabled users to edit, update, and delete projects and tasks.',
      'Added a feature that allows users to check the progress of their project based on the completion of its tasks.',
    ],
  },
]

export const freelance = [
  {
    company: 'Brew Lab PH',
    duration: 'May 2021 - Jan 2022',
    githubLink: 'https://github.com/muhkyle17/brewlabph/tree/main',
    shortDescription:
      'An e-commerce website that allows users to buy beer kits online using Shopify’s buy button feature.',
    detailedDescription: [
      'Built company’s e-commerce website to improve customer engagement and retention',
      'Utilized Shopify buy button feature onto website to increase customer sales',
      'Assisted in-house designers in making company website user-friendly',
      'Implemented appealing design features that address company’s client needs',
    ],
  },
]

export const techSkills = [
  {
    type: 'Proficient',
    techStacks: [
      'HTML5',
      'CSS3',
      'SASS',
      'Tailwind CSS',
      'JavaScript',
      'React.js',
      'Next.js',
      'Ruby on Rails',
      'Git',
      'Apollo Client',
      'Node.js',
      'Express.js',
      'Prisma',
      'MySQL',
      'GraphQL',
    ],
  },
  {
    type: 'Exposure',
    techStacks: ['Vue.js', 'React Native', 'Python'],
  },
]

export const education = [
  {
    program: 'Full Stack Web Development',
    school: 'Avion School',
    duration: 'June 2021 - December 2021',
    location: 'Manila, Philippines',
  },
  {
    program: 'B.S. Entrepreneurship',
    school: 'De La Salle University',
    duration: 'June 2015 - August 2020',
    location: 'Manila, Philippines',
  },
]
