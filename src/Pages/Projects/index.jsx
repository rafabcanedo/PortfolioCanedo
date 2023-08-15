import Title from '../../components/Design/Title'
import { ProjectsCard } from '../../components/ProjectsCard'

export default function Projects() {
  return (
    <div id="projects" className="min-h-screen">
      <Title title="Projects" />

      <div className='flex items-center justify-center'>
       <ProjectsCard />
      </div>
    </div>
  )
}
