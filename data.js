// Icons
import {
  // FiYoutube,
  // FiInstagram,
  FiTwitter,
  FiGithub,
  // FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
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

export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
]

// social
export const social = [
  {
    icon: <FiTwitter />,
    href: 'https://twitter.com/MiksterMik',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/muhkyle17',
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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt libero ipsa maiores nemo dolor, aliquid ducimus distinctio reprehenderit quibusdam alksjdf alsfei sjfioe jaejfuiw isuf uehfouuosefjw owefjiosej fsj oejfs iosfeooisjf! ',
    skills: ['HTML', 'CSS', 'Shopify'],
    live: 'https://brewlab.ph/',
    source: 'https://github.com/muhkyle17/brewlabph',
  },
  {
    title: 'Instox',
    image: Instox,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt libero ipsa maiores nemo dolor, aliquid ducimus distinctio reprehenderit quibusdam alksjdf alsfei sjfioe jaejfuiw isuf uehfouuosefjw owefjiosej fsj oejfs iosfeooisjf! ',
    skills: ['HTML', 'Ruby on Rails', 'Tailwind CSS'],
    live: 'https://instox.herokuapp.com/',
    source: 'https://github.com/bananakiu/stock-trading-app',
  },
  {
    title: 'Natours',
    image: Natours,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt libero ipsa maiores nemo dolor, aliquid ducimus distinctio reprehenderit quibusdam alksjdf alsfei sjfioe jaejfuiw isuf uehfouuosefjw owefjiosej fsj oejfs iosfeooisjf! ',
    skills: ['HTML', 'CSS', 'SCSS'],
    live: 'https://muhkyle17.github.io/natours-project/',
    source: 'https://github.com/muhkyle17/natours-project',
  },
  {
    title: 'Omnifood',
    image: Omnifood,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt libero ipsa maiores nemo dolor, aliquid ducimus distinctio reprehenderit quibusdam alksjdf alsfei sjfioe jaejfuiw isuf uehfouuosefjw owefjiosej fsj oejfs iosfeooisjf! ',
    skills: ['HTML', 'CSS'],
    live: 'https://muhkyle17.github.io/ominfood-project/',
    source: 'https://github.com/muhkyle17/ominfood-project',
  },
  {
    title: 'Tic Tac Toe',
    image: TicTacToe,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt libero ipsa maiores nemo dolor, aliquid ducimus distinctio reprehenderit quibusdam alksjdf alsfei sjfioe jaejfuiw isuf uehfouuosefjw owefjiosej fsj oejfs iosfeooisjf! ',
    skills: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://muhkyle17.github.io/TicTacToe/',
    source: 'https://github.com/muhkyle17/TicTacToe',
  },
  {
    title: 'Web Dev Portfolio',
    image: WebDevPortfolio,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt libero ipsa maiores nemo dolor, aliquid ducimus distinctio reprehenderit quibusdam alksjdf alsfei sjfioe jaejfuiw isuf uehfouuosefjw owefjiosej fsj oejfs iosfeooisjf! ',
    skills: ['HTML', 'CSS'],
    live: 'https://muhkyle17.github.io/web-developer-portfolio/',
    source: 'https://github.com/muhkyle17/web-developer-portfolio',
  },
]
