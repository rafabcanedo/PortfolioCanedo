import Avatar from '../../assets/Avatar.png'

export default function Home() {
  return (
    <div
      id="home"
      className="flex flex-col min-h-screen items-center justify-center"
    >
      <div>
        <img src={Avatar} alt="Logo Canedo" />
      </div>
      <h1 className="text-black">test</h1>
    </div>
  )
}
