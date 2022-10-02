//  icons
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

// skills images
import HtmlSkill from './public/skills/html5.png'
import CssSkill from './public/skills/css3.png'
import JsSkill from './public/skills/js.png'
import Reactjs from './public/skills/reactjs.png'
import Nextjs from './public/skills/nextjs.png'
import GitSkill from './public/skills/git.png'
import RailsSkill from './public/skills/rails.png'
import TailwindSkill from './public/skills/tailwindcss.png'
// import ApolloSkill from './public/skills/apolloclient.png'

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
