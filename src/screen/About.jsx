import aboutImage from '../assets/gig-about.svg'

const About = () => {
  return (
    <>
      <header className="bg-slate-100 flex flex-col justify-center items-center gap-4 py-12">
        <h2 className="text-2xl md:text-4xl font-bold">Who are we</h2>
        <p className="text-lg">A reputaion for speed and reliability</p>
      </header>

      <section className="flex flex-col md:flex-row items-start justify-between gap-10 p-5 ">
        <img src={aboutImage} className="h-auto flex-1" alt="" />
        <div className="flex-1 mt-5 flex flex-col gap-6">
          <p>
            GIGL is Africa’s leading indigenous logistics company powered by
            technology with a solid reputation for Ecommerce and social
            commerce-tailored logistics.
          </p>
          <p>
            We started in 2012 with a conviction that Ecommerce and social
            commerce are only possible with logistics. We followed through with
            a simple goal: remove the conventional hassles associated with
            last-mile deliveries and make logistics easy for individuals and
            corporates anywhere, anytime
          </p>
          <p>
            Since our first shipment in 2012, GIGL has expanded in leaps and
            bounds, connecting African vendors to global buyers and sellers by
            introducing its simplified “overseas shipping services” across
            several continents
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 px-10 bg-slate-100">
        <div className="flex flex-col items-center  text-center gap-4 bg-white p-5 rounded drop-shadow-xl">
          <h4 className="text-xl md:text-2xl font-semibold">INNOVATION</h4>
          <p>
            We are always finding ways to innovate in logistics because we
            believe endless possibilities exist. Innovation is deeply ingrained
            in our corporate culture and has consistently been our driving force
            for growth. We engineer new products and services that address
            market needs by leveraging technology and customer insights. Our
            solutions are intentionally suited for efficient and practical
            results.
          </p>
        </div>
        <div className="flex flex-col items-center  text-center gap-4 bg-white p-5 rounded drop-shadow-xl">
          <h4 className="text-xl md:text-2xl font-semibold">QUALITY</h4>
          <p>
            We have a track record for innovation within the logistics sector
            and place premium value on enhancing and sustaining quality
            throughout the organization. We practice and maintain “kaizen,” a
            continuous cycle of process improvements, to deliver operational
            excellence.
          </p>
        </div>
        <div className="flex flex-col items-center  text-center gap-4 bg-white p-5 rounded drop-shadow-xl">
          <h4 className="text-xl md:text-2xl font-semibold">PEOPLE</h4>
          <p>
            Ecommerce is nothing without logistics, so is GIGL without her
            employees. They are the bedrock of all that we do, with a passion
            for excellence that cuts across departments and roles. Our employees
            are the most valuable assets, and we prioritize their well-being by
            striving to provide a world-class work environment for our diverse
            and growing team.
          </p>
        </div>
      </section>
    </>
  )
}

export default About
