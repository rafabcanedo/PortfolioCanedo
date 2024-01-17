import { GithubLogo, Code, Star, Rocket, Trophy } from '@phosphor-icons/react'

export default function ProjectsHome() {
  return (
    <div>
      <h3 className="dark:text-test">Projects Home</h3>
      <div className="flex flex-col justify-start">
        <h3 className="dark:text-primary font-alt text-xl underline decoration-primary">
          Some Projects
        </h3>
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex flex-col gap-6">
            <div className="flex h-48 w-full max-w-md flex-col justify-center overflow-hidden rounded-lg bg-nuv dark:bg-nav px-5 py-0 shadow-xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#d1d0d4] dark:bg-test p-1">
                <Star
                  size={28}
                  weight="light"
                  className="text-nav hover:text-[#ffc93c] dark:text-subtitle cursor-pointer hover:dark:text-[#ffc93c]"
                />
              </span>
              <h2 className="text-subtitle dark:text-gray mt-2 text-lg font-jost text-gray-800">
                Ignite Call
              </h2>
              <p className="text-subtitle line-clamp-2 mt-1 dark:text-gray">
                Sempre estamos abertos a novas ideias de projetos, ideias sobre
                contribuição da comunidade. Somos uma comunidade e precisamos
                que todos os desenvolvedor contribua.
              </p>
              <div className="flex justify-end px-16 mt-4 gap-2">
                <a
                  href="https://github.com/rafabcanedo/IgniteCall-06"
                  target="_blank"
                  className="dark:text-test font-alt text-sm cursor-pointer"
                  rel="noreferrer"
                >
                  <GithubLogo className="text-base text-primary" />
                </a>
                <a className="dark:text-test font-alt text-sm cursor-not-allowed disabled">
                  <Code className="text-base text-[#98d9b5]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-4">
          <div className="flex flex-col gap-6">
            <div className="flex h-48 w-full max-w-md flex-col justify-center overflow-hidden rounded-lg bg-nuv dark:bg-nav px-5 py-0 shadow-xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#d1d0d4] dark:bg-test p-1">
                <Trophy
                  size={28}
                  weight="light"
                  className="text-nav hover:text-[#ff9a3c] dark:text-subtitle cursor-pointer hover:dark:text-[#ff9a3c]"
                />
              </span>
              <h2 className="text-subtitle dark:text-gray mt-2 text-lg font-jost text-gray-800">
                Caneco Cup
              </h2>
              <p className="text-subtitle line-clamp-2 mt-1 dark:text-gray">
                Sempre estamos abertos a novas ideias de projetos, ideias sobre
                contribuição da comunidade. Somos uma comunidade e precisamos
                que todos os desenvolvedor contribua.
              </p>
              <div className="flex justify-end px-16 mt-4 gap-2">
                <a
                  href="https://github.com/rafabcanedo/CanecoCup"
                  target="_blank"
                  className="dark:text-test font-alt text-sm cursor-pointer"
                  rel="noreferrer"
                >
                  <GithubLogo className="text-base text-primary" />
                </a>
                <a className="dark:text-test font-alt text-sm cursor-not-allowed disabled">
                  <Code className="text-base text-[#98d9b5]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-4">
          <div className="flex flex-col gap-6">
            <div className="flex h-48 w-full max-w-md flex-col justify-center overflow-hidden rounded-lg bg-nuv dark:bg-nav px-5 py-0 shadow-xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#d1d0d4] dark:bg-test p-1">
                <Rocket
                  size={28}
                  weight="light"
                  className="text-nav hover:text-[#352f44] dark:text-subtitle cursor-pointer hover:dark:text-[#352f44]"
                />
              </span>
              <h2 className="text-subtitle dark:text-gray mt-2 text-lg font-jost text-gray-800">
                Ecommerce Study
              </h2>
              <p className="text-subtitle line-clamp-2 mt-1 dark:text-gray">
                Sempre estamos abertos a novas ideias de projetos, ideias sobre
                contribuição da comunidade. Somos uma comunidade e precisamos
                que todos os desenvolvedor contribua.
              </p>
              <div className="flex justify-end px-16 mt-4 gap-2">
                <a
                  href="https://github.com/rafabcanedo/EcommerceFullStack"
                  target="_blank"
                  className="dark:text-test font-alt text-sm cursor-pointer"
                  rel="noreferrer"
                >
                  <GithubLogo className="text-base text-primary" />
                </a>
                <a className="dark:text-test font-alt text-sm cursor-not-allowed disabled">
                  <Code className="text-base text-[#98d9b5]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
