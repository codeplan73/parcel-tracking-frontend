const Homepage = () => {
  return (
    <>
      <header className="h-screen w-full bg-hero-bg bg-black bg-center bg-cover  bg-no-repeat flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col gap-6 justify-center items-center w-full">
          <form className="bg-white p-2 rounded-xl flex gap-2">
            <input
              type="text"
              placeholder="Input tracking ID / Alphacode"
              className="w-full md:w-[400px] text-md py-3 px-4 rounded-xl outline:none border-none"
            />
            <button className="bg-red-700 text-white px-6 py-3 rounded-2xl right-2">
              Search
            </button>
          </form>
          <span className="text-white text-center">
            Track shipment / FInd ans ship a product using Alphacode
          </span>
        </div>
      </header>
    </>
  )
}

export default Homepage
