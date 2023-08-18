import { FaPlaneArrival, FaShippingFast } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/auth/Sidebar'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-slate-100 p-6">
      <Sidebar />
      <div className="col-span-3 flex flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <h4 className="text-2xl md:text-4xl">
            {`We're`} exited to serve you!
          </h4>
          <p className="font-light text-center">
            The GIGGo is your on-demand delivery companion. It is specially
            built for fast and reliable pick-up/delivery service
          </p>
        </div>

        <div className="w-full bg-white rounded-xl p-10 flex flex-col gap-4 md:flex-row mt-8 justify-center items-center ">
          <Link
            to="/auth/create-parcel"
            className="flex flex-col gap-2 items-center justify-center max-w-xs text-center border bottom-1 rounded-lg  px-5 py-8 hover:bg-slate-900 hover:shadow-xl hover:text-white"
          >
            <FaShippingFast className="text-4xl" />
            <h4 className="text-2xl font-light">Domestic</h4>
            <p>Get the quote of an item meant for domestic shipping</p>
          </Link>
          <Link
            to="/auth/create-parcel"
            className="flex flex-col gap-2 items-center justify-center max-w-xs text-center border bottom-1 rounded-lg  px-5 py-8 hover:bg-slate-900 hover:shadow-xl hover:text-white"
          >
            <FaPlaneArrival className="text-4xl" />
            <h4 className="text-2xl font-light">International</h4>
            <p>Get the quote of an item meant for International shipping</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
