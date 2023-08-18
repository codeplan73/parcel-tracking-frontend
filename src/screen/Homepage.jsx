import Card from './../components/Homepage/Card'
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

      <section className="flex flex-col gap-12 py-10 px-12 bg-slate-100 items-center">
        <h4 className="text-center leading-tight text-2xl md:text-4xl font-semibold md:font-bold my-5">
          Seamless Delivery Services
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            }
            title={'Ship Now'}
            text={'Request Pick Up/Delivery and Xpress Drop-off'}
          />
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            }
            title={'Ship Now'}
            text={'Request Pick Up/Delivery and Xpress Drop-off'}
          />
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            }
            title={'Ship Now'}
            text={'Request Pick Up/Delivery and Xpress Drop-off'}
          />
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            }
            title={'Ship Now'}
            text={'Request Pick Up/Delivery and Xpress Drop-off'}
          />
        </div>
      </section>
    </>
  )
}

export default Homepage
