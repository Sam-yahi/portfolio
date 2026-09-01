
import { Hero } from '../assets/components/Hero'
import { ProjectsPage } from './Projects'
import { About } from './About'
import {Skills} from './skills'
import { Contact } from './Contact'

export const Home = () => {
  return (
    <div>
      
      <Hero />
      <About />
      <ProjectsPage />
      <Skills />
      <Contact />


    </div>
  )
}
