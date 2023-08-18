import { Link } from 'react-router-dom'
import { BiSolidTachometer } from 'react-icons/bi'
import { MdCreate } from 'react-icons/md'
import {
  AiOutlineUserAdd,
  AiFillSetting,
  AiOutlineLogout,
} from 'react-icons/ai'

const Sidebar = () => {
  return (
    <aside className="hidden col-span-1 bg-white h-screen shadow-xl px-4 py-4 pt-6  md:flex flex-col gap-4 rounded-lg">
      <Link
        to="/auth/dashboard"
        className="w-full py-1 px-2 rounded flex items-center gap-2 text-xl hover:text-red-500 font-mono hover:bg-slate-200"
      >
        <BiSolidTachometer /> Dashboard
      </Link>
      <Link
        to="/auth/create-parce"
        className="w-full py-1 px-2 rounded flex items-center gap-2 text-xl hover:text-red-500 font-mono hover:bg-slate-200"
      >
        <MdCreate /> Create Parcel
      </Link>
      <Link
        to="/auth/profile"
        className="w-full py-1 px-2 rounded flex items-center gap-2 text-xl hover:text-red-500 font-mono hover:bg-slate-200"
      >
        <AiOutlineUserAdd /> Profile
      </Link>
      <Link
        to="/auth/profile"
        className="w-full py-1 px-2 rounded flex items-center gap-2 text-xl hover:text-red-500 font-mono hover:bg-slate-200"
      >
        <AiFillSetting /> Settings
      </Link>
      <Link
        onClick={() => {}}
        className="w-full py-1 px-2 rounded flex items-center gap-2 text-xl hover:text-red-500 font-mono hover:bg-slate-200"
      >
        <AiOutlineLogout /> Logout
      </Link>
    </aside>
  )
}

export default Sidebar
