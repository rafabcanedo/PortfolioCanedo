import Title from '../../components/Design/Title'
import {
  InstagramLogo,
  LinkedinLogo,
  TwitchLogo,
  GithubLogo,
} from '@phosphor-icons/react'

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Title title="Contact" />

      <div className="flex flex-row items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div>
            <a
              href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/"
              className="dark:text-white"
            >
              <LinkedinLogo size={35} />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[#363636] font-medium">Linkedin</span>
            <span className="text-subtitle">Rafael Canedo</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <a
              href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/"
              className="dark:text-white"
            >
              <InstagramLogo size={35} />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[#363636] font-medium">Instagram</span>
            <span className="text-subtitle">@canedodev</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <a
              href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/"
              className="dark:text-white"
            >
              <TwitchLogo size={35} />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[#363636] font-medium">Twitch</span>
            <span className="text-subtitle">Canedopriv</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <a
              href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/"
              className="dark:text-white"
            >
              <GithubLogo size={35} />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[#363636] font-medium">Github</span>
            <span className="text-subtitle">Rafael Canedo</span>
          </div>
        </div>
      </div>
    </div>
  )
}
