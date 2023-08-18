const Card = ({ icon, title, text }) => {
  return (
    <div className="bg-white flex flex-col gap-4 shadow-lg rounded p-4 hover:text-white hover:bg-slate-950">
      <span>{icon}</span>
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-[balance]">{text}</p>
    </div>
  )
}

export default Card
