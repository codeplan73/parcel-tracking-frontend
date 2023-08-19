import { Link } from 'react-router-dom'
import Sidebar from '../../components/auth/Sidebar'

const Parcel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-slate-100 p-6">
      <Sidebar />
      <div className="col-span-3 flex flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <h4 className="text-2xl md:text-4xl">Parcel List</h4>
          <p className="font-light text-center">
            List of parcel created by you
          </p>
        </div>

        <div className="w-full bg-white rounded-xl p-10 flex flex-col gap-4 md:flex-row mt-8 justify-center items-center ">
          <div
            to="/auth/create-parcel"
            className="flex flex-col gap-2 items-start max-w-xs text-center border bottom-1 rounded-lg  px-5 py-8"
          >
            <h4 className="text-xl font-light">Receiver Name</h4>
            <h4 className="text-xl font-light">Item</h4>
            <div className="flex items-center gap-4 justify-between">
              <button className="border rounded text-red-700 px-2 py-1 border-red-600 hover:bg-red-500 hover:text-white">
                Delete
              </button>
              <button className="border rounded text-slate-950 px-2 py-1 border-slate-950 hover:bg-slate-950 hover:text-white">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Parcel
