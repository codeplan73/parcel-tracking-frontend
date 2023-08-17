import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from './components/'
import Notification from './components/Notification'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Notification />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
