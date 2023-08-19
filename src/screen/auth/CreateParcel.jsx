import Sidebar from '../../components/auth/Sidebar'

const CreateParcel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-slate-100 p-6">
      <Sidebar />

      <div className="col-span-3 flex flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <h4 className="text-2xl md:text-4xl">Create Parcel</h4>
          <p className="font-light text-center">
            This is just an estimated cost for your shipment. Actual price may
            vary after creating a shipment
          </p>
        </div>

        <div className="w-full bg-white rounded-xl p-10 flex flex-col gap-4 md:flex-row mt-8 justify-center items-center ">
          <form className="w-full md:w-3/4 lg:w-1/2">
            <h4 className="text-xl font-semibold text-slate-600 bg-slate-300 text-center rounded-t-md py-1">
              {`Sender's`} Info
            </h4>
            <div className="flex flex-col gap-4 pt-3 border p-2 rounded mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
            </div>

            <h4 className="text-xl font-semibold text-slate-600 bg-slate-200 text-center rounded-t-md py-1">
              {`Receiver's`} Info
            </h4>
            <div className="flex flex-col gap-4 pt-3 border p-2 rounded">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
            </div>

            <h4 className="text-xl font-semibold text-slate-600 bg-slate-200 text-center rounded-t-md py-1">
              {`Parcel Details`} Info
            </h4>
            <div className="flex flex-col gap-4 pt-3 border p-2 rounded">
              <input
                type="text"
                placeholder="Item"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
              <input
                type="text"
                placeholder="Weight"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
              <input
                type="text"
                placeholder="Quantity"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
            </div>
            <div>
              <button className="bg-slate-950 w-full mt-6 text-white rounded-sm py-2 ">
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateParcel
