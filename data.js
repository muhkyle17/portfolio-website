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
import Ngs from './public/projects/ngs.png'
import EcommerceStripe from './public/projects/ecommerce-stripe.png'

import BrandView from './public/projects/affiliate-brand-view.png'
import BrandEditor from './public/projects/affiliate-brand-editor.png'
import BrandCreatorView from './public/projects/affiliate-brand-creator-view.png'
import BrandCreatorProfile from './public/projects/affiliate-brand-creator-profile.png'
import CreatorPage from './public/projects/affiliate-creator-page.png'

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
    href: '/contact-me',
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

export const updatedSkills = [
  'React.js',
  'Next.js',
  'React Native',
  'TypeScript',
  'Apollo Client',
  'GraphQL',
  'Express.js',
  'Node.js',
  'MySQL',
  'Prisma',
  'Git',
  'PostgreSQL',
]

// projects
export const projects = [
  {
    title: 'Creator Affiliate Program',
    projectRoute: 'creator-affiliate',
    techType: 'Full Stack Development',
    projectType: 'Developer Project',
    appType: 'Web Application',
    duration: 'January 2023 - July 2023',
    image: BrandView,
    description: `The Creator Affiliate Program is the official in-house affiliate initiative by Creator.co. Alongside the guidance of my manager Alex Quast, I spearheaded this project to enable Creator.co's brand users to develop affiliate campaigns, and allow influencers to produce campaign posts with affiliate links. These links can track clicks, sales, and revenue, providing comprehensive analytics for each affiliate. This serves as the main affiliate program of Creator.co, in addition to utilizing Awin, Rakuten, ShareASale, and Impact Radius' affiliate programs.`,
    skills: ['React.js', 'Ant Design', 'React Query', 'Express.js', 'API'],
    live: null,
    live: null,
  },
  {
    title: 'North Graphic Supplies',
    projectRoute: 'ngs',
    techType: 'Frontend Development',
    projectType: 'Freelance Project',
    appType: 'Web Application',
    duration: 'January 2022 - February 2022',
    image: Ngs,
    description: `North Graphic, based in Davao, Philippines, specializes in high-quality label creation and printing using state-of-the-art equipment. I developed their website from scratch using Next.js and TailwindCSS, implementing an efficient routing system and optimizing images for enhanced performance. This project enabled me to apply my UI/UX design expertise, resulting in a visually appealing and highly functional website tailored to the company's specific needs as well as further enhancing my knowledge on React.js and Next.js.`,
    skills: ['Next.js', 'TailwindCSS'],
    live: 'https://aj-printing-website-2rz6nbwot-muhkyle17s-projects.vercel.app/',
    source: 'https://github.com/muhkyle17/aj-printing-website',
  },
  {
    title: 'Brew Lab PH',
    projectRoute: 'brewlabph',
    techType: 'Frontend Development',
    projectType: 'Freelance Project',
    appType: 'Web Application',
    duration: 'May 2021 - Jan 2022',
    image: BrewLab,
    description:
      'This project marked my entry into the freelance world. I developed an e-commerce website for a Philippine-based company specializing in home beer brewing kits. Designed with HTML, CSS, and Shopify, the site features a user-friendly interface where beer enthusiasts can easily purchase brewing kits and access a wide selection of recipes. The seamless integration of products ensures a smooth shopping experience for customers.',
    skills: ['HTML', 'CSS', 'Shopify'],
    live: 'https://muhkyle17.github.io/brewlabph/',
    source: 'https://github.com/muhkyle17/brewlabph',
  },
  {
    title: 'Instox',
    projectRoute: 'instox',
    techType: 'Full Stack Development',
    projectType: 'Passion Project',
    appType: 'Responsive Website',
    duration: 'September 2021',
    image: Instox,
    description:
      'Developed with a full stack Ruby on Rails and Tailwind CSS, my team and I created an app that enables users to buy and sell stocks within a matter of seconds. Leveraging a trading API, the app allows users to track and monitor multiple stocks in the U.S. stock market. Users gain access to live news and stock tracking features, empowering them to make informed investment decisions.',
    skills: ['Ruby on Rails', 'Tailwind CSS'],
    // live: 'https://instox.herokuapp.com/',
    source: 'https://github.com/bananakiu/stock-trading-app',
  },
  {
    title: 'Github Finder',
    projectRoute: 'github-finder',
    techType: 'Frontend Development',
    projectType: 'Passion Project',
    appType: 'Responsive Website',
    duration: 'August 2021',
    image: GithubFinder,
    description: `After gaining a strong foundation in JavaScript, I ventured into React.js to deepen my understanding and create more robust applications. I developed an app that leverages the GitHub API, allowing users to search for GitHub repositories. Upon searching for a GitHub user, the app displays a detailed profile description along with their latest repositories. Users can then click a link to navigate directly to the user's GitHub profile.`,
    skills: ['React.js', 'API'],
    live: 'https://github-finder-v8rdja29g-muhkyle17.vercel.app/',
    source: 'https://github.com/muhkyle17/github-finder',
  },
  {
    title: 'Natours',
    projectRoute: 'natours',
    techType: 'Frontend Development',
    projectType: 'Passion Project',
    appType: 'Responsive Website',
    duration: 'February 2021',
    image: Natours,
    description:
      'To enhance my CSS skills, I built a simple yet elegant website using SCSS that showcases an online service for booking outdoor tours. While not a functional app, this project features beautiful animations and aesthetic components, allowing me to deepen my understanding of CSS and design principles.',
    skills: ['HTML', 'CSS', 'SCSS'],
    live: 'https://muhkyle17.github.io/natours-project/',
    source: 'https://github.com/muhkyle17/natours-project',
  },
  {
    title: 'Omnifood',
    projectRoute: 'omnifood',
    techType: 'Frontend Development',
    projectType: 'Passion Project',
    appType: 'Responsive Website',
    duration: 'July 2020',
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
    projectType: 'Passion Project',
    appType: 'Responsive Website',
    duration: 'July 2021',
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
    projectType: 'Passion Project',
    appType: 'Responsive Website',
    duration: 'December 2021',
    image: WebDevPortfolio,
    description:
      'You know what they say - practice makes progress. Coded with just HTML and CSS, a simple yet pleasing portfolio website to continuously brush up on skills that should never be neglected.',
    skills: ['HTML', 'CSS'],
    live: 'https://muhkyle17.github.io/web-developer-portfolio/',
    source: 'https://github.com/muhkyle17/web-developer-portfolio',
  },
  {
    title: 'Ecommerce Checkout',
    projectRoute: 'ecommerce-stripe',
    image: EcommerceStripe,
  },
]

