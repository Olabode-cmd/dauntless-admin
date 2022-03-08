import React from 'react'

function Login() {
  return (
     
    <div className="flex items-center justify-center h-screen bg-gray-700 sm:px-6">
    <div className="w-full max-w-sm p-4 bg-gray-900 rounded-md shadow-md sm:p-6">
        <div className="flex items-center justify-center">
            <span className="text-xl font-medium text-white">Login</span>
        </div>
        <form className="mt-4">
            <label for="email" className="block">
                <span className="text-sm text-white">Email</span>
                <input type="email" id="email" name="email" autocomplete="username"
                    className="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"
                    required />
            </label>
            <label for="password" className="block mt-3">
                <span className="text-sm text-white">Password</span>
                <input type="password" id="password" name="password" autocomplete="current-password"
                    className="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"
                    required />
            </label>
            <div className="flex items-center justify-between mt-4">
                <div>
                    <label className="inline-flex items-center">
                        <input type="checkbox"
                            className="text-indigo-600 border form-checkbox focus:outline-none focus:shadow-outline" />
                        <span className="mx-2 text-sm text-white">Remember me</span>
                    </label>
                </div>
                <div>
                    <a className="block text-sm text-indigo-200 hover:underline focus:outline-none focus:underline"
                        href="#">Forgot
                        your password?</a>
                </div>
            </div>
            <div className="mt-6">
                <button type="submit"
                    className="w-full px-4 py-2 text-sm text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 ">Sign
                    in</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Login