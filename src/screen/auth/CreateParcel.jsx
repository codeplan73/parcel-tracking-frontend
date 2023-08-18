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
          <form action=""></form>
        </div>
      </div>
    </div>
  )
}

export default CreateParcel
