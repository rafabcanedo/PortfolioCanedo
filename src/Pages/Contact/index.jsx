import Title from '../../components/Design/Title'
import { InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

export default function Contact() {
  return (
    <div>
      <div id="contact" className="w-full bg-dark h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center">
            <Title title="Contact" />
            <span className="text-subtitle font-alt mt-4 mb-4">
              How do you find me on Socials?
            </span>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0 mt-12">
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
              <div>
                <a
                  href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/"
                  className="dark:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinLogo size={35} className="w-20 mx-auto" />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-[#363636] font-medium">Linkedin</span>
                <span className="text-subtitle">Rafael Canedo</span>
              </div>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
              <div>
                <a
                  href="https://www.instagram.com/canedopriv/"
                  className="dark:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogo size={35} className="w-20 mx-auto" />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-[#363636] font-medium">Instagram</span>
                <span className="text-subtitle">@canedopriv</span>
              </div>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer">
              <div>
                <a
                  href="https://github.com/rafabcanedo"
                  className="dark:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubLogo size={35} className="w-20 mx-auto" />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-[#363636] font-medium">Github</span>
                <span className="text-subtitle">Rafael Canedo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
