import React from 'react'

const Login = () => {
  return (
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
  <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
    {/* Left side image section */}
    <div className="flex-1 bg-indigo-700 text-center hidden md:flex">
      <div
        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
        }}
      ></div>
    </div>

    {/* Right side login form section */}
    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-700">
            Login
          </h1>
          <p className="text-[12px] text-gray-500">
            Please enter your credentials to log in
          </p>
        </div>
        <div className="w-full flex-1 mt-8">
          <div className="mx-auto max-w-xs flex flex-col gap-4">
            {/* Email input */}
            <input
              className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="email"
              placeholder="Enter your email"
            />
            {/* Password input */}
            <input
              className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="password"
              placeholder="Password"
            />
            {/* Login button */}
            <button className="mt-5 tracking-wide font-semibold bg-blue-700 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              <svg
                className="w-6 h-6 -ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <path d="M20 8v6M23 11h-6" />
              </svg>
              <span className="ml-3">Login</span>
            </button>
            {/* Sign-up link */}
            <p className="mt-6 text-xs text-gray-600 text-center">
              Don't have an account?{" "}
              <a href="">
                <span className="text-neutral-700 font-semibold">Sign up</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Login