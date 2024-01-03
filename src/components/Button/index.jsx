export default function Button({ title, link }) {
  return (
    <div>
      <button className="h-10 w-32 bg-primary hover:bg-[#42b883]">
        <a href={link}>{title}</a>
      </button>
    </div>
  )
}
