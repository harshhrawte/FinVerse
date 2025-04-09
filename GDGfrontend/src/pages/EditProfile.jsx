// // // import React, { useState, useEffect } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import { getProfile, updateProfile } from "../api/Profileapi";
// // // import { toast } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";

// // // import {
// // //   Camera,
// // //   Car,
// // //   Music,
// // //   CookingPot as Smoking,
// // //   Dog,
// // //   ArrowLeft,
// // //   Save,
// // //   Zap,
// // //   Wind,
// // //   Droplet,
// // //   Fuel,
// // //   Calendar, // For Age
// // //   Users, // For Gender (substitute for GenderMale)
// // //   Info, // For About
// // // } from "lucide-react";
// // // import axios from "axios";




// // // const EditProfile = () => {
// // //   let { userId } = useParams();
// // //   const navigate = useNavigate();
// // //   const token = localStorage.getItem("token");
  
// // //   const [user, setUser] = useState({
// // //     firstName: "",
// // //     lastName: "",
// // //     phoneNumber: "",
// // //     address: "",
// // //     age: "",
// // //     gender: "",
// // //     about: "",
// // //     profilePicture:""
// // //   });

// // //   useEffect(() => {
// // //     const fetchProfile = async () => {
// // //       const data = await getProfile(userId, token);
// // //       setUser(data);
// // //     };
// // //     fetchProfile();
// // //   }, [userId]);

// // //   const handleChange = (e) => {
// // //     setUser({ ...user, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     await updateProfile(userId, user, token);
// // //     navigate(`/profile/${userId}`);
// // //   };

// // //   const handleFileChange = async (event) => {
// // //     const file = event.target.files[0];
// // //     if (!file) return;

// // //     const formData = new FormData();
// // //     formData.append("profilePicture", file);

// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       const response = await axios.put(
// // //         `http://localhost:3000/api/v1/profile/upload-profile-picture/${userId}`,
// // //         formData,
// // //         {
// // //           headers: {
// // //             "Content-Type": "multipart/form-data",
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         }
// // //       );

// // //       toast.success("Profile picture updated!");
// // //       setUser((prev) => ({
// // //         ...prev,
// // //         profilePicture: response.data.profilePicture,
// // //       }));
// // //     } catch (error) {
// // //       console.error("Error uploading profile picture:", error);
// // //       toast.error("Failed to update profile picture");
// // //     }
// // //   };

 

// // //   return (
// // //     <div className="p-6 max-w-3xl mx-auto">
// // //       <h2 className="text-xl font-bold">Edit Profile</h2>
// // //       <form onSubmit={handleSubmit} className="space-y-3">
// // //         {/* Profile Picture Section */}
// // //         <div className="flex items-center space-x-8">
// // //               <div className="relative group">
// // //                 <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-blue-100">
// // //                   <img
// // //                     src={
// // //                       user.profilePicture 
// // //                       // ||   "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
// // //                     }
// // //                     alt="Profile"
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                 </div>

// // //                 <input
// // //                   type="file"
// // //                   accept="image/*"
// // //                   onChange={handleFileChange}
// // //                   className="hidden"
// // //                   id="profilePicture"
// // //                 />

// // //                 <button
// // //                   type="button"
// // //                   className="absolute bottom-0 right-0 bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-colors shadow-lg group-hover:scale-110 transform duration-200"
// // //                   onClick={() =>
// // //                     document.getElementById("profilePicture").click()
// // //                   }
// // //                 >
// // //                   <Camera size={20} />
// // //                 </button>
// // //               </div>
// // //               <div>
// // //                 <h2 className="text-2xl font-semibold text-gray-800">{`${user.firstName} ${user.lastName}`}</h2>
// // //                 <p className="text-gray-500 mt-1">{user.email}</p>
// // //               </div>
// // //             </div>
// // //         <input type="text" name="firstName" value={user.firstName} onChange={handleChange} placeholder="First Name" className="w-full p-2 border"/>
// // //         <input type="text" name="lastName" value={user.lastName} onChange={handleChange} placeholder="Last Name" className="w-full p-2 border"/>
// // //         <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} placeholder="Phone Number" className="w-full p-2 border"/>
// // //         <input type="text" name="address" value={user.address} onChange={handleChange} placeholder="Address" className="w-full p-2 border"/>
// // //         <input type="number" name="age" value={user.age} onChange={handleChange} placeholder="Age" className="w-full p-2 border"/>
// // //         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default EditProfile;




