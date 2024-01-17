import { Link } from 'react-router-dom'
import Logo from '../../assets/Avatar.png'
import {
  InstagramLogo,
  LinkedinLogo,
  TwitchLogo,
  GithubLogo,
} from '@phosphor-icons/react'
import ProjectsHome from '../../components/ProjectsCard/ProjectsHome/ProjectsHome'
import { Feedbacks } from '../../components/Feedbacks/Feedbacks'

export default function Home() {
  return (
    <div className="mt-16 h-screen px-36">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div
          id="home"
          className="flex flex-col md:flex-row items-center justify-start"
        >
          <img
            src={Logo}
            alt="Logo CanedoDev"
            width={180}
            height={180}
            className="rounded-2xl"
          />

          <div className="flex flex-col">
            <h2 className="font-sans text-3xl font-bold dark:text-white">
              Rafael Canedo
            </h2>

            <div className="flex flex-col mb-8">
              <span className="font-semibold font-sans text-lg dark:text-white">
                I'm a Front End Developer
              </span>
              <p className="font-alt text-sm text-subtitle">
                Web Developer and coding my life
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end px-14">
          <Link to="/about">
            <button className="flex items-center justify-center relative border-2 font-medium border-primary bg-transparent py-2 px-2 rounded-lg text-primary transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-lef before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
              Know More
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <a
          href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/"
          target="_blank"
          className="flex flex-row items-center gap-1"
          rel="noreferrer"
        >
          <LinkedinLogo
            size={28}
            className="dark:text-subtitle hover:text-primary"
          />
          <span className="dark:text-subtitle hover:text-primary">
            Linkedin
          </span>
        </a>
        <a
          href="https://www.instagram.com/canedodev/"
          target="_blank"
          className="flex flex-row items-center gap-1"
          rel="noreferrer"
        >
          <InstagramLogo size={28} className="dark:text-subtitle" />
          <span className="dark:text-subtitle">Instagram</span>
        </a>
        <a
          href="https://www.twitch.tv/canedopriv"
          target="_blank"
          className="flex flex-row items-center gap-1"
          rel="noreferrer"
        >
          <TwitchLogo size={28} className="dark:text-subtitle" />
          <span className="dark:text-subtitle">Twitch</span>
        </a>

        <a
          href="https://github.com/rafabcanedo"
          target="_blank"
          className="flex flex-row items-center gap-1"
          rel="noreferrer"
        >
          <GithubLogo size={28} className="dark:text-subtitle" />
          <span className="dark:text-subtitle">Github</span>
        </a>
      </div>

      <div className="flex flex-col gap-2 rounded-lg border-nuv px-8 py-6">
        <h3 className="dark:text-primary font-alt text-xl underline decoration-primary">
          About
        </h3>

        <span className="dark:text-gray font-alt ml-4 mr-4">
          Hey, my name is Rafael Canedo. Brazilian Delevoper with a dream. Work
          anything projects for a better future. I'm a technology enthusiast
          always looking for a new opportunities to learn and up my profissional
          <br />
          side. I work in Web Developmento and Mobile Developmento with some
          frameworks...
        </span>

        <div className="flex justify-end px-16 mt-4">
          <a href="/about">
            <p className="dark:text-test font-alt text-sm cursor-pointer hover:underline hover:underline-offset-1 decoration-primary">
              Know More
            </p>
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <ProjectsHome />
        <Feedbacks />
      </div>
    </div>
  )
}
