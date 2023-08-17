import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="bg-footer-bg bg-slate-900 bg-no-repeat bg grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 py-12 px-12">
      <h4 className="text-2xl font-semibold text-[balance] text-white">
        Raven Logistics
      </h4>
      <div className="text-sm flex flex-col gap-2 text-white font-semibold">
        <h4 className="text-xl">Company</h4>
        <Link to="#" className="mt-4">
          Service Portfolio
        </Link>
        <Link to="#">About Us</Link>
        <Link to="#">Blog</Link>
        <Link to="#">Terms and Conditions</Link>
      </div>
      <div className="text-sm flex flex-col gap-2 text-white font-semibold ">
        <h4 className="text-xl">Other Services</h4>
        <Link to="#" className="mt-4">
          Get a Quote
        </Link>
        <Link to="#">Schedule a Pickup</Link>
        <Link to="#">Raven Alpha</Link>
        <Link to="#">Overseas Shipping</Link>
        <Link to="#">Report Issues</Link>
      </div>
      <div className="text-sm flex flex-col gap-2 text-white font-semibold">
        <h4 className="text-xl">Connect With us</h4>
        <div className="flex gap-4 mt-4">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsLinkedin />
        </div>
      </div>
    </footer>
  )
}

export default Footer