// // import React, { useState, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { getProfile, updateProfile } from "../api/Profileapi";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // import {
// //   Camera,
// //   ArrowLeft,
// //   Save,
// //   Calendar,
// //   Users,
// //   Info,
// //   Phone,
// //   MapPin,
// //   Mail,
// // } from "lucide-react";
// // import axios from "axios";

// // const EditProfile = () => {
// //   let { userId } = useParams();
// //   const navigate = useNavigate();
// //   const token = localStorage.getItem("token");
  
// //   const [user, setUser] = useState({
// //     firstName: "",
// //     lastName: "",
// //     phoneNumber: "",
// //     address: "",
// //     age: "",
// //     gender: "",
// //     about: "",
// //     email: "",
// //     profilePicture: ""
// //   });

// //   const [loading, setLoading] = useState(true);
// //   const [saving, setSaving] = useState(false);

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         setLoading(true);
// //         const data = await getProfile(userId, token);
// //         setUser(data);
// //       } catch (error) {
// //         toast.error("Failed to load profile data");
// //         console.error(error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchProfile();
// //   }, [userId, token]);

// //   const handleChange = (e) => {
// //     setUser({ ...user, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       setSaving(true);
// //       await updateProfile(userId, user, token);
// //       toast.success("Profile updated successfully!");
// //       navigate(`/profile/${userId}`);
// //     } catch (error) {
// //       toast.error("Failed to update profile");
// //       console.error(error);
// //       setSaving(false);
// //     }
// //   };

// //   const handleFileChange = async (event) => {
// //     const file = event.target.files[0];
// //     if (!file) return;

// //     const formData = new FormData();
// //     formData.append("profilePicture", file);

// //     try {
// //       setSaving(true);
// //       const response = await axios.put(
// //         `http://localhost:3000/api/v1/profile/upload-profile-picture/${userId}`,
// //         formData,
// //         {
// //           headers: {
// //             "Content-Type": "multipart/form-data",
// //             Authorization: `Bearer ${token}`,
// //           },
// //         }
// //       );

// //       toast.success("Profile picture updated!");
// //       setUser((prev) => ({
// //         ...prev,
// //         profilePicture: response.data.profilePicture,
// //       }));
// //     } catch (error) {
// //       console.error("Error uploading profile picture:", error);
// //       toast.error("Failed to update profile picture");
// //     } finally {
// //       setSaving(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center h-screen">
// //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="bg-gray-50 min-h-screen">
// //       {/* Header with back button */}
// //       <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
// //         <div className="max-w-4xl mx-auto flex items-center">
// //           <button 
// //             onClick={() => navigate(`/profile/${userId}`)}
// //             className="mr-4 p-2 rounded-full hover:bg-white/20 transition-colors"
// //           >
// //             <ArrowLeft size={24} />
// //           </button>
// //           <h1 className="text-2xl font-bold">Edit Your Profile</h1>
// //         </div>
// //       </div>

// //       <div className="max-w-4xl mx-auto p-6">
// //         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// //           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
// //             {/* Profile Picture Section */}
// //             <div className="flex flex-col md:flex-row items-center gap-8">
// //               <div className="relative group">
// //                 <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-blue-100 shadow-lg">
// //                   <img
// //                     src={
// //                       user.profilePicture || 
// //                       "/api/placeholder/400/400"
// //                     }
// //                     alt="Profile"
// //                     className="w-full h-full object-cover"
// //                   />
// //                 </div>

// //                 <input
// //                   type="file"
// //                   accept="image/*"
// //                   onChange={handleFileChange}
// //                   className="hidden"
// //                   id="profilePicture"
// //                 />

// //                 <button
// //                   type="button"
// //                   className="absolute bottom-2 right-2 bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-colors shadow-lg group-hover:scale-110 transform duration-200"
// //                   onClick={() =>
// //                     document.getElementById("profilePicture").click()
// //                   }
// //                 >
// //                   <Camera size={20} />
// //                 </button>
// //               </div>
// //               <div className="text-center md:text-left">
// //                 <h2 className="text-3xl font-bold text-gray-800">{`${user.firstName} ${user.lastName}`}</h2>
// //                 <p className="text-gray-500 mt-1 flex items-center justify-center md:justify-start">
// //                   <Mail size={16} className="mr-2" />
// //                   {user.email}
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           <form onSubmit={handleSubmit} className="p-8">
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               {/* Personal Information */}
// //               <div className="md:col-span-2">
// //                 <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
// //                   <Info size={20} className="mr-2 text-blue-500" />
// //                   Personal Information
// //                 </h3>
// //                 <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>
// //               </div>

