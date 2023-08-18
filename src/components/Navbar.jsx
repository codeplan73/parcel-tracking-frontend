import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import logo from './../assets/gig-logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(true)

  const links = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/contact', label: 'Contact' },
    { link: '/track-parcel', label: 'Track Parcel' },
  ]

  return (
    <div className="relative">
      <nav className="h-16 md:h-28 w-full flex items-center justify-between px-6 md:px-22 bg-white drop-shadow-md">
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
        {user ? (
          <Link
            to="/auth/profile"
            className="hidden md:flex items-center gap-2 bg-slate-200 text-slate-800 px-4 py-2 rounded-lg outline:none font-thin hover:shadow-lg "
          >
            Jude Beling
            <AiOutlineUser />
          </Link>
        ) : (
          <Link
            to="/login"
            className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-lg outline:none font-thin hover:shadow-lg"
          >
            Sign In/Sign Up
          </Link>
        )}

        {!open ? (
          <GiHamburgerMenu
            className="w-8 h-8 md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <GrClose className="w-8 h-8" onClick={() => setOpen(!open)} />
        )}
      </nav>

      {open && (
        <div className="flex flex-col h-screen w-1/2 bg-slate-100 drop-shadow-sm gap-3 pl-8 pt-4 z-10 absolute top-16">
          {links.map((link) => (
            <>
              <Link
                key={link.link}
                onClick={() => setOpen(!open)}
                className="hover:text-red-700"
                to={link.link}
              >
                {link.label}
              </Link>
            </>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
