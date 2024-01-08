import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="dark:text-subtitle text-3xl font-alt">
        Work in progress...
      </h1>
      <span className="dark:text-subtitle text-xl font-sans">
        This page is under constructor ⚠️
      </span>
      <Link to="/">
        <p className="dark:text-subtitle text-lg">Go To Home</p>
      </Link>
    </div>
  )
}