// //               <div className="space-y-2">
// //                 <label className="block text-sm font-medium text-gray-700">First Name</label>
// //                 <input 
// //                   type="text" 
// //                   name="firstName" 
// //                   value={user.firstName} 
// //                   onChange={handleChange} 
// //                   placeholder="First Name" 
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
// //                 />
// //               </div>

// //               <div className="space-y-2">
// //                 <label className="block text-sm font-medium text-gray-700">Last Name</label>
// //                 <input 
// //                   type="text" 
// //                   name="lastName" 
// //                   value={user.lastName} 
// //                   onChange={handleChange} 
// //                   placeholder="Last Name" 
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
// //                 />
// //               </div>

// //               <div className="space-y-2">
// //                 <label className="block text-sm font-medium text-gray-700 flex items-center">
// //                   <Phone size={16} className="mr-2 text-blue-500" />
// //                   Phone Number
// //                 </label>
// //                 <input 
// //                   type="text" 
// //                   name="phoneNumber" 
// //                   value={user.phoneNumber} 
// //                   onChange={handleChange} 
// //                   placeholder="Phone Number" 
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
// //                 />
// //               </div>

// //               <div className="space-y-2">
// //                 <label className="block text-sm font-medium text-gray-700 flex items-center">
// //                   <Calendar size={16} className="mr-2 text-blue-500" />
// //                   Age
// //                 </label>
// //                 <input 
// //                   type="number" 
// //                   name="age" 
// //                   value={user.age} 
// //                   onChange={handleChange} 
// //                   placeholder="Age" 
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
// //                 />
// //               </div>

// //               <div className="space-y-2">
// //                 <label className="block text-sm font-medium text-gray-700 flex items-center">
// //                   <Users size={16} className="mr-2 text-blue-500" />
// //                   Gender
// //                 </label>
// //                 <select
// //                   name="gender"
// //                   value={user.gender}
// //                   onChange={handleChange}
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
// //                 >
// //                   <option value="">Select Gender</option>
// //                   <option value="male">Male</option>
// //                   <option value="female">Female</option>
// //                   <option value="other">Other</option>
// //                   <option value="prefer-not-to-say">Prefer not to say</option>
// //                 </select>
// //               </div>

// //               <div className="space-y-2">
// //                 <label className="block text-sm font-medium text-gray-700 flex items-center">
// //                   <MapPin size={16} className="mr-2 text-blue-500" />
// //                   Address
// //                 </label>
// //                 <input 
// //                   type="text" 
// //                   name="address" 
// //                   value={user.address} 
// //                   onChange={handleChange} 
// //                   placeholder="Address" 
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
// //                 />
// //               </div>

// //               <div className="md:col-span-2 space-y-2">
// //                 <label className="block text-sm font-medium text-gray-700 flex items-center">
// //                   <Info size={16} className="mr-2 text-blue-500" />
// //                   About Me
// //                 </label>
// //                 <textarea
// //                   name="about"
// //                   value={user.about || ""}
// //                   onChange={handleChange}
// //                   placeholder="Tell us about yourself..."
// //                   rows="4"
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
// //                 ></textarea>
// //               </div>
// //             </div>

// //             <div className="mt-8 flex justify-end">
// //               <button
// //                 type="button"
// //                 onClick={() => navigate(`/profile/${userId}`)}
// //                 className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 mr-4 hover:bg-gray-50 transition-colors"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 type="submit"
// //                 disabled={saving}
// //                 className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-colors flex items-center shadow-md"
// //               >
// //                 {saving ? (
// //                   <>
// //                     <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
// //                     Saving...
// //                   </>
// //                 ) : (
// //                   <>
// //                     <Save size={18} className="mr-2" />
// //                     Save Profile
// //                   </>
// //                 )}
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EditProfile;



// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getProfile, updateProfile } from "../api/Profileapi";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import {
//   Camera,
//   ArrowLeft,
//   Save,
//   Calendar,
//   Users,
//   Info,
//   Phone,
//   MapPin,
//   Mail,
//   User,
//   X,
//   Check,
// } from "lucide-react";
// import axios from "axios";

