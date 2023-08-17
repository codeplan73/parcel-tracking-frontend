import notification from '../assets/gig-notification.png'

const Notification = () => {
  return (
    <div className="bg-slate-800 p-2 flex gap-2 md:gap-6 justify-center items-center text-xs md:text-sm text-[balance0">
      <img
        src={notification}
        alt="notification"
        height={100}
        width={100}
        className="h-8 md:h-12"
      />
      <span className="text-white">
        Raven is LIVE! Shop, Ship & Make All Payment in Dollar
      </span>
      <button className="text-white text-xs md:text-sm bg-red-700 px-1 py-2 md:px-4 md:py-2 rounded">
        Learn More
      </button>
    </div>
  )
}

export default Notification
