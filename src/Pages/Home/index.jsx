import Logo from '../../assets/Avatar.png'
import {
  InstagramLogo,
  LinkedinLogo,
  TwitchLogo,
  GithubLogo,
} from '@phosphor-icons/react'
import Button from '../../components/Button'

export default function Home() {
  return (
    <div id="home" className="flex flex-col items-center justify-center mt-12 h-screen">
      <img
        src={Logo}
        alt="Logo CanedoDev"
        width={300}
        height={300}
        className="rounded-2xl"
      />

      <div className="flex flex-col">
        <h2 className="font-sans text-3xl font-bold dark:text-white">
          Rafael Canedo
        </h2>

        <div className="flex flex-col mb-8">
          <span className="font-semibold font-sans text-lg dark:text-white">
            I'm Front End Developer
          </span>
          <p className="font-medium text-sm text-subtitle">
            Web Developer and coding my life
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-4 mb-6">
        <a
          href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/"
          className="cursor-pointer hover:text-primary dark:text-white dark:hover:text-primary"
        >
          <LinkedinLogo size={28} />
        </a>
        <a
          href="https://www.instagram.com/canedodev/"
          target="_blank"
          className="cursor-pointer hover:text-primary dark:text-white dark:hover:text-primary"
          rel="noreferrer"
        >
          <InstagramLogo size={28} />
        </a>
        <a
          href="https://www.twitch.tv/canedopriv"
          target="_blank"
          className="cursor-pointer hover:text-primary dark:text-white dark:hover:text-primary"
          rel="noreferrer"
        >
          <TwitchLogo size={28} />
        </a>
        <a
          href="https://github.com/rafabcanedo"
          target="_blank"
          className="cursor-pointer hover:text-primary dark:text-white dark:hover:text-primary"
          rel="noreferrer"
        >
          <GithubLogo size={28} />
        </a>
      </div>

      <Button title="Know More" />
    </div>
  )
}

// className="flex-1 flex items-center justify-center h-full"
