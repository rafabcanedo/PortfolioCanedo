import { InstagramLogo, TwitchLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

export default function Footer() {
 return(
  <div className="flex flex-col mt-8 p-8 justify-center items-center gap-2">

   <p className="dark:text-subtitle">
    &copy; {new Date().getFullYear()} Canedo. All rights reserved
   </p>

   <div className="flex flex-row gap-2">
    <a href='https://www.instagram.com/canedodev/' target='_blank' rel='nooperner' className='cursor-pointer hover:text-primary dark:text-white dark:hover:text-primary'>
     <InstagramLogo size={20} />
    </a>
    
    <a href='https://www.twitch.tv/canedopriv' target='_blank' rel='nooperner' className='cursor-pointer hover:text-primary dark:text-white dark:hover:text-primary'>
     <TwitchLogo size={20} />
    </a>

    <a href='https://www.linkedin.com/in/rafael-canedo-4abaa8197/' target='_blank' rel='nooperner' className='cursor-pointer hover:text-primary dark:text-white dark:hover:text-primary'>
     <LinkedinLogo size={20} />
    </a>

    <a href='https://github.com/rafabcanedo' target='_blank' rel='nooperner' className='cursor-pointer hover:text-primary dark:text-white dark:hover:text-primary'>
     <GithubLogo size={20} />
    </a>

   </div>
  </div>
 )
}