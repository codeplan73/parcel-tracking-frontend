import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/gig-logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const links = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/contact', label: 'Contact' },
    { link: '/track-parcel', label: 'Track Parcel' },
  ]

  return (
    <>
      <nav className="h-16 md:h-28 w-full flex items-center justify-between px-12 md:px-22 bg-white drop-shadow-md relative">
        <Link to="/">
          <img
            className="h-12 w-16"
            src={logo}
            height={100}
            width={100}
            alt="Logo"
          />
        </Link>
        <div className=" hidden md:flex gap-8 md:text-md text-slate-900">
          {links.map((link) => (
            <Link key={link.link} className="hover:text-red-700" to={link.link}>
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          to="/login"
          className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-lg outline:none font-thin hover:shadow-lg"
        >
          Sign In/Sign Up
        </Link>

        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
            onClick={() => setOpen(!open)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </nav>

      {open && (
        <div className="flex flex-col h-screen w-1/3 bg-slate-100 drop-shadow-sm gap-3 pl-12 pt-4 z-10 absolute">
          {links.map((link) => (
            <Link
              key={link.link}
              onClick={() => setOpen(!open)}
              className="hover:text-red-700"
              to={link.link}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default Navbar
