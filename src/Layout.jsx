import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from './components/'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
