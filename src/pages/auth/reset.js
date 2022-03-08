import React from 'react'

function Reset() {
  return (
     
    <div class="flex items-center justify-center h-screen bg-gray-700 sm:px-6">
    <div class="w-full max-w-sm p-4 bg-gray-900 rounded-md shadow-md sm:p-6">
        <div class="flex items-center justify-center">
            <span class="text-xl font-medium text-white">Reset Password</span>
        </div>
        <form class="mt-4">
            <label for="email" class="block">
                <span class="text-sm text-white">Password</span>
                <input type="password" id="password" name="password1" autocomplete="current-password"
                    class="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"
                    required />
            </label>
            <label for="password" class="block mt-3">
                <span class="text-sm text-white">Confirm Password</span>
                <input type="password" id="password" name="password2" autocomplete="current-password"
                    class="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"
                    required />
            </label>
            
            <div class="mt-6">
                <button type="submit"
                    class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 ">Change Password</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Reset