import { useRef } from 'react'
import Title from '../../components/Design/Title'
import Lottie from 'lottie-react'
import animationData from '../../assets/phoneanimation.json'
import { AiFillCaretRight } from 'react-icons/ai'
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

export default function About() {
  const phoneRef = useRef()
  return (
    <>
      <div id="about" className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          {/* <Title title="About Me" /> */}
          <div className="flex flex-col sm:flex-row items-center gap-12">
            <Lottie
              onComplete={() => {
                phoneRef.current.setDirection(-1)
                // eslint-disable-next-line no-unused-expressions
                phoneRef.current.play()
              }}
              lottieRef={phoneRef}
              loop={false}
              animationData={animationData}
              style={{ height: 400, width: 400 }}
            />
            <div className="dark:text-subtitle items-center">
              <Title title="About Me" />
              <span className="font-sans text-base">
                I'm a creative developer. Draw and coding all my projects.
                <br />
                I like this workflow. I'm always studying and coding different
                projects
                <br />
                coding my life every day. Today i'm work with
                <br /> Web Development (React and Typescript) and <br />
                Mobile Development (React Native and Typescript)
              </span>

              <div>
                <span className="font-sans">
                  Here are a few technologies I've been working with recently:
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="flex flex-row items-center">
                  <AiFillCaretRight size={20} color="#ffc93c" />
                  <p className="cursor-pointer hover:text-primary">
                    Javascript
                  </p>
                </div>

                <div className="flex flex-row items-center">
                  <AiFillCaretRight size={20} color="#ffc93c" />
                  <p className="cursor-pointer hover:text-primary">Typecript</p>
                </div>

                <div className="flex flex-row items-center">
                  <AiFillCaretRight size={20} color="#ffc93c" />
                  <p className="cursor-pointer hover:text-primary">React</p>
                </div>

                <div className="flex flex-row items-center">
                  <AiFillCaretRight size={20} color="#ffc93c" />
                  <p className="cursor-pointer hover:text-primary">NextJs</p>
                </div>

                <div className="flex flex-row items-center">
                  <AiFillCaretRight size={20} color="#ffc93c" />
                  <p className="cursor-pointer hover:text-primary">NodeJs</p>
                </div>

                <div className="flex flex-row items-center">
                  <AiFillCaretRight size={20} color="#ffc93c" />
                  <p className="cursor-pointer hover:text-primary">Prisma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="experience" className="w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center">
            <Title title="Experience" />
            <span className="text-subtitle font-medium mt-4 mb-4">
              What tecnologias I use every day?
            </span>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
              <SiTypescript
                size={30}
                color="#c3c3c3"
                className="w-20 mx-auto"
              />
              <p className="dark:text-subtitle text-primary font-medium text-lg">
                Typescript
              </p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
              <SiJavascript
                size={30}
                color="#c3c3c3"
                className="w-20 mx-auto"
              />
              <p className="dark:text-subtitle text-primary font-medium text-lg">
                Javascript
              </p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
              <SiNextdotjs size={30} color="#c3c3c3" className="w-20 mx-auto" />
              <p className="dark:text-subtitle text-primary font-medium text-lg">
                NextJs
              </p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
              <SiAngular size={30} color="#c3c3c3" className="w-20 mx-auto" />
              <p className="dark:text-subtitle text-primary font-medium text-lg">
                Angular
              </p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
              <SiReact size={30} color="#c3c3c3" className="w-20 mx-auto" />
              <p className="dark:text-subtitle text-primary font-medium text-lg">
                React
              </p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
              <SiRedux size={30} color="#c3c3c3" className="w-20 mx-auto" />
              <p className="dark:text-subtitle text-primary font-medium text-lg">
                Redux
              </p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
              <SiNodedotjs size={30} color="#c3c3c3" className="w-20 mx-auto" />
              <p className="dark:text-subtitle text-primary font-medium text-lg">
                NodeJs
              </p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
              <SiNestjs size={30} color="#c3c3c3" className="w-20 mx-auto" />
              <p className="dark:text-subtitle text-primary font-medium text-lg">
                NestJs
              </p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
              <SiJest size={30} color="#c3c3c3" className="w-20 mx-auto" />
              <p className="dark:text-subtitle text-primary font-medium text-lg">
                Jest
              </p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
              <SiPrisma size={30} color="#c3c3c3" className="w-20 mx-auto" />
              <p className="dark:text-subtitle text-primary font-medium text-lg">
                Prisma
              </p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
              <SiPostman size={30} color="#c3c3c3" className="w-20 mx-auto" />
              <p className="dark:text-subtitle text-primary font-medium text-lg">
                Postman
              </p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
              <SiNotion size={30} color="#c3c3c3" className="w-20 mx-auto" />
              <p className="dark:text-subtitle text-primary font-medium text-lg">
                Notion
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/*
 I'm creative developer. Draw, Coding my projects
          I love that's workflow
*/
