import Logo from '../../assets/Avatar.png';
import { InstagramLogo, LinkedinLogo, TwitchLogo, TwitterLogo } from '@phosphor-icons/react';

function Home() {
 return(
   <div className="flex flex-col items-center justify-center mt-12 h-screen">
   <img src={Logo} alt="Logo CanedoDev" width={300} height={300} className="rounded-2xl" />
   
   <div className="flex flex-col">
   <h2 className="font-sans text-3xl font-bold dark:text-white">
    Rafael Canedo
   </h2>
   
   <div className="flex flex-col mb-8">
   <span className="font-semibold font-sans text-lg dark:text-white">I'm Front End Developer</span>
   <p className="font-medium text-sm text-subtitle">Web Developer and coding my life</p>
   </div>
   </div>

   <div className="flex flex-row gap-4 mb-6">
   <a href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/" className="cursor-pointer hover:text-primary">
   <LinkedinLogo size={28} />
   </a>
   <a href="https://www.instagram.com/canedodev/" target="_blank" className="cursor-pointer hover:text-primary">
   <InstagramLogo size={28} />
   </a>
   <a href="https://www.twitch.tv/canedopriv" target="_blank" className="cursor-pointer hover:text-primary">
   <TwitchLogo size={28} />
   </a>
   <a href="https://twitter.com/canedopriv" target="_blank" className="cursor-pointer hover:text-primary">
   <TwitterLogo size={28} />
   </a>
   </div>
   

   <button className="relative border-2 font-medium border-primary bg-transparent py-2 px-2 rounded-lg text-primary transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-lef before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
    Know More
   </button>
   
   </div>
 )
}

export default Home;


// className="flex-1 flex items-center justify-center h-full"