// const EditProfile = () => {
//   let { userId } = useParams();
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
  
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     address: "",
//     age: "",
//     gender: "",
//     about: "",
//     email: "",
//     profilePicture: ""
//   });

//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [activeSection, setActiveSection] = useState("personal");

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         setLoading(true);
//         const data = await getProfile(userId, token);
//         setUser(data);
//       } catch (error) {
//         toast.error("Failed to load profile data");
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, [userId, token]);

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setSaving(true);
//       await updateProfile(userId, user, token);
//       toast.success("Profile updated successfully!");
//       navigate(`/profile/${userId}`);
//     } catch (error) {
//       toast.error("Failed to update profile");
//       console.error(error);
//       setSaving(false);
//     }
//   };

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("profilePicture", file);

//     try {
//       setSaving(true);
//       const response = await axios.put(
//         `http://localhost:3000/api/v1/profile/upload-profile-picture/${userId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       toast.success("Profile picture updated!");
//       setUser((prev) => ({
//         ...prev,
//         profilePicture: response.data.profilePicture,
//       }));
//     } catch (error) {
//       console.error("Error uploading profile picture:", error);
//       toast.error("Failed to update profile picture");
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//         <div className="p-8 bg-white rounded-2xl shadow-xl flex flex-col items-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
//           <p className="mt-4 text-gray-600 font-medium">Loading your profile...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
//       {/* Header with subtle pattern and animation */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 relative overflow-hidden shadow-lg">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-full h-full" style={{
//             backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 0%)",
//             backgroundSize: "50px 50px"
//           }}></div>
//         </div>
//         <div className="max-w-5xl mx-auto flex items-center justify-between relative z-10">
//           <div className="flex items-center">
//             <button 
//               onClick={() => navigate(`/profile/${userId}`)}
//               className="mr-4 p-2.5 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
//             >
//               <ArrowLeft size={22} />
//             </button>
//             <h1 className="text-2xl font-bold tracking-tight">Edit Your Profile</h1>
//           </div>
//           <div className="hidden md:block">
//             <button
//               type="button" 
//               onClick={() => document.getElementById("profileForm").dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
//               className="px-5 py-2.5 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-md"
//             >
//               <Save size={18} className="inline mr-2 -mt-1" />
//               Save Changes
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto p-6">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-500">
//           <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-10 relative">
//             {/* Decorative circles */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
            
//             {/* Profile Picture Section */}
//             <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
//               <div className="relative group transition-all duration-300">
//                 <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl group-hover:ring-white/50 transition-all duration-300">
//                   <img
//                     src={
//                       user.profilePicture || 
//                       "/api/placeholder/400/400"
//                     }
//                     alt="Profile"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                   className="hidden"
//                   id="profilePicture"
//                 />

//                 <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
//                   <button
//                     type="button"
//                     className="bg-white p-3 rounded-full text-blue-600 transform scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-blue-50"
//                     onClick={() => document.getElementById("profilePicture").click()}
//                   >
//                     <Camera size={20} />
//                   </button>
//                 </div>
//               </div>
//               <div className="text-center md:text-left text-white">
//                 <h2 className="text-3xl font-bold tracking-tight">{`${user.firstName} ${user.lastName}`}</h2>
//                 <p className="text-blue-100 mt-2 flex items-center justify-center md:justify-start">
//                   <Mail size={16} className="mr-2" />
//                   {user.email}
//                 </p>
//                 <p className="mt-3 text-blue-100 max-w-md opacity-80 text-sm">
//                   Complete your profile information below to help others connect with you better.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Navigation tabs */}
//           <div className="bg-gray-50 px-8 border-b border-gray-100">
//             <div className="flex overflow-x-auto space-x-1 -mb-px">
//               <button
//                 onClick={() => setActiveSection("personal")}
//                 className={`py-4 px-6 font-medium text-sm transition-colors duration-300 border-b-2 ${
//                   activeSection === "personal" 
//                     ? "border-blue-600 text-blue-600" 
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 <User size={16} className="inline mr-2" />
//                 Personal Info
//               </button>
//               <button
//                 onClick={() => setActiveSection("contact")}
//                 className={`py-4 px-6 font-medium text-sm transition-colors duration-300 border-b-2 ${
//                   activeSection === "contact" 
//                     ? "border-blue-600 text-blue-600" 
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 <Phone size={16} className="inline mr-2" />
//                 Contact Details
//               </button>
//               <button
//                 onClick={() => setActiveSection("about")}
//                 className={`py-4 px-6 font-medium text-sm transition-colors duration-300 border-b-2 ${
//                   activeSection === "about" 
//                     ? "border-blue-600 text-blue-600" 
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 <Info size={16} className="inline mr-2" />
//                 About Me
//               </button>
//             </div>
//           </div>