export const affiliateData = [
  {
    id: 'brandView',
    title: 'Brand View',
    image: BrandView,
    description:
      'In this view, brands can monitor the clicks, sales, and revenue generated from each of their affiliate links. They also have the ability to view the total clicks, total sales, and total revenue generated by all their affiliate links collectively. Additionally, brands can filter the data by creator and specify a date range for more detailed insights.',
  },
  {
    id: 'brandEditor',
    title: 'Brand Editor',
    image: BrandEditor,
    description:
      'Brands can manage their links by clicking on the Manage Links button, which opens a modal allowing them to create, edit, and delete links. This feature also enables them to set URL parameters, add descriptions, and, most importantly, set the commission percentage for each creator using the link.',
  },
  {
    id: 'brandCreatorView',
    title: 'Brand Creator View',
    image: BrandCreatorView,
    description:
      'This view was developed in response to multiple brands requesting a comprehensive overview of each influencer&lsquo;s performance. Brands wanted to see how many links each influencer is using, along with the total number of clicks, conversions, and commissions for each influencer. This feature allows brands to track the metrics of their top-performing influencers and compare them to the rest of their influencer roster.',
  },
  {
    id: 'brandCreatorProfile',
    title: 'Brand Creator Profile',
    image: BrandCreatorProfile,
    description:
      'A brand user can click on a specific influencer, triggering a side modal to appear. This side modal displays the influencer&lsquo;s complete profile, including their niche, address, and detailed performance metrics for each of their social profiles.',
  },
  {
    id: 'creatorPage',
    title: 'Creator Page',
    image: CreatorPage,
    description:
      'Lastly, this view is accessible to influencers on their creator profiles. They can see all their clicks, conversions, and commissions, as well as view each of their links with the corresponding metrics. Influencers can filter the data by brand and specify a date range for more detailed insights. Additionally, they can view their pending payouts, including the amount and the expected payment date.',
  },
]

