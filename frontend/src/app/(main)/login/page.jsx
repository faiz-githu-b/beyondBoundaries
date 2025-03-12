import React from 'react'

const Login = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
  <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div className="bg-gray-200 px-6 py-8 rounded shadow-md text-black w-full">
      <h1 className="mb-8 text-3xl text-center">Log in</h1>
      
      <input
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="email"
        placeholder="Email"
      />
      
      <input
        type="password"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="password"
        placeholder="Password"
      />
      
      <button
        type="submit"
        className="w-full text-center py-3 rounded bg-neutral-800 text-white hover:bg-green-dark focus:outline-none my-1"
      >
        Log in
      </button>
      
      <div className="text-center text-sm text-grey-dark mt-4">
        Don't have an account?   
        <a
          className="no-underline border-b border-blue text-blue"
          href="../signup/"
        >
           Sign up
        </a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login