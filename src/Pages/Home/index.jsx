import Avatar from '../../assets/Avatar.png'

export default function Home() {
  return (
    <div
      id="home"
      className="flex flex-col min-h-screen items-center justify-center"
    >
      <div>
        <img src={Avatar} width={500} height={500} alt="Logo Canedo" />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-sans text-2xl font-semibold flex flex-row">
          I'm a <p className="text-primary ml-2">FullStack Developer</p>
        </h3>
        <span className="font-sans text-subtitle text-2xl">
          Web/Mobile Developer and coding my life
        </span>
      </div>

      <div className="mt-6">
        <button className="flex items-center justify-center relative border-2 font-medium border-primary bg-transparent py-2 px-2 rounded-lg text-primary transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-lef before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
          Know More
        </button>
      </div>
    </div>
  )
}
