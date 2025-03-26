import { useState } from "react";
import {Link} from 'react-router-dom';

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-6">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Sign Up</h2>
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              className="mt-1 w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-green-600 focus:ring-green-600"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-green-600 focus:ring-green-600"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="mt-1 w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-green-600 focus:ring-green-600"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                className="mt-1 w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-green-600 focus:ring-green-600"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3"
                onClick={togglePasswordVisibility}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {passwordVisible ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12c0 1.6-1.4 3-3 3s-3-1.4-3-3 1.4-3 3-3 3 1.4 3 3z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2C7.033 2 3 5.034 3 9s4.033 7 9 7 9-3.034 9-7-4.033-7-9-7z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirm_password"
                className="mt-1 w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-green-600 focus:ring-green-600"
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3"
                onClick={toggleConfirmPasswordVisibility}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {confirmPasswordVisible ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12c0 1.6-1.4 3-3 3s-3-1.4-3-3 1.4-3 3-3 3 1.4 3 3z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2C7.033 2 3 5.034 3 9s4.033 7 9 7 9-3.034 9-7-4.033-7-9-7z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-[#19995C] p-3 text-white font-semibold shadow-md transition-transform duration-200 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>

        {/* Sign In Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-green-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
