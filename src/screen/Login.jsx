import { Link } from 'react-router-dom'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 bg-slate-100 px-10  md:px-20 py-10 md:py-20 justify-center items-center"
    >
      <h4 className="text-2xl md:text-4xl font-bold my-6">Sign In</h4>
      <input
        type="email"
        name=""
        placeholder="Email Address"
        className="w-full md:w-2/3 lg:w-1/3 bg-white p-4 text-sm md:text-lg font-light rounded-xl outline-teal-900 shadow-sm"
        id=""
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full  md:w-2/3 lg:w-1/3 bg-white p-4 text-sm md:text-lg font-light rounded-xl outline-teal-900 shadow-sm"
        id=""
        required
      />

      <button className="text-white bg-slate-700 w-full  md:w-2/3 lg:w-1/3 py-4 rounded-xl text-xl font-semibold hover:bg-slate-950">
        Login
      </button>

      <span>
        {`Don't`} have an account?{' '}
        <Link className="underline font-serif font-semibold" to="/register">
          Sign Up
        </Link>
      </span>
    </form>
  )
}

export default Login
