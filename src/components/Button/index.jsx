export default function Button({ title, link }) {
  return (
    <div>
      <button className="relative border-2 font-medium border-primary bg-transparent py-2 px-2 rounded-lg text-primary transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-lef before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
        <a href={link}>{title}</a>
      </button>
    </div>
  )
}
