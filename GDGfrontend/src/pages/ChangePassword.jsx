import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, Lock, KeyRound, Eye, EyeOff, ShieldCheck } from "lucide-react";

function App() {
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    const API_URL = `${import.meta.env.VITE_CHATBOT_API_URL}/api/v1`;
    try {
      const response = await fetch(`${API_URL}/auth/change-password`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            oldPassword,
            newPassword,
          }),
        }
      );

      if (response.ok) {
        toast.success("Password changed successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        const data = await response.json();
        toast.error(data.message || "Error changing password", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
        {/* Logo and Title */}
        <div className="text-center">
          <div className="flex justify-center">
            <ShieldCheck className="h-12 w-12 text-blue-600" strokeWidth={2} />
          </div>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Change Password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Update your account password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Email Field */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1">
              <Mail className="h-4 w-4 text-blue-500" />
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Old Password Field */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1">
              <Lock className="h-4 w-4 text-blue-500" />
              Current Password
            </label>
            <div className="relative">
              <input
                type={showOldPassword ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Enter current password"
                required
              />
              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showOldPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* New Password Field */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1">
              <KeyRound className="h-4 w-4 text-blue-500" />
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Enter new password"
                required
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showNewPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1">
              <KeyRound className="h-4 w-4 text-blue-500" />
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Confirm new password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Update Password
          </button>

          {/* Back to Login Link */}
          <p className="text-center text-sm text-gray-600">
            Don't want to change password?{" "}
            <a
              href="/login"
              className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              Back to Login
            </a>
          </p>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="rounded-xl shadow-lg border border-blue-100"
      />
    </div>
  );
}

export default App;
