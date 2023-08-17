import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import {
  Homepage,
  ErrorPage,
  About,
  Contact,
  TrackParcel,
  Login,
  Register,
} from './screen/'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/track-parcel', element: <TrackParcel /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
])

export default router
