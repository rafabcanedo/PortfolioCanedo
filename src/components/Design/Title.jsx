export default function Title({ title }) {
  return (
    <div className="flex items-center justify-center">
      <h1 className="dark:text-subtitle font-semibold text-3xl cursor-pointer hover:underline hover:underline-offset-1 decoration-primary">
        {title}
      </h1>
    </div>
  )
}
