import Sidebar from '../../components/auth/Sidebar'

const Profile = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-slate-100 p-6">
      <Sidebar />

      <div className="col-span-3 flex flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <h4 className="text-2xl md:text-4xl">Update Profile</h4>
          <p className="font-light text-center">Update Your Profle</p>
        </div>

        <div className="w-full bg-white rounded-xl p-10 flex flex-col gap-4 md:flex-row mt-8 justify-center items-center ">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <h4 className="text-xl font-semibold text-slate-600 bg-slate-300 text-center rounded-t-md py-1">
              Profile
            </h4>
            <form className="flex flex-col gap-4 pt-3 border p-2 rounded mb-8">
              <input
                type="text"
                value="Emmanuel"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
              <input
                type="text"
                value="Omonzebaguan"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
              <input
                disabled
                type="email"
                value="admin@gmail.com"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
              <input
                type="text"
                value="Update Address"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />

              <button className="bg-slate-950 w-full mt-6 text-white rounded-sm py-2 ">
                Update Profile
              </button>
            </form>
            <hr />
            <h4 className="text-xl font-semibold text-slate-600 bg-slate-200 text-center rounded-t-md py-1">
              Update Password
            </h4>
            <form className="flex flex-col gap-4 pt-3 border p-2 rounded">
              <input
                type="password"
                placeholder="Enter New Password"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full bg-white py-2 px-4 text-sm md:text-sm font-light rounded border border-slate-300 outline-slate-400 shadow-sm"
                id=""
              />
              <button className="bg-slate-950 w-full mt-6 text-white rounded-sm py-2 ">
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
