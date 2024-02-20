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
    name: 'About Me',
    href: '/about-me',
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
  // {
  //   name: 'contact',
  //   href: 'contact',
  // },
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

// projects
export const projects = [
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
  {
    title: 'Natours',
    image: Natours,
    description:
      'To further practice my knowledge in CSS, I used SCSS to build a simple yet elegant website that showcases an online service to book tours for the outdoor scenery. Although not an actual app, this website showcases beautiful animations and aesthetic components to showcase my CSS skills.',
    skills: ['HTML', 'CSS', 'SCSS'],
    live: 'https://muhkyle17.github.io/natours-project/',
    source: 'https://github.com/muhkyle17/natours-project',
  },
  {
    title: 'Omnifood',
    image: Omnifood,
    description:
      'Starting out coding with HTML & CSS, I coded this beautiful website that show cases Omnifood - A non-existent company that deliveries delicious yet healthy food right at your doorstep. For those who have no time for cooking yet want healthy tasty food, this is for you.',
    skills: ['HTML', 'CSS'],
    live: 'https://muhkyle17.github.io/ominfood-project/',
    source: 'https://github.com/muhkyle17/ominfood-project',
  },
  {
    title: 'Tic Tac Toe',
    image: TicTacToe,
    description:
      'My first stint at using JavaScript, I coded a Tic Tac Toe game using HTML, CSS & JavaScript. The logic was not easy, yet it was worth it in the end because of the knowledge I gained with just using Vanilla JavaScript.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://muhkyle17.github.io/TicTacToe/',
    source: 'https://github.com/muhkyle17/TicTacToe',
  },
  {
    title: 'Web Dev Portfolio',
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
]
