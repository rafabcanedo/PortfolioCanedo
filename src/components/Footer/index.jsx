import { InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

export function Footer() {
  return (
    <div className="flex flex-col mt-8 p-8 justify-center items-center gap-2 shadow">
      <p className="text-subtitle">
        &copy; {new Date().getFullYear()} Canedo. All rights reserved
      </p>

      <div className="flex flex-row gap-2">
        <a
          href="https://www.instagram.com/azzurroapp//"
          target="_blank"
          rel="nooperner noreferrer"
          className="text-subtitle hover:text-primary cursor-pointer"
        >
          <InstagramLogo size={20} />
        </a>

        <a
          href="https://github.com/rafabcanedo"
          target="_blank"
          rel="nooperner noreferrer"
          className="text-subtitle hover:text-primary cursor-pointer"
        >
          <GithubLogo size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/"
          target="_blank"
          rel="nooperner noreferrer"
          className="text-subtitle hover:text-primary cursor-pointer"
        >
          <LinkedinLogo size={20} />
        </a>
      </div>
    </div>
  )
}
