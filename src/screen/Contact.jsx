const Contact = () => {
  return (
    <>
      <header className="bg-slate-50 flex flex-col justify-center items-center gap-4 py-12">
        <h2 className="text-2xl md:text-4xl font-bold">Contact Us</h2>
        <p className="text-lg">Drop a message for us</p>
      </header>
      <form className="flex flex-col gap-5 bg-slate-100 px-20 py-20 justify-center items-center">
        <input
          type="text"
          name=""
          placeholder="Enter your Full Name"
          className="w-1/2 bg-white p-4 text-xl rounded-xl outline-teal-900 shadow-sm"
          id=""
          required
        />
        <input
          type="text"
          name=""
          placeholder="Enter Subject"
          className="w-1/2 bg-white p-4 text-xl rounded-xl outline-teal-900 shadow-sm"
          id=""
          required
        />
        <input
          type="email"
          name=""
          placeholder="Enter Your Email"
          className="w-1/2 bg-white p-4 text-xl rounded-xl outline-teal-900 shadow-sm"
          id=""
          required
        />
        <textarea
          name=""
          className="w-1/2 bg-white p-4 text-xl rounded-xl outline-teal-900 shadow-sm"
          id=""
          rows="5"
          required
        ></textarea>

        <button className="text-white bg-orange-700 w-1/2 py-4 rounded-xl text-xl font-semibold hover:bg-orange-500">
          Submit
        </button>
      </form>
    </>
  )
}

export default Contact
