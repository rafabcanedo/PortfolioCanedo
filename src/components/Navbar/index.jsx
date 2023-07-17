import React, { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import Logo from '../Design/Logo'

import { X, List, Moon, Sun } from '@phosphor-icons/react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-navbar py-4 md:px-10 px-7">
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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-navbar md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? 'top-20 opacity-100'
              : 'top-[-490px] md:opacity-100 opacity-0'
          }`}
        >
          <li className="text-lg font-inter dark:text-white font-normal hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7">
            <a href="#">Home</a>
          </li>
          <li className="text-lg font-inter dark:text-white font-normal hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7">
            <a href="#">About</a>
          </li>
          <li className="text-lg font-inter dark:text-white font-normal hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7">
            <a href="#">Projects</a>
          </li>
          <li className="text-lg font-inter dark:text-white font-normal hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7">
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="flex flex-row items-center gap-2">
          {theme === 'light' ? (
            <Moon
              size={25}
              className="cursor-pointer"
              onClick={() => setTheme('dark')}
            />
          ) : (
            <Sun
              size={25}
              className="cursor-pointer text-white"
              onClick={() => setTheme('light')}
            />
          )}

          <button className="relative border-2 font-medium border-primary bg-transparent py-2 px-2 rounded-lg text-primary transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-lef before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
            Linkedin
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
