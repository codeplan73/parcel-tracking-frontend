import { Link } from 'react-router-dom'
import { BiSolidTachometer } from 'react-icons/bi'
import { MdCreate } from 'react-icons/md'
import { FcShipped } from 'react-icons/fc'
import {
  AiOutlineUserAdd,
  AiFillSetting,
  AiOutlineLogout,
} from 'react-icons/ai'

const Sidebar = () => {
  return (
    <aside className="hidden col-span-1 bg-white h-[75vh] shadow-xl px-4 py-4 pt-6  md:flex flex-col gap-4 rounded-lg sticky top-0">
      <Link
        to="/auth/dashboard"
        className="w-full py-1 px-2 rounded flex items-center gap-2 text-lg hover:text-white font-mono hover:bg-slate-900"
      >
        <BiSolidTachometer /> Dashboard
      </Link>
      <Link
        to="/auth/parcels"
        className="w-full py-1 px-2 rounded flex items-center gap-2 text-lg hover:text-white font-mono hover:bg-slate-900"
      >
        <FcShipped /> Parcel List
      </Link>
      <Link
        to="/auth/create-parcel"
        className="w-full py-1 px-2 rounded flex items-center gap-2 text-lg hover:text-white font-mono hover:bg-slate-900"
      >
        <MdCreate /> Create Parcel
      </Link>
      <Link
        to="/auth/profile"
        className="w-full py-1 px-2 rounded flex items-center gap-2 text-lg hover:text-white font-mono hover:bg-slate-900"
      >
        <AiOutlineUserAdd /> Profile
      </Link>
      <Link
        to="/auth/profile"
        className="w-full py-1 px-2 rounded flex items-center gap-2 text-lg hover:text-white font-mono hover:bg-slate-900"
      >
        <AiFillSetting /> Settings
      </Link>
      <Link
        onClick={() => {}}
        className="w-full py-1 px-2 rounded flex items-center gap-2 text-lg hover:text-white font-mono hover:bg-slate-900"
      >
        <AiOutlineLogout /> Logout
      </Link>
    </aside>
  )
}

export default Sidebar
