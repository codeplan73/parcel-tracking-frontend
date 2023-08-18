import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <form className="flex flex-col gap-5 bg-slate-100 px-10  md:px-20 py-10 md:py-20 justify-center items-center">
      <h4 className="text-2xl md:text-4xl font-bold my-6">Sign up wit us</h4>

      <input
        type="text"
        placeholder="First Name"
        className="w-full md:w-1/2 bg-white p-4 text-sm md:text-lg font-light rounded-xl outline-teal-900 shadow-sm"
        id=""
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        className="w-full md:w-1/2 bg-white p-4 text-sm md:text-lg font-light rounded-xl outline-teal-900 shadow-sm"
        id=""
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full md:w-1/2 bg-white p-4 text-sm md:text-lg font-light rounded-xl outline-teal-900 shadow-sm"
        id=""
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full md:w-1/2 bg-white p-4 text-sm md:text-lg font-light rounded-xl outline-teal-900 shadow-sm"
        id=""
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full md:w-1/2 bg-white p-4 text-sm md:text-lg font-light rounded-xl outline-teal-900 shadow-sm"
        id=""
        required
      />

      <button className="text-white bg-slate-700 w-full md:w-1/2 py-4 rounded-xl text-xl font-semibold hover:bg-slate-950">
        Login
      </button>

      <span>
        {`Don't`} Already have an account?{' '}
        <Link className="underline font-serif font-semibold" to="/login">
          Sign In
        </Link>
      </span>
    </form>
  )
}

export default Register
