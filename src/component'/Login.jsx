import React from "react";

function Login() {
  return (
    <div className="text-3xl  font-bold  grid place-items-center h-full w-full">
      <form
        // onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-96 z-10 "
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Sign In
        </h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-700 text-white"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-300 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-700 text-white"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded transition duration-200"
        >
          Sign In
        </button>
        <p className="mt-4 text-gray-400 text-center">
          New to Netflix? <a href="/signup" className="text-red-500">Sign up now.</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
