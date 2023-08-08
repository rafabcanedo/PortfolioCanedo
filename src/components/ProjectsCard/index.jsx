import Ignitecall from '../../assets/ignitecall.png'
import Blog from '../../assets/blog1.png'
import Canecocup from '../../assets/canecocup.png'
import Finally from '../../assets/finally.jpg'
import Jandrade from '../../assets/jorgeandrade.png'
import Andromeda from '../../assets/andromeda.png'
import Ignitedt from '../../assets/ignitedt.png'
import Nlwspace from '../../assets/nlwspace.png'

export function ProjectsCard() {
 return (
  <div className='grid grid-cols-2 mt-24'>
      <div className='relative cursor-pointer hover:opacity-40'>
       <img src={Ignitecall} alt="Image Project" width={600} height={600} />
       <div>
        <span>Ignite Call</span>
        <p>NextJs | Storybook</p>
       </div>
      </div>

      <div>
       <img src={Blog} alt="Image Project" width={600} height={600} />
      </div>

      <div>
       <img src={Canecocup} alt="Image Project" width={600} height={600} />
      </div>

      <div>
       <img src={Finally} alt="Image Project" width={300} height={300} />
      </div>

      <div>
       <img src={Jandrade} alt="Image Project" width={600} height={600} />
      </div>

      <div>
       <img src={Andromeda} alt="Image Project" width={600} height={600} />
      </div>

      <div>
       <img src={Ignitedt} alt="Image Project" width={600} height={600} />
      </div>

      <div>
       <img src={Nlwspace} alt="Image Project" width={600} height={600} />
      </div>
  </div>
 )
}