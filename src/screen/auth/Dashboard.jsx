import Sidebar from '../../components/auth/Sidebar'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-6 bg-slate-300 p-2">
      <Sidebar />
      <div className="col-span-3 bg-white">main</div>
    </div>
  )
}

export default Dashboard
