import { useRef } from 'react'
import Lottie from 'lottie-react'
import animationData from '../../assets/phoneanimation.json'
import Title from '../../components/Design/Title'

export default function About() {
  const phoneRef = useRef()
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <Title title="About" />
        <div>
          <h3>Test Content</h3>
          <Lottie
            onComplete={() => {
              phoneRef.current.setDirection(-1)
              // eslint-disable-next-line no-unused-expressions
              phoneRef.current.play()
            }}
            lottieRef={phoneRef}
            loop={false}
            animationData={animationData}
          />
        </div>
      </div>
    </div>
  )
}
