import { useEffect, useState } from 'react'
import Link from 'next/link'
import links from './Lib/links'
import Logo from './Logotype'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Set the overflow of the body to hidden when the menu is open
      document.body.classList.add('overflow-hidden')
    } else {
      // Remove the overflow of the body when the menu is closed
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <header>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-8 py-6 lg:flex-row">
        <div className="relative">
          <Link className="absolute inset-0" href="/">
            <span className="sr-only">Ploot</span>
          </Link>
          <div className="mx-auto ml-1">
            <Logo className="h-8" />
          </div>
        </div>

        <div className="mr-24 hidden w-full lg:block">
          {/* Center the list horizontally */}
          <ul className="flex items-center justify-center space-x-14 p-4">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  className="text-lg font-medium capitalize text-primary-500 hover:text-accent-1-500"
                  href={'/' + link.href}
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <button
            className="flex h-10 w-10 items-center justify-center"
            type="button"
            onClick={() => setIsOpen(true)} // Open the mobile menu on click
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
          'text-dark-300 absolute inset-0 z-10 min-h-screen w-full overflow-hidden  bg-white transition-all'
        )}
        aria-expanded={isOpen}
      >
        <div className="container relative h-full">
          <div className="px8 flex items-center justify-between py-8">
            <div className="mx-auto ml-1">
              <Logo className="h-8" />
            </div>
            <button type="button" onClick={() => setIsOpen(false)}>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <nav className="relative z-40 pt-32 text-left" aria-label="Mobile menu">
            <ul className="space-y-4 lg:space-y-8">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    className="lg:text-8xl inline-block font-serif text-xl font-bold leading-none transition hover:text-warning-600"
                    href={'/' + link.href}
                    aria-label={link.label}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
