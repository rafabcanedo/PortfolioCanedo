import Title from '../../components/Design/Title'
import {
  SiTypescript,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedux,
  SiAngular,
} from 'react-icons/si'

export default function Experience() {
  return (
    <div className="w-full h-screen">
      <Title title="Experience" />

      <div className="flex items-center justify-center">
        <span className="text-subtitle font-medium mt-4 mb-4">
          What tecnologias I use every day?
        </span>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
          <SiTypescript
            size={30}
            color="#c3c3c3"
            className="hover:bg-primary"
          />
          <p className="dark:text-subtitle text-primary font-medium text-lg">
            Typescript
          </p>
        </div>
        <div>
          <SiJavascript
            size={30}
            color="#c3c3c3"
            className="hover:bg-primary"
          />
          <p className="dark:text-subtitle text-primary font-medium text-lg">
            Javascript
          </p>
        </div>
        <div>
          <SiNextdotjs size={30} color="#c3c3c3" className="hover:bg-primary" />
          <p className="dark:text-subtitle text-primary font-medium text-lg">
            NextJs
          </p>
        </div>
        <div>
          <SiAngular size={30} color="#c3c3c3" className="hover:bg-primary" />
          <p className="dark:text-subtitle text-primary font-medium text-lg">
            Angular
          </p>
        </div>
        <div>
          <SiReact size={30} color="#c3c3c3" className="hover:bg-primary" />
          <p className="dark:text-subtitle text-primary font-medium text-lg">
            React
          </p>
        </div>
        <div>
          <SiRedux size={30} color="#c3c3c3" className="hover:bg-primary" />
          <p className="dark:text-subtitle text-primary font-medium text-lg">
            Redux
          </p>
        </div>
        <div>
          <SiNodedotjs size={30} color="#c3c3c3" className="hover:bg-primary" />
          <p className="dark:text-subtitle text-primary font-medium text-lg">
            NodeJs
          </p>
        </div>
        <div>
          <SiNestjs size={30} color="#c3c3c3" className="hover:bg-primary" />
          <p className="dark:text-subtitle text-primary font-medium text-lg">
            NestJs
          </p>
        </div>
        <div>
          <SiJest size={30} color="#c3c3c3" className="hover:bg-primary" />
          <p className="dark:text-subtitle text-primary font-medium text-lg">
            Jest
          </p>
        </div>
        <div>
          <SiPrisma size={30} color="#c3c3c3" className="hover:bg-primary" />
          <p className="dark:text-subtitle text-primary font-medium text-lg">
            Prisma
          </p>
        </div>
        <div>
          <SiPostman size={30} color="#c3c3c3" className="hover:bg-primary" />
          <p className="dark:text-subtitle text-primary font-medium text-lg">
            Postman
          </p>
        </div>
        <div>
          <SiNotion size={30} color="#c3c3c3" className="hover:bg-primary" />
          <p className="dark:text-subtitle text-primary font-medium text-lg">
            Notion
          </p>
        </div>
      </div>
    </div>
  )
}