export const projectsShortened = [
  {
    title: 'Creator Affiliate Program',
    projectRoute: 'creator-affiliate',
    techType: 'Full Stack Development',
    projectType: 'Developer Project',
    appType: 'Web Application',
    duration: 'January 2022 - July 2022',
    image: BrandView,
    description: `The Creator Affiliate Program is the official in-house affiliate initiative by Creator.co. Alongside the guidance of my manager Alex Quast, I spearheaded this project to enable Creator.co's brand users to develop affiliate campaigns, and allow influencers to produce campaign posts with affiliate links. These links can track clicks, sales, and revenue, providing comprehensive analytics for each affiliate. This serves as the main affiliate program of Creator.co, in addition to utilizing Awin, Rakuten, ShareASale, and Impact Radius' affiliate programs.`,
    skills: ['React.js', 'Ant Design', 'React Query', 'Express.js', 'API'],
    live: null,
    live: null,
  },
  {
    title: 'North Graphic Supplies',
    projectRoute: 'ngs',
    techType: 'Frontend Development',
    projectType: 'Freelance Project',
    appType: 'Web Application',
    duration: 'January 2022 - February 2022',
    image: Ngs,
    description: `North Graphic, based in Davao, Philippines, specializes in creating and printing high-quality labels using state-of-the-art equipment. I developed their website from scratch using Next.js and TailwindCSS, leveraging my expertise in Next.js to implement an efficient routing system and optimize images for better performance. This project allowed me to apply my knowledge of UI/UX design to create a visually appealing and highly functional website that meets the company's specific needs.`,
    skills: ['Next.js', 'TailwindCSS'],
    live: 'https://aj-printing-website-2rz6nbwot-muhkyle17s-projects.vercel.app/',
    source: 'https://github.com/muhkyle17/aj-printing-website',
  },
  {
    title: 'Brew Lab PH',
    projectRoute: 'brewlabph',
    techType: 'Frontend Development',
    projectType: 'Freelance Project',
    appType: 'Web Application',
    duration: 'May 2021 - Jan 2022',
    image: BrewLab,
    description:
      'An e-commerce website for a Philippine based company that sells complete home beer brewing kits that are easy and simple for beer enthusiasts to easily brew their own beer at home. Built using CSS and Shopify, I individually coded their wide selection of their recipes and products. Showcasing them was not easy!',
    skills: ['HTML', 'CSS', 'Shopify'],
    live: 'https://muhkyle17.github.io/brewlabph/',
    source: 'https://github.com/muhkyle17/brewlabph',
  },
]

export const experience = [
  {
    company: 'Creator.co',
    jobTitle: 'Software Developer',
    duration: 'Jan 2023 - Present',
    location: 'Vancouver, Canada',
    responsibilities: [
      'Spearheaded the development of the affiliate programs attracting 30+ brand customers such as BestBuy, Thinkific, The Body Shop, and Moores.',
      'Contributed to the front-end services using React.js, styled components, react context, ant design and react-query.',
      'Developed back-end services for webhooks and integrations using Node.js (Express.js) and Prisma, managing data with MySQL and PostgreSQL databases.',
      'Diagnosed and fixed bugs to ensure platform efficiency and enhance user satisfaction.',
      'Worked closely with cross-functional teams to align product vision to create a cohesive and user-friendly platform',
    ],
  },
  {
    company: 'Growsari',
    jobTitle: 'Front-End Developer',
    jobType: 'Full-time Contract Based',
    duration: 'Jan 2022 - Feb 2024',
    location: 'Manila, Philippines',
    responsibilities: [
      'Built an internal task tracking app using Next.js, enabling 80+ managers to track employee tasks.',
      'Utilized Apollo Client to integrate task tracking apps to GraphQL backend, enhancing frontend functionality.',
      'Implemented the interface for the company’s task management system, enabling managers to create, update, display, and delete forms and tasks.',
      'Revamped the internal task tracker store app with React.js and Apollo Client, enabling users to log over 5,000 call attempts and tasks per assigned store',
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
    company: 'North Graphic Supplies',
    duration: 'May 2021 - Jan 2022',
    githubLink: 'https://github.com/muhkyle17/aj-printing-website',
    liveLink: 'https://aj-printing-website-2rz6nbwot-muhkyle17s-projects.vercel.app/',
    shortDescription:
      'North Graphic Supplies, based in Davao, Philippines, a company that specializes in high-quality label creation and printing using state-of-the-art equipment.',
    detailedDescription: [
      'Developed their website from scratch using Next.js and TailwindCSS.',
      'Implemented an efficient routing system and optimizing images for enhanced performance.',
      "Applied UI/UX design knowledge, resulting in a visually appealing and highly functional website tailored to the company's specific needs.",
    ],
  },
  {
    company: 'Brew Lab PH',
    duration: 'Jan 2022 - Feb 2022',
    githubLink: 'https://github.com/muhkyle17/brewlabph/tree/main',
    liveLink: 'https://muhkyle17.github.io/brewlabph/',
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
