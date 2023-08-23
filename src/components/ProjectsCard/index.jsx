import Agenda from '../../assets/ignitecall.png'
import Blog from '../../assets/blog1.png'
import Canecocup from '../../assets/canecocup.png'
import Feedback from '../../assets/feedback.jpg'
import Jandrade from '../../assets/jorgeandrade.png'
import Andromeda from '../../assets/andromeda.png'
import Ignitedt from '../../assets/ignitedt.png'
import Nlwspace from '../../assets/nlwspace.png'

export function ProjectsCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-24 gap-12 sm:px-0">
      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
        <img
          src={Agenda}
          alt="Image Project"
          width={600}
          height={600}
          className="block w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ignite Call
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            NextJs | Prisma
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
        <img
          src={Blog}
          alt="Image Project"
          width={600}
          height={600}
          className="block w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Blog
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            NextJs | Sanity
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
        <img
          src={Canecocup}
          alt="Image Project"
          width={600}
          height={600}
          className="block w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Caneco Cup
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            ViteJs | NodeMailer
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
        <img
          src={Feedback}
          alt="Image Project"
          width={300}
          height={300}
          className="block w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Feedback
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            ViteJs | Typescript
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
        <img
          src={Jandrade}
          alt="Image Project"
          width={600}
          height={600}
          className="block w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Jorge Andrade
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            ViteJs | Tailwindcss
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
        <img
          src={Andromeda}
          alt="Image Project"
          width={600}
          height={600}
          className="block w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Andrômeda
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            NextJs | Redux
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
        <img
          src={Ignitedt}
          alt="Image Project"
          width={600}
          height={600}
          className="block w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full text-dark flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Ignite Call
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            NextJs | Context
          </p>
        </div>
      </div>

      <div className="relative cursor-pointer hover:opacity-40 w-[400px]">
        <img
          src={Nlwspace}
          alt="Image Project"
          width={600}
          height={600}
          className="block w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col font-sans items-center justify-center opacity-0 hover:opacity-100 transition-opacity hover:translate-y-0">
          <span className="text-2xl font-sans translate-y-5 transition-transform">
            Nlw Space
          </span>
          <p className="text-lg font-sans translate-y-5 transition-transform">
            NextJs | Prisma
          </p>
        </div>
      </div>
    </div>
  )
}