//           <form id="profileForm" onSubmit={handleSubmit} className="p-8">
//             {/* Personal Information */}
//             <div className={activeSection === "personal" ? "block" : "hidden"}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-3">
//                   <label className="block text-sm font-medium text-gray-700">First Name</label>
//                   <div className="relative">
//                     <input 
//                       type="text" 
//                       name="firstName" 
//                       value={user.firstName} 
//                       onChange={handleChange} 
//                       placeholder="First Name" 
//                       className="w-full p-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                     />
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <div className="p-1 bg-blue-50 rounded-lg">
//                         <User size={18} className="text-blue-500" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-3">
//                   <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                   <div className="relative">
//                     <input 
//                       type="text" 
//                       name="lastName" 
//                       value={user.lastName} 
//                       onChange={handleChange} 
//                       placeholder="Last Name" 
//                       className="w-full p-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                     />
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <div className="p-1 bg-blue-50 rounded-lg">
//                         <User size={18} className="text-blue-500" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-3">
//                   <label className="block text-sm font-medium text-gray-700 flex items-center">
//                     <Calendar size={16} className="mr-2 text-blue-500" />
//                     Age
//                   </label>
//                   <input 
//                     type="number" 
//                     name="age" 
//                     value={user.age} 
//                     onChange={handleChange} 
//                     placeholder="Age" 
//                     min="13"
//                     max="120"
//                     className="w-full p-3 pl-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   />
//                 </div>

//                 <div className="space-y-3">
//                   <label className="block text-sm font-medium text-gray-700 flex items-center">
//                     <Users size={16} className="mr-2 text-blue-500" />
//                     Gender
//                   </label>
//                   <select
//                     name="gender"
//                     value={user.gender || ""}
//                     onChange={handleChange}
//                     className="w-full p-3 pl-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
//                     style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                     <option value="prefer-not-to-say">Prefer not to say</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className={activeSection === "contact" ? "block" : "hidden"}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-3">
//                   <label className="block text-sm font-medium text-gray-700 flex items-center">
//                     <Phone size={16} className="mr-2 text-blue-500" />
//                     Phone Number
//                   </label>
//                   <div className="relative">
//                     <input 
//                       type="text" 
//                       name="phoneNumber" 
//                       value={user.phoneNumber} 
//                       onChange={handleChange} 
//                       placeholder="Phone Number" 
//                       className="w-full p-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                     />
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <div className="p-1 bg-blue-50 rounded-lg">
//                         <Phone size={18} className="text-blue-500" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-3">
//                   <label className="block text-sm font-medium text-gray-700 flex items-center">
//                     <MapPin size={16} className="mr-2 text-blue-500" />
//                     Address
//                   </label>
//                   <div className="relative">
//                     <input 
//                       type="text" 
//                       name="address" 
//                       value={user.address} 
//                       onChange={handleChange} 
//                       placeholder="Address" 
//                       className="w-full p-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                     />
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <div className="p-1 bg-blue-50 rounded-lg">
//                         <MapPin size={18} className="text-blue-500" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="md:col-span-2 space-y-3">
//                   <label className="block text-sm font-medium text-gray-700 flex items-center">
//                     <Mail size={16} className="mr-2 text-blue-500" />
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <input 
//                       type="email" 
//                       name="email" 
//                       value={user.email} 
//                       disabled
//                       className="w-full p-3 pl-12 border border-gray-200 bg-gray-50 rounded-xl text-gray-500 cursor-not-allowed"
//                     />
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <div className="p-1 bg-gray-100 rounded-lg">
//                         <Mail size={18} className="text-gray-400" />
//                       </div>
//                     </div>
//                     <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-400">
//                       Cannot be changed
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* About Me */}
//             <div className={activeSection === "about" ? "block" : "hidden"}>
//               <div className="space-y-3">
//                 <label className="block text-sm font-medium text-gray-700 flex items-center">
//                   <Info size={16} className="mr-2 text-blue-500" />
//                   About Me
//                 </label>
//                 <textarea
//                   name="about"
//                   value={user.about || ""}
//                   onChange={handleChange}
//                   placeholder="Tell us about yourself, your interests, hobbies, or anything you'd like others to know..."
//                   rows="6"
//                   className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 ></textarea>
//                 <p className="text-sm text-gray-500 flex items-center">
//                   <Info size={14} className="mr-1" />
//                   This information will be displayed on your public profile
//                 </p>
//               </div>
//             </div>

