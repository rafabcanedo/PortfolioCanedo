import Title from '../../components/Design/Title'
import { ProjectsCard } from '../../components/ProjectsCard'

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Title title="Projects" />

      <div>
       <ProjectsCard />
      </div>
    </div>
  )
}
