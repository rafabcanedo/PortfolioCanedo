import React, { useState } from 'react'
import Logo from '../Design/Logo'

import { X, List } from '@phosphor-icons/react'

export function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <div className="w-full fixed top-0 left-0 z-10 md:px-36">
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
          <li
            className="text-base font-inter dark:text-subtitle font-normal hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7 cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </li>

          <li
            className="text-base font-inter dark:text-subtitle font-normal hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7 cursor-pointer"
            onClick={closeMenu}
          >
            About
          </li>

          <li
            className="text-base font-inter dark:text-subtitle font-normal hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7 cursor-pointer"
            onClick={closeMenu}
          >
            Projects
          </li>

          <li
            className="text-base font-inter dark:text-subtitle font-normal hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7 cursor-pointer"
            onClick={closeMenu}
          >
            Blog
          </li>

          <li
            className="text-base font-inter dark:text-subtitle font-normal hover:underline decoration-primary mr-6 md:ml-8 md:my-0 my-7 cursor-pointer"
            onClick={closeMenu}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  )
}
