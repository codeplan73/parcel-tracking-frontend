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

import { Dashboard, Profile, CreateParcel } from './screen/auth'

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
      { path: '/auth/dashboard', element: <Dashboard /> },
      { path: '/auth/create-parcel', element: <CreateParcel /> },
      { path: '/auth/profile', element: <Profile /> },
    ],
  },
])

export default router
