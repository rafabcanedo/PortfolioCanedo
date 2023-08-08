import { useRef } from 'react'
import Title from '../../components/Design/Title'
import Lottie from 'lottie-react'
import animationData from '../../assets/phoneanimation.json'
import { AiFillCaretRight } from "react-icons/ai";

export default function About() {
  const phoneRef = useRef()
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        {/*<Title title="About Me" />*/}
        <div className='flex flex-row items-center'>
          <Lottie
            onComplete={() => {
              phoneRef.current.setDirection(-1)
              // eslint-disable-next-line no-unused-expressions
              phoneRef.current.play()
            }}
            lottieRef={phoneRef}
            loop={false}
            animationData={animationData}
            style={{ height: 500, width: 500}}
          />
        <div className='dark:text-subtitle items-center'>
        <Title title="About Me" />
         <span className='font-sans text-base'>
          I'm a creative developer. Draw and coding all my projects.<br />
          I like this workflow. Always i'm studying and coding different projects<br />
          coding my life every day.
          Today i'm work with<br /> Web Development (React and Typescript) and <br />
          Mobile Development (React Native and Typescript)
         </span>

         <div>
          <span className='font-sans'>Here are a few technologies I've been working with recently:</span>
         </div>

         <div className='grid grid-cols-3 gap-4 mt-6'>
          <div className='flex flex-row items-center'>
          <AiFillCaretRight size={20} color="#ffc93c" />
          <p className='cursor-pointer hover:text-primary'>Javascript</p>
          </div>

          <div className='flex flex-row items-center'>
          <AiFillCaretRight size={20} color="#ffc93c" />
          <p className='cursor-pointer hover:text-primary'>Typecript</p>
          </div>

          <div className='flex flex-row items-center'>
          <AiFillCaretRight size={20} color="#ffc93c" />
          <p className='cursor-pointer hover:text-primary'>React</p>
          </div>

          <div className='flex flex-row items-center'>
          <AiFillCaretRight size={20} color="#ffc93c" />
          <p className='cursor-pointer hover:text-primary'>NextJs</p>
          </div>

          <div className='flex flex-row items-center'>
          <AiFillCaretRight size={20} color="#ffc93c" />
          <p className='cursor-pointer hover:text-primary'>NodeJs</p>
          </div>

          <div className='flex flex-row items-center'>
          <AiFillCaretRight size={20} color="#ffc93c" />
          <p className='cursor-pointer hover:text-primary'>Prisma</p>
          </div>

         </div>
        </div>
        </div>
      </div>
    </div>
  )
}

/*
 I'm creative developer. Draw, Coding my projects
          I love that's workflow
*/