//             <div className="mt-8 flex justify-end">
//               <button
//                 type="button"
//                 onClick={() => navigate(`/profile/${userId}`)}
//                 className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 mr-4 hover:bg-gray-50 transition-colors flex items-center"
//               >
//                 <X size={18} className="mr-2" />
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 disabled={saving}
//                 className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//               >
//                 {saving ? (
//                   <>
//                     <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
//                     Saving...
//                   </>
//                 ) : (
//                   <>
//                     <Check size={18} className="mr-2" />
//                     Save Profile
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;





import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProfile, updateProfile } from "../api/profileApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Camera,
  ArrowLeft,
  Save,
  User,
  Phone,
  MapPin,
  Mail,
  Lock,
  Briefcase,
  CreditCard,
  Shield,
  X,
  Check,
} from "lucide-react";
import axios from "axios";

const FinVerseEditProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    email: "",
    investmentPreferences: "",
    riskTolerance: "moderate",
    financialGoals: "",
    notificationPreferences: {
      email: true,
      push: true,
      sms: false
    },
    profilePicture: ""
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeSection, setActiveSection] = useState("personal");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const data = await getProfile(userId, token);
        setUser(data);
      } catch (error) {
        toast.error("Failed to load profile data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [userId, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested properties for notification preferences
    if (name.startsWith("notification.")) {
      const prefName = name.split(".")[1];
      setUser({
        ...user,
        notificationPreferences: {
          ...user.notificationPreferences,
          [prefName]: e.target.checked
        }
      });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      await updateProfile(userId, user, token);
      toast.success("Profile updated successfully!");
      navigate(`/profile/${userId}`);
    } catch (error) {
      toast.error("Failed to update profile");
      console.error(error);
      setSaving(false);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePicture", file);

    try {
      setSaving(true);
      const response = await axios.put(
        `http://localhost:3000/api/v1/profile/upload-profile-picture/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Profile picture updated!");
      setUser((prev) => ({
        ...prev,
        profilePicture: response.data.profilePicture,
      }));
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      toast.error("Failed to update profile picture");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-900 to-blue-900">
        <div className="p-8 bg-indigo-800 rounded-2xl shadow-xl flex flex-col items-center border border-indigo-700">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-400"></div>
          <p className="mt-4 text-purple-200 font-medium">Loading your financial profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-900 min-h-screen text-gray-100">
      {/* Header with subtle pattern and animation */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-6 relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 0%)",
            backgroundSize: "50px 50px"
          }}></div>
        </div>
        <div className="max-w-5xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center">
            <button 
              onClick={() => navigate(`/profile/${userId}`)}
              className="mr-4 p-2.5 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft size={22} />
            </button>
            <h1 className="text-2xl font-bold tracking-tight">Update Financial Profile</h1>
          </div>
          <div className="hidden md:block">
            <button
              type="button" 
              onClick={() => document.getElementById("profileForm").dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
              className="px-5 py-2.5 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              <Save size={18} className="inline mr-2 -mt-1" />
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-indigo-900 rounded-2xl shadow-xl overflow-hidden border border-indigo-800 transform transition-all duration-500">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-10 relative">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
            
            {/* Profile Picture Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="relative group transition-all duration-300">
                <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-purple-300/30 shadow-2xl group-hover:ring-purple-300/50 transition-all duration-300">
                  <img
                    src={
                      user.profilePicture || 
                      "/api/placeholder/400/400"
                    }
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="profilePicture"
                />

                <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                  <button
                    type="button"
                    className="bg-indigo-700 p-3 rounded-full text-white transform scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-indigo-600"
                    onClick={() => document.getElementById("profilePicture").click()}
                  >
                    <Camera size={20} />
                  </button>
                </div>
              </div>
              <div className="text-center md:text-left text-white">
                <h2 className="text-3xl font-bold tracking-tight">{`${user.firstName} ${user.lastName}`}</h2>
                <p className="text-indigo-200 mt-2 flex items-center justify-center md:justify-start">
                  <Mail size={16} className="mr-2" />
                  {user.email}
                </p>
                <p className="mt-3 text-indigo-200 max-w-md opacity-80 text-sm">
                  Complete your FinVerse profile to receive personalized financial guidance and investment recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation tabs */}
          <div className="bg-indigo-950 px-8 border-b border-indigo-800">
            <div className="flex overflow-x-auto space-x-1 -mb-px">
              <button
                onClick={() => setActiveSection("personal")}
                className={`py-4 px-6 font-medium text-sm transition-colors duration-300 border-b-2 ${
                  activeSection === "personal" 
                    ? "border-purple-400 text-purple-400" 
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700"
                }`}
              >
                <User size={16} className="inline mr-2" />
                Personal Info
              </button>
              <button
                onClick={() => setActiveSection("financial")}
                className={`py-4 px-6 font-medium text-sm transition-colors duration-300 border-b-2 ${
                  activeSection === "financial" 
                    ? "border-purple-400 text-purple-400" 
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700"
                }`}
              >
                <Briefcase size={16} className="inline mr-2" />
                Financial Profile
              </button>
              <button
                onClick={() => setActiveSection("security")}
                className={`py-4 px-6 font-medium text-sm transition-colors duration-300 border-b-2 ${
                  activeSection === "security" 
                    ? "border-purple-400 text-purple-400" 
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700"
                }`}
              >
                <Shield size={16} className="inline mr-2" />
                Security & Preferences
              </button>
            </div>
          </div>

          <form id="profileForm" onSubmit={handleSubmit} className="p-8">
            {/* Personal Information */}
            <div className={activeSection === "personal" ? "block" : "hidden"}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-300">First Name</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="firstName" 
                      value={user.firstName} 
                      onChange={handleChange} 
                      placeholder="First Name" 
                      className="w-full p-3 pl-12 border border-indigo-700 bg-indigo-800/50 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors text-white"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <div className="p-1 bg-indigo-700 rounded-lg">
                        <User size={18} className="text-purple-300" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-300">Last Name</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="lastName" 
                      value={user.lastName} 
                      onChange={handleChange} 
                      placeholder="Last Name" 
                      className="w-full p-3 pl-12 border border-indigo-700 bg-indigo-800/50 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors text-white"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <div className="p-1 bg-indigo-700 rounded-lg">
                        <User size={18} className="text-purple-300" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-300 flex items-center">
                    <Phone size={16} className="mr-2 text-purple-400" />
                    Phone Number
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="phoneNumber" 
                      value={user.phoneNumber} 
                      onChange={handleChange} 
                      placeholder="Phone Number" 
                      className="w-full p-3 pl-12 border border-indigo-700 bg-indigo-800/50 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors text-white"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <div className="p-1 bg-indigo-700 rounded-lg">
                        <Phone size={18} className="text-purple-300" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-300 flex items-center">
                    <MapPin size={16} className="mr-2 text-purple-400" />
                    Address
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="address" 
                      value={user.address} 
                      onChange={handleChange} 
                      placeholder="Address" 
                      className="w-full p-3 pl-12 border border-indigo-700 bg-indigo-800/50 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors text-white"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <div className="p-1 bg-indigo-700 rounded-lg">
                        <MapPin size={18} className="text-purple-300" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-3">
                  <label className="block text-sm font-medium text-gray-300 flex items-center">
                    <Mail size={16} className="mr-2 text-purple-400" />
                    Email Address
                  </label>
                  <div className="relative">
                    <input 
                      type="email" 
                      name="email" 
                      value={user.email} 
                      disabled
                      className="w-full p-3 pl-12 border border-indigo-800 bg-indigo-950 rounded-xl text-gray-400 cursor-not-allowed"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <div className="p-1 bg-indigo-900 rounded-lg">
                        <Mail size={18} className="text-gray-500" />
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500">
                      Contact support to change email
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Profile */}
            <div className={activeSection === "financial" ? "block" : "hidden"}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-300 flex items-center">
                    <CreditCard size={16} className="mr-2 text-purple-400" />
                    Risk Tolerance
                  </label>
                  <select
                    name="riskTolerance"
                    value={user.riskTolerance || "moderate"}
                    onChange={handleChange}
                    className="w-full p-3 pl-4 border border-indigo-700 bg-indigo-800/50 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors appearance-none text-white"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
                  >
                    <option value="conservative">Conservative</option>
                    <option value="moderate">Moderate</option>
                    <option value="aggressive">Aggressive</option>
                    <option value="very-aggressive">Very Aggressive</option>
                  </select>
                  <p className="text-xs text-indigo-300">This helps us determine appropriate investment recommendations</p>
                </div>

                <div className="md:col-span-2 space-y-3">
                  <label className="block text-sm font-medium text-gray-300 flex items-center">
                    <Briefcase size={16} className="mr-2 text-purple-400" />
                    Investment Preferences
                  </label>
                  <div className="relative">
                    <textarea
                      name="investmentPreferences"
                      value={user.investmentPreferences || ""}
                      onChange={handleChange}
                      placeholder="Describe your investment preferences (e.g., ESG focus, tech sector, dividend stocks, etc.)"
                      rows="3"
                      className="w-full p-4 border border-indigo-700 bg-indigo-800/50 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors text-white"
                    ></textarea>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-3">
                  <label className="block text-sm font-medium text-gray-300 flex items-center">
                    <Briefcase size={16} className="mr-2 text-purple-400" />
                    Financial Goals
                  </label>
                  <div className="relative">
                    <textarea
                      name="financialGoals"
                      value={user.financialGoals || ""}
                      onChange={handleChange}
                      placeholder="What are your financial goals? (e.g., retirement in 20 years, saving for education, buying a home)"
                      rows="3"
                      className="w-full p-4 border border-indigo-700 bg-indigo-800/50 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors text-white"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Preferences */}
            <div className={activeSection === "security" ? "block" : "hidden"}>
              <div className="space-y-6">
                <div className="p-6 bg-indigo-800/30 rounded-xl border border-indigo-700">
                  <h3 className="text-lg font-medium text-purple-300 mb-4 flex items-center">
                    <Shield size={18} className="mr-2" />
                    Notification Preferences
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox"
                          name="notification.email"
                          checked={user.notificationPreferences?.email}
                          onChange={handleChange}
                          className="h-5 w-5 text-purple-500 rounded border-indigo-600 focus:ring-purple-400 bg-indigo-800"
                        />
                        <span className="ml-2 text-gray-300">Email Notifications</span>
                      </label>
                      <span className="text-xs text-indigo-400">Investment alerts, market updates</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox"
                          name="notification.push"
                          checked={user.notificationPreferences?.push}
                          onChange={handleChange}
                          className="h-5 w-5 text-purple-500 rounded border-indigo-600 focus:ring-purple-400 bg-indigo-800"
                        />
                        <span className="ml-2 text-gray-300">Push Notifications</span>
                      </label>
                      <span className="text-xs text-indigo-400">Real-time alerts on mobile</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox"
                          name="notification.sms"
                          checked={user.notificationPreferences?.sms}
                          onChange={handleChange}
                          className="h-5 w-5 text-purple-500 rounded border-indigo-600 focus:ring-purple-400 bg-indigo-800"
                        />
                        <span className="ml-2 text-gray-300">SMS Notifications</span>
                      </label>
                      <span className="text-xs text-indigo-400">Critical alerts only</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-indigo-800/30 rounded-xl border border-indigo-700">
                  <h3 className="text-lg font-medium text-purple-300 mb-4 flex items-center">
                    <Lock size={18} className="mr-2" />
                    Security Settings
                  </h3>
                  
                  <button
                    type="button"
                    className="w-full md:w-auto px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-600 transition-colors flex items-center justify-center"
                  >
                    <Lock size={16} className="mr-2" />
                    Change Password
                  </button>
                  
                  <p className="mt-3 text-sm text-indigo-300">
                    For additional security options, including two-factor authentication, 
                    please visit the Security Center in your dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => navigate(`/profile/${userId}`)}
                className="px-6 py-3 rounded-xl border border-indigo-700 text-gray-300 mr-4 hover:bg-indigo-800 transition-colors flex items-center"
              >
                <X size={18} className="mr-2" />
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-indigo-900/50 transform hover:-translate-y-1"
              >
                {saving ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Check size={18} className="mr-2" />
                    Save Profile
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FinVerseEditProfile;