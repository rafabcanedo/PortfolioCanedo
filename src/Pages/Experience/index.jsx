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
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <Title title="Experience" />
          <span className="text-subtitle font-medium mt-4 mb-4">
            What tecnologias I use every day?
          </span>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg dark:shadow-[#393e46] cursor-pointer">
            <SiTypescript size={30} color="#c3c3c3" className="w-20 mx-auto" />
            <p className="dark:text-subtitle text-primary font-medium text-lg">
              Typescript
            </p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg dark:shadow-[#393e46] cursor-pointer">
            <SiJavascript size={30} color="#c3c3c3" className="w-20 mx-auto" />
            <p className="dark:text-subtitle text-primary font-medium text-lg">
              Javascript
            </p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg dark:shadow-[#393e46] cursor-pointer">
            <SiNextdotjs size={30} color="#c3c3c3" className="w-20 mx-auto" />
            <p className="dark:text-subtitle text-primary font-medium text-lg">
              NextJs
            </p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg dark:shadow-[#393e46] cursor-pointer">
            <SiAngular size={30} color="#c3c3c3" className="w-20 mx-auto" />
            <p className="dark:text-subtitle text-primary font-medium text-lg">
              Angular
            </p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg dark:shadow-[#393e46] cursor-pointer">
            <SiReact size={30} color="#c3c3c3" className="w-20 mx-auto" />
            <p className="dark:text-subtitle text-primary font-medium text-lg">
              React
            </p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg dark:shadow-[#393e46] cursor-pointer">
            <SiRedux size={30} color="#c3c3c3" className="w-20 mx-auto" />
            <p className="dark:text-subtitle text-primary font-medium text-lg">
              Redux
            </p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg dark:shadow-[#393e46] cursor-pointer">
            <SiNodedotjs size={30} color="#c3c3c3" className="w-20 mx-auto" />
            <p className="dark:text-subtitle text-primary font-medium text-lg">
              NodeJs
            </p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg dark:shadow-[#393e46] cursor-pointer">
            <SiNestjs size={30} color="#c3c3c3" className="w-20 mx-auto" />
            <p className="dark:text-subtitle text-primary font-medium text-lg">
              NestJs
            </p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg dark:shadow-[#393e46] cursor-pointer">
            <SiJest size={30} color="#c3c3c3" className="w-20 mx-auto" />
            <p className="dark:text-subtitle text-primary font-medium text-lg">
              Jest
            </p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg dark:shadow-[#393e46] cursor-pointer">
            <SiPrisma size={30} color="#c3c3c3" className="w-20 mx-auto" />
            <p className="dark:text-subtitle text-primary font-medium text-lg">
              Prisma
            </p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg dark:shadow-[#393e46] cursor-pointer">
            <SiPostman size={30} color="#c3c3c3" className="w-20 mx-auto" />
            <p className="dark:text-subtitle text-primary font-medium text-lg">
              Postman
            </p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg dark:shadow-[#393e46] cursor-pointer">
            <SiNotion size={30} color="#c3c3c3" className="w-20 mx-auto" />
            <p className="dark:text-subtitle text-primary font-medium text-lg">
              Notion
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
