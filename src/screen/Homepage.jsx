import { BsGlobe, BsCart4 } from 'react-icons/bs'
import { MdOutlineEventNote, MdIndeterminateCheckBox } from 'react-icons/md'
import { AiFillApple, AiFillAndroid } from 'react-icons/ai'
import { SiCommerzbank } from 'react-icons/si'
import { BiSolidTimeFive } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import Card from './../components/Homepage/Card'
import appScreen from '../assets/gig-app-screen.png'
import Notification from '../components/Notification'
const Homepage = () => {
  return (
    <>
      <Notification />
      <header className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]  w-full bg-hero-bg bg-black bg-center bg-cover  bg-no-repeat flex flex-col items-center justify-center gap-5">
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
            icon={<BsGlobe className="w-12 h-12" />}
            title={'Overseas Shipping'}
            text={
              'Ship from UK/USA to Nigeria & Export to 230 plus locations worldwide'
            }
          />
          <Card
            icon={<MdOutlineEventNote className="w-12 h-12" />}
            title={' Get a Quick Quote'}
            text={'Calculate cost estimate for local & internatioal shipments'}
          />
          <Card
            icon={<BsCart4 className="w-12 h-12" />}
            title={'Personal Shopper'}
            text={'We shop quality products for you & ship to your doorsteps'}
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 w-full bg-slate-900 items-center gap-10 py-24 px-10">
        <div className="flex flex-col items-start justify-center gap-9">
          <h2 className="text-white md:text-4xl font-semibold">
            Raven Logistics, the for local and international shipping
          </h2>
          <div className="flex w-full gap-4">
            <Link
              to="#"
              className="flex justify-start items-center gap-2 px-1 py-1  text-white flex-1 bg-red-600 rounded-lg"
            >
              <AiFillApple className="text-white text-4xl" />
              <div className="flex flex-col">
                <span className="text-xs md:text-sm leading-tight">
                  Download on the
                </span>
                <span className="text-sm md:text-lg font-semibold">
                  App Store
                </span>
              </div>
            </Link>
            <Link
              to="#"
              className="flex justify-start items-center gap-2 p-2 text-slate-950 flex-1 bg-white rounded-lg"
            >
              <AiFillAndroid className="text-slate-950 text-4xl" />
              <div className="flex flex-col">
                <span className="text-sm">Get it on</span>
                <span className="text-lg font-semibold">Google play</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-slate-900 flex items-center justify-center">
          <img
            src={appScreen}
            className="h-80 w-80"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </section>

      <section className="w-full bg-slate-50 px-10 py-20 flex flex-col gap-12">
        <h2 className="text-4xl font-semibold">
          We take the <br />{' '}
          <span className="text-red-500">burden of logistics off you</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col gap-4">
            <MdIndeterminateCheckBox className="text-4xl" />
            <h4 className="text-xl font-bold">Latest Technology</h4>
            <p>
              Technology and its application are fundamental at GIGL. We
              understand the role of technology in providing an exceptional
              customer experience. For this reason, our processes, products and
              services are built around modern technology to help us deliver
              your shipments cheaper, safely and at the speed of light.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <SiCommerzbank className="text-4xl" />
            <h4 className="text-xl font-bold">Social Commerce</h4>
            <p>
              Pivotal to successful social commerce transactions is the ability
              for the end-user to receive items where and when needed. With an
              unmatched route network spanning urban and rural communalities,
              GIGL is the solution to efficient last-mile delivery. As a
              merchant, you only have to think about selling your products while
              GIGL delivers to your customers worldwide.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <BiSolidTimeFive className="text-4xl" />
            <h4 className="text-xl font-bold">Guaranteed Delivery</h4>
            <p>
              We are conscious of the relationship between time and money and
              utilize our resources optimally to meet your delivery needs. Our
              service commitment to you is hassle-free delivery. We are large
              enough to efficiently handle deliveries for large corporations yet
              small enough to deploy innovative delivery solutions that help
              small businesses.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Homepage
