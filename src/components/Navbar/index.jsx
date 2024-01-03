import React, { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import Logo from '../Design/Logo'

import { X, List, Moon, Sun } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [click, setClick] = useState(false)

  const scrollTo = (id) => {
    const element = document.getElementById(id)

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })

    setClick(!click)
    setOpen(!open)
  }

  return (
    <div className="w-full fixed top-0 left-0 z-10 px-36">
      <div className="md:flex items-center justify-between bg-nuv dark:bg-nav py-4 md:px-10 px-7">
        <div>
          <Logo />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <X className="dark:text-white" />
          ) : (
            <List className="dark:text-white" />
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-nuv dark:bg-nav md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? 'top-20 opacity-100'
              : 'top-[-490px] md:opacity-100 opacity-0'
          }`}
        >
          <Link to="/">
            <li className="text-base font-inter dark:text-subtitle font-normal hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7 cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-base font-inter dark:text-subtitle font-normal hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7 cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/projects">
            <li className="text-base font-inter dark:text-subtitle font-normal hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7 cursor-pointer">
              Projects
            </li>
          </Link>
          <Link to="/blog">
            <li className="text-base font-inter dark:text-subtitle font-normal hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7 cursor-pointer">
              Blog
            </li>
          </Link>
          <Link to="/contact">
            <li className="text-base font-inter dark:text-subtitle font-normal hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7 cursor-pointer">
              Contact
            </li>
          </Link>

          <div className="flex flex-row items-center gap-2">
            {theme === 'light' ? (
              <Moon
                size={20}
                className="cursor-pointer"
                onClick={() => setTheme('dark')}
              />
            ) : (
              <Sun
                size={20}
                className="cursor-pointer text-white"
                onClick={() => setTheme('light')}
              />
            )}
